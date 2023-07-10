import { Request } from 'express-serve-static-core';
import { renderToString } from '@vue/server-renderer';
import { createApp } from 'src/main';

export interface TRenderResult {
  html: string;
  // metaHead: string;
}

// interface TMetaHeadParams {
//   req: Request;
//   languageCode: string;
// }

interface TContext {
  req: Request;
  rendered(): void;
  [key: string]: any;
}

// const getMetaHead = ({ store, req, cmsData, languageCode }: TMetaHeadParams) => {
//   let title = selectors.seo.titleSelector(store);
//   let meta = selectors.seo.metaSelector(store);
//   const seoBreadcrumbs = selectors.seo.breadcrumbsSelector(store);
//   const breadcrumbTelevisionChannel = selectors.seo.breadcrumbTelevisionChannelSelector(store);
//   const breadcrumbProduct = selectors.seo.breadcrumbProductSelector(store);
//
//   const baseUrl = req.baseUrl;
//   let canonical = baseUrl;
//   const head: string[] = [];
//
//   if (baseUrl === '/vod/ivi/s_14241') {
//     canonical = '/vod/start/L3R2L3Nlcmllcy9wb3N0dWNoaXMtdi1tb3l1LWR2ZXI=';
//   }
//
//   cmsData.locales?.forEach((locale: string) => {
//     const path = store.languageCode !== store.defaultLanguage ? baseUrl.substring(3) : baseUrl;
//     const url = locale === store.defaultLanguage ? path : `/${locale}${path}`;
//     head.push(`<link rel="alternate" hreflang="${locale}" href="https://${req.hostname}${url}" />`);
//   });
//
//   if (cmsData.seoRules && cmsData.seoRules[baseUrl]) {
//     if (cmsData.seoRules[baseUrl].noindex) {
//       head.push('<meta name="robots" content="noindex, nofollow" />');
//     }
//     if (cmsData.seoRules[baseUrl].canonical) {
//       canonical = cmsData.seoRules[baseUrl].canonical;
//     }
//     if (cmsData.seoRules[baseUrl].metaTitle) {
//       title = cmsData.seoRules[baseUrl].metaTitle[languageCode] || '';
//     }
//
//     meta = setCustomMetaTags(meta, baseUrl, languageCode);
//   }
//
//   head.push(`<link rel="canonical" href="https://${req.hostname}${canonical}" />`);
//
//   if (title) {
//     head.push(`<title>${title}</title>`);
//   }
//
//   if (meta) {
//     head.push(generateMetaTags(meta));
//   }
//
//   if (seoBreadcrumbs.length > 0) {
//     head.push(generateSeoBreadcrumbs(seoBreadcrumbs));
//   }
//
//   if (breadcrumbTelevisionChannel) {
//     head.push(generateTypedBreadcrumb('TelevisionChannel', breadcrumbTelevisionChannel));
//   }
//
//   if (breadcrumbProduct) {
//     head.push(generateTypedBreadcrumb('Product', breadcrumbProduct));
//   }
//
//   return head.length > 0 ? head.join('\n') : '';
// };

export const render = async (ctx: TContext) => {
  const { req } = ctx;
  // const languageCode = global.languageCode || 'ru';

  return new Promise<TRenderResult>(async (resolve) => {
    const { app, router } = createApp();

    // устанавливаем маршрут для маршрутизатора серверной части
    const url = req.originalUrl;
    await router.push(url);
    // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
    await router.isReady();

    // const metaHead = getMetaHead({ store, req, cmsData, languageCode });
    // handler for vite
    // passing SSR context object which will be available via useSSRContext()
    // @vitejs/plugin-vue injects code into a component's setup() that registers
    // itself on ctx.modules. After the render, ctx.modules would contain all the
    // components that have been instantiated during this render call.
    const ctx = {};
    const html = await renderToString(app, ctx);
    resolve({ html });
  });
};

export default render;
