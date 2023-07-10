import {
  createMemoryHistory,
  createRouter as VueCreateRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import HomePage from 'src/pages/HomePage.vue';

// import Error404Page from 'src/pages/error/Error404Page.vue';

export const createRouter = () => {
  const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/:lang', name: 'home-lang', component: HomePage },
    // { path: '/:pathMatch(.*)*', name: 'not-found', component: Error404Page }
  ];

  return VueCreateRouter({
    // base: store.languageCode === store.defaultLanguage ? '/' : `/${store.languageCode}`,
    // mode: 'history',
    history: process.env.VUE_ENV === 'client' ? createWebHistory() : createMemoryHistory(),
    routes: routes.map((route) => ({
      ...route,
      path: !route.path.startsWith('/') ? `/${route.path}` : route.path,
    })),
    // scrollBehavior(to, from, saved) {
    //   if (
    //     to.path === from.path ||
    //     (to.meta && to.meta.keepScrollPosition) ||
    //     from.path === '/' // TODO scroll-to-top should be triggered on each page after page load
    //   ) {
    //     return saved;
    //   }
    //   // use to restore a scroll position after prefetching within component code
    //   if (saved && to.meta) {
    //     to.meta.scrollPosition = saved;
    //   }
    //   return saved || { x: 0, y: 0 };
    // },
  });
};
