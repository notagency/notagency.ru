import { createSSRApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createRouter } from 'src/router';
import App from './App.vue';
import messages from 'src/messages.json';
import 'src/styles/main.scss';

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  messages,
});

export const createApp = () => {
  const router = createRouter();
  const app = createSSRApp(App);
  app.use(router);
  app.use(i18n);
  return { app, router };
};
