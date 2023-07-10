import 'regenerator-runtime/runtime'; // used for runtime support for compiled/transpiled async functions
import { createApp } from 'src/main';

const getInitialState = async () => {
  const { app, router } = createApp();
  await router.isReady();
  app.mount('#app');
};

getInitialState().catch(console.error);
