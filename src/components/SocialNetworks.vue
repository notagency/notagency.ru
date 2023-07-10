<script setup lang="ts">
import AnimateBlock from 'src/components/AnimateBlock.vue';
import IconGithub from 'src/components/IconGithub.vue';
</script>

<template>
  <div class="socials flex justify-content-center">
    <a
      class="item zoom-in-link"
      href="https://github.com/notagency/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AnimateBlock type="right-to-left" :start-from="1000">
        <div class="icon github">
          <IconGithub />
        </div>
      </AnimateBlock>
    </a>
  </div>
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

.socials {
  .item {
    border-bottom: none;
    color: currentColor;

    .icon {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
