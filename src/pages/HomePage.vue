<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import HeaderNotagency from 'src/components/HeaderNotagency.vue';
import FooterNotagency from 'src/components/FooterNotagency.vue';
import AnimateBlock from 'src/components/AnimateBlock.vue';

const route = useRoute();
const { t, locale } = useI18n();
locale.value = route.params.lang === 'en' ? 'en' : 'ru';

watch(
  () => route.name,
  () => {
    locale.value = route.params.lang === 'en' ? 'en' : 'ru';
  }
);
</script>

<template>
  <HeaderNotagency />
  <div class="slide slide_hero">
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
  </div>
  <FooterNotagency />
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
