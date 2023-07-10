import { Request } from 'express-serve-static-core';
import { renderToString } from '@vue/server-renderer';
import { createApp } from 'src/main';
import { detectLocale } from 'src/utils/language';
import { getMeta, TMeta } from 'src/utils/meta';

export interface TRenderResult {
  html: string;
  locale: string;
  meta: TMeta;
}

interface TContext {
  req: Request;
  rendered(): void;
  [key: string]: any;
}

export const render = async (ctx: TContext): Promise<TRenderResult> => {
  const { req } = ctx;
  const { app, router } = createApp();

  // устанавливаем маршрут для маршрутизатора серверной части
  const url = req.originalUrl;
  await router.push(url);
  // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
  await router.isReady();
  const locale = detectLocale(router.currentRoute.value.params.lang?.toString());
  const meta = getMeta();

  // const metaHead = getMetaHead({ store, req, cmsData, languageCode });
  // handler for vite
  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const html = await renderToString(app, ctx);
  return { html, locale, meta };
};

export default render;
