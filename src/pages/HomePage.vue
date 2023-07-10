<script setup lang="ts">
import {ref, useSSRContext, watch} from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { setMeta } from 'src/utils/meta';
import { setStatus404 } from 'src/utils/error404';
import { detectLocale, isValidLocale } from 'src/utils/language';
import AnimateBlock from 'src/components/AnimateBlock.vue';
import DefaultLayout from 'src/layouts/DefaultLayout.vue';
import Error404Page from 'src/pages/Error404Page.vue';
import * as process from "process";

const route = useRoute();
const { t, locale } = useI18n();
const is404 = ref(false);
const ctx = process.env.VUE_ENV === 'server' ? useSSRContext() : null;

const init = (lang: string) => {
  locale.value = detectLocale(lang);
  is404.value = !isValidLocale(lang);
  setStatus404(is404.value);
};

init(route.params.lang?.toString());

watch(
  () => route.params.lang,
  (lang) => {
    init(lang?.toString());
  }
);

if (process.env.VUE_ENV === 'server') {
  setMeta({
    title: t('Meta.title'),
    description: t('Meta.description'),
    url: `${ctx?.req.protocol}://${ctx?.req.get('host')}${ctx?.req.originalUrl}`,
    image:  `${ctx?.req.protocol}://${ctx?.req.get('host')}/share.png`,
  });
}
</script>

<template>
  <Error404Page v-if="is404" />
  <DefaultLayout v-else>
    <div class="page-index-hero">
      <div>
        <AnimateBlock type="top-to-bottom" :start-from="400">
          <h1>{{ t('Index.title') }}</h1>
        </AnimateBlock>
      </div>
      <div>
        <AnimateBlock type="zoom-in" :start-from="500">
          <h3>React | ReactNative | Vue | WebGL</h3>
          <h3>NodeJS | Laravel | PHP</h3>
        </AnimateBlock>
        <AnimateBlock type="zoom-in" :start-from="650">
          <hr class="hr" />
        </AnimateBlock>
        <AnimateBlock type="bottom-to-top" :start-from="1000">
          <h3>
            <span class="hidden-xs">
              {{ t('Index.anyQuestions') }}
              <br />
            </span>
            <a href="mailto:info@notagency.ru">info@notagency.ru</a>
          </h3>
        </AnimateBlock>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

.page-index-hero {
  margin: 0;
  white-space: normal;
  min-width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hr {
  width: 250px;
  border-top: 2px solid black;
  margin: 25px auto;
  text-transform: uppercase;
  @include device-xs {
    border-top: 1px solid black;
    margin: 15px auto;
  }
}
</style>
