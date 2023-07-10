<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import AnimateBlock from 'src/components/AnimateBlock.vue';

const route = useRoute();
const { locale } = useI18n();

const otherLocale = ref(locale.value === 'ru' ? 'en' : 'ru');
const href = ref(otherLocale.value === 'ru' ? '/' : `/${otherLocale.value}`);

watch(
  () => route.name,
  () => {
    otherLocale.value = locale.value === 'ru' ? 'en' : 'ru';
    href.value = otherLocale.value === 'ru' ? '/' : `/${otherLocale.value}`;
  }
);
</script>

<template>
  <div class="lang">
    <AnimateBlock type="right-to-left" :start-from="1100">
      <router-link class="zoom-in-link" :to="href"> {{ otherLocale }} </router-link>
    </AnimateBlock>
  </div>
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

.lang {
  margin-left: 20px;
  width: 40px;
  font-size: 16px;

  a,
  button {
    color: currentColor;
    background: none;
    border: none;
    display: inline-block;
    text-transform: uppercase;
    font-family: var(--font-russo-one);
    @include prefers-dark-scheme {
      color: #fff;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
