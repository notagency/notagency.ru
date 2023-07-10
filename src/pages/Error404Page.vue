<script setup lang="ts">
import {useSSRContext, watch} from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { detectLocale } from 'src/utils/language';
import { setMeta } from 'src/utils/meta';
import DefaultLayout from 'src/layouts/DefaultLayout.vue';

const route = useRoute();
const { t, locale } = useI18n();
const ctx = process.env.VUE_ENV === 'server' ? useSSRContext() : null;

locale.value = detectLocale(route.params.lang?.toString());

watch(
  () => route.name,
  () => {
    locale.value = detectLocale(route.params.lang?.toString());
  }
);

setMeta({
  title: t('Meta.title'),
  description: t('Meta.description'),
  url: `${ctx?.req.protocol}://${ctx?.req.get('host')}`,
  image:  `${ctx?.req.protocol}://${ctx?.req.get('host')}/share.png`,
});
</script>

<template>
  <DefaultLayout>
    <h1>404</h1>
    <h3>We are sorry, but requested page was not found</h3>
    <hr class="hr" />
    <h3>
      You can either return to <router-link to="/">main page</router-link>,<br />
      or contact us <a href="mailto:info@notagency.ru">info@notagency.ru</a>
    </h3>
  </DefaultLayout>
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

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
