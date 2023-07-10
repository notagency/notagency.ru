import path from 'path';
import childProcess from 'child_process';
import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json';
import { promises as fs } from 'fs';
import { compileTemplate } from '@vue/compiler-sfc';

// temp fix of https://github.com/vuejs/core/issues/8303#issuecomment-1547540436
const __defProp = Object.defineProperty;
const __name = (target: any, value: any) =>
  __defProp(target, 'name', { value, configurable: true });
(globalThis as any).__name = __name;

let commitSha = '';
try {
  commitSha =
    process.env.CI_COMMIT_SHORT_SHA ||
    (childProcess.execSync('git rev-parse --short HEAD') + '').replace(/\r?\n?/g, '').trim();
} catch (e) {
  console.error('UNABLE TO GET GIT COMMIT HASH');
}

process.env.APP_VERSION = packageJson.version;
process.env.BUILD_COMMIT_HASH = commitSha;
process.env.BUILD_DATE = Date.now().toString();

const vueEnvPlugin = (): Plugin => {
  return {
    name: 'vue-env-plugin',
    transform(code, id, options) {
      return {
        code: code.split('process.env.VUE_ENV').join(options?.ssr ? "'server'" : "'client'"),
      };
    },
  };
};

const svgLoader = (options = {}): Plugin => {
  // const { svgoConfig, svgo, defaultImport } = options;

  const svgRegex = /\.svg(\?(raw|component|skipsvgo))?$/;

  return {
    name: 'svg-loader',
    enforce: 'pre',

    async load(id, options) {
      if (!id.match(svgRegex)) {
        return;
      }

      const [path, query] = id.split('?', 2);

      // const importType = query || defaultImport;
      //
      // if (importType === 'url') {
      //   return; // Use default svg loader
      // }

      let svg;

      try {
        svg = await fs.readFile(path, 'utf-8');
      } catch (ex) {
        console.warn(
          '\n',
          `${id} couldn't be loaded by vite-svg-loader, fallback to default loader`
        );
        return;
      }

      // if (importType === 'raw') {
      //   return `export default ${JSON.stringify(svg)}`;
      // }

      // if (svgo !== false && query !== 'skipsvgo') {
      //   svg = optimizeSvg(svg, {
      //     ...svgoConfig,
      //     path,
      //   }).data;
      // }

      const { code } = compileTemplate({
        id: JSON.stringify(id),
        source: svg,
        filename: path,
        transformAssetUrls: false,
      });

      return `${code}\nexport default { render: render }`;
    },
  };
};

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml: async (html: string) => {
      if (process.env.SSR === '0') {
        return await fs.readFile('./index.nossr.html', 'utf-8');
      }
      return html;
    },
  };
};

export default defineConfig({
  plugins: [vue(), tsconfigPaths(), svgLoader(), vueEnvPlugin(), htmlPlugin()],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, './src') },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js',
        customResolver: (url) => {
          if (/vue\/.+\/server-renderer/.test(url)) {
            return path.resolve(__dirname, `./node_modules/vue/server-renderer/index.js`);
          }
          return path.resolve(__dirname, `./node_modules/${url}`);
        },
      },
    ],
  },
  define: {
    'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    'process.env.APP_VERSION': `'${process.env.APP_VERSION}'`,
    'process.env.BUILD_COMMIT_HASH': `'${process.env.BUILD_COMMIT_HASH}'`,
    'process.env.BUILD_DATE': `'${process.env.BUILD_DATE}'`,
    'process.env.SSR': `${process.env.SSR}`,
  },
});
