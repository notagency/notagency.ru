<script setup lang="ts">
import HeaderNotagency from 'src/components/HeaderNotagency.vue';
import FooterNotagency from 'src/components/FooterNotagency.vue';
</script>

<template>
  <HeaderNotagency />
  <div class="content">
    <slot />
  </div>
  <FooterNotagency />
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

.content {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  @include device-xs {
    flex: 1;
    justify-content: space-between;
  }
}
</style>
