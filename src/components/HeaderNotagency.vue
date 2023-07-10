<script setup lang="ts">
import LogoNotagency from 'src/components/LogoNotagency.vue';
import SocialNetworks from 'src/components/SocialNetworks.vue';
import LanguageSwitcher from 'src/components/LanguageSwitcher.vue';
</script>

<template>
  <div class="header">
    <div class="inner flex justify-content-space-between align-items-center">
      <LogoNotagency />
      <div class="flex align-items-center">
        <SocialNetworks />
        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

.header {
  padding: 10px 0;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    @include device-xs {
      padding: 0 20px;
    }
  }
}
</style>
