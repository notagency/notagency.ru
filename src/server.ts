import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express, { Express, RequestHandler, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { networkInterfaces } from 'os';
import type { ModuleNode, ViteDevServer } from 'vite';
import * as url from 'url';
import type { TRenderResult } from 'src/entry-server';
import { PagesCache } from 'src/utils/server/pages-cache';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const resolve = (filePath: string) => path.resolve(__dirname, `..${filePath}`);

const getNetworkIp = () => {
  const nets = networkInterfaces();
  return Object.values(nets).reduce<string>(
    (res, networkInterfaceInfo) =>
      (networkInterfaceInfo || []).find(
        (one) => ['IPv4', 4].includes(one.family) && !one.internal && !!one.address
      )?.address || res,
    ''
  );
};

const renderServerInfo = async (localIp: string, networkIp: string, port: number) => {
  const localAddress = `http://${localIp}:${port}`;
  const networkAddress = `http://${networkIp}:${port}`;

  if (process.env.NODE_ENV === 'production') {
    console.log('local:', localAddress);
    if (networkIp) {
      console.log('network:', networkAddress);
    }
  } else {
    const chalk = (await import('chalk')).default;
    const boxen = (await import('boxen')).default;
    let lines = `${chalk.yellow('sequoia-site')} @ v${process.env.APP_VERSION}\n\n`;
    lines += `${chalk.gray('local:')} ${localAddress}\n`;
    lines += `${chalk.gray('network:')} ${networkAddress}\n\n`;
    console.log(boxen(lines, { padding: 1, borderColor: 'yellow' }));
  }
};

const startServer = ({ app }: { app: Express }) => {
  const host = '0.0.0.0';
  const port = 3000;

  app.listen(port, host, async () => {
    const localIp = host.replace('0.0.0.0', 'localhost');
    const networkIp = getNetworkIp();
    await renderServerInfo(localIp, networkIp, port);
  });
};

const serve = (path: string, cache: boolean) =>
  express.static(resolve(path), {
    maxAge: cache && process.env.NODE_ENV === 'production' ? 2592000000 : 0,
  });

const root = process.cwd();

const initExpress = async () => {
  let prodTemplate = '';
  const app = express();
  let vite: ViteDevServer | undefined = undefined;
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    vite = await createServer({
      root,
      logLevel: 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    prodTemplate = fs.readFileSync(resolve('/dist/client/index.html'), 'utf-8');
    // app.use((await import('compression')).default());
    app.use(
      '/',
      (await import('serve-static')).default(resolve('/dist/client'), {
        index: false,
      }) as RequestHandler
    );
  }

  app.use(bodyParser.json());
  // app.use('/', serve('/dist/client', true));
  app.use('/public', serve('/public', true));
  app.use(cookieParser());

  return { app, vite, prodTemplate };
};

const initRoutes = ({
  app,
  vite,
  prodTemplate,
}: {
  app: Express;
  vite?: ViteDevServer;
  prodTemplate: string;
}) => {
  const Error500page = fs.readFileSync(resolve('/500.html')).toString();

  const getAppCss = async (vite?: ViteDevServer) => {
    let appCss = '';
    const module = await vite?.moduleGraph.getModuleByUrl('/src/main.ts');
    if (module) {
      const moduleSet: Set<ModuleNode> = new Set();
      moduleSet.add(module);

      const cssJsUrls: Map<string, string> = new Map();
      const checked: Set<string> = new Set();
      const collectCssUrls = (modules: Set<ModuleNode>, styles: Map<string, string>) => {
        for (const mod of modules) {
          if (!mod.id || (mod.id && checked.has(mod.id))) {
            continue;
          }
          checked.add(mod.id);
          if (mod.ssrModule && mod.file) {
            if (mod.file.endsWith('.css') || /\?vue&type=style/.test(mod.id)) {
              styles.set(mod.url, mod.ssrModule.default);
            }
          }
          if (mod.importedModules.size > 0) {
            collectCssUrls(mod.importedModules, styles);
          }
        }
      };
      collectCssUrls(moduleSet, cssJsUrls);

      const cssUrls =
        module.ssrTransformResult?.deps?.filter((d) => d.endsWith('.css') || d.endsWith('.scss')) ||
        [];
      appCss = cssUrls
        .map((url) => `<link rel="stylesheet" type="text/css" href="${url}">`)
        .join('\n');
      cssJsUrls.forEach((v, k) => {
        appCss += `<style data-vite-dev-id="${k}">${v}</style>\n`;
      });
    }
    return appCss;
  };

  const anonymousUsersPageCache = new PagesCache();

  const sendError500 = async (res: Response, err: Error | null, code = 500) => {
    const _err = err || { message: 'unknown error', stack: '' };
    const errMessageEscaped = _err.message.split("'").join("\\'");
    let html = Error500page.toString();
    html = html
      .split('%description%')
      .join(`Попробуйте обновить страницу или повторить попытку через несколько минут.`);
    html = html.split('%errorMessage%').join(errMessageEscaped);
    html = html.split('%errorStack%').join(_err.stack || '');

    const HtmlMinifier = (await import('html-minifier')).default;

    html = HtmlMinifier.minify(html, {
      minifyCSS: true,
      minifyJS: true,
      removeEmptyElements: true,
      removeComments: true,
      collapseWhitespace: true,
    });
    res.status(code).send(html);
  };

  app.use('*', async (req, res) => {
    // Used for getting user's IP address
    // https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node/19524949#19524949
    // The correct method to get the remote IP, if the server is behind a proxy,
    // is request.headers['x-forwarded-for']
    // When using express with Node.js,
    // if you set app.set('trust proxy', true),
    // req.ip will return the real IP address even if behind proxy.
    const ip =
      req.headers['x-forwarded-for']?.toString()?.split(',').shift() ||
      req.socket?.remoteAddress ||
      req.ip;
    const logPrefix = `[request ${ip} ${req.originalUrl}]`;
    const startTs = Date.now();

    console.log(logPrefix, `handling started. url: "${req.originalUrl}"`);

    res.setHeader('Content-Type', 'text/html');

    const cacheKey = req.originalUrl;

    try {
      console.log(logPrefix, `started rendering`);

      if (req.baseUrl === '/404') {
        res.status(404);
      }

      // cache should be disabled on santa or if secretSanta cookie exists since fe could be changed
      const isCacheDisabled = process.env.NODE_ENV !== 'production';

      let template: string;
      let renderResult: TRenderResult;

      if (process.env.NODE_ENV !== 'production') {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('/index.html'), 'utf-8');
        template = (await vite?.transformIndexHtml(req.originalUrl, template)) || '';
        const render = (await vite?.ssrLoadModule('/src/entry-server.ts'))?.render;
        renderResult = await render({ req, manifest: {} });
      } else {
        template = prodTemplate;

        const doRender = async () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const render = (await import('../dist/server/entry-server.mjs')).render;
          const manifest = JSON.parse(
            fs.readFileSync(resolve('/dist/client/ssr-manifest.json'), 'utf-8')
          );
          return await render({ req, manifest });
        };

        if (isCacheDisabled) {
          renderResult = await doRender();
        } else {
          const cached = anonymousUsersPageCache.getPage(cacheKey);
          if (!cached) {
            console.log(logPrefix, `first render and caching, cache key: ${cacheKey}`);
            anonymousUsersPageCache.resetPage(cacheKey);
          } else if (Date.now() > cached.expires) {
            console.log(
              logPrefix,
              `rendering outdated cache and re-caching, cache key: ${cacheKey}`
            );
            anonymousUsersPageCache.resetPage(cacheKey);
          }
          if (cached?.renderResult) {
            console.log(logPrefix, `from cache, cache key: ${cacheKey}`);
            renderResult = cached.renderResult;
          } else {
            renderResult = await doRender();
            anonymousUsersPageCache.putPage(cacheKey, renderResult);
          }
        }
      }

      // template = template.split('<!--app-meta-head-->').join(renderResult.metaHead);
      template = template.split('<!--app-html-->').join(renderResult.html);
      const appCss = await getAppCss(vite);
      template = template.split('<!--app-css-->').join(appCss);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (err) {
      // vite && vite.ssrFixStacktrace(e);
      console.error(err, err.info);
      await sendError500(res, err);
      res.end();
    } finally {
      console.log(
        logPrefix,
        `${req.method} "${req.baseUrl}" - ${res.statusCode} in ${Date.now() - startTs}ms`
      );
    }
  });

  return { app, vite };
};

initExpress().then(initRoutes).then(startServer).catch(console.error);
