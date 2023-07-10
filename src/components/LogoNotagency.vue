<script setup lang="ts">
import AnimateBlock from 'src/components/AnimateBlock.vue';
import { getStatus404 } from 'src/utils/error404';

const is404 = getStatus404();
const tag = is404 ? 'router-link' : 'div';
</script>

<template>
  <AnimateBlock type="left-to-right" :start-from="200">
    <component :is="tag" to="/" class="logo" :class="{ 'cursor-default': !is404 }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.39 33.29">
        <path
          d="M13.82,19.09L19.13,1.7l5.38,17.37L36.92,32.36l-17.73-4L1.47,32.44Z"
          fill="transparent"
          stroke="#f70236"
        />
      </svg>
      <div class="name">NotAgency</div>
      <div class="since">since 2014</div>
    </component>
  </AnimateBlock>
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

.logo {
  position: relative;
  top: 2px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  color: currentColor;
  border-bottom: 0;

  @include device-xs {
    top: 3px;
  }
  @include prefers-dark-scheme {
    &:before {
      path {
        fill: currentColor;
      }
    }
  }

  &.cursor-default {
    cursor: default;
  }

  .name {
    font-family: var(--font-russo-one);
    font-weight: 400;
    position: relative;
    display: block;
    background: #fff;
    font-size: 26px;
    line-height: 25px;
    margin-top: 17px;
    padding: 0 0 3px;
    @include device-xs {
      margin-top: 11px;
      font-size: 19px;
      line-height: 21px;
      padding: 0;
    }

    @include prefers-dark-scheme {
      background: var(--dark-bg-color);
    }
  }

  .since {
    padding-top: 9px;
    padding-left: 31px;
    font-size: 10px;

    @include device-xs {
      padding-left: 19px;
      font-size: 8px;
    }
  }

  svg {
    position: absolute;
    width: 60px;
    height: 55px;
    top: 0;
    left: 26px;
    @include device-xs {
      width: 45px;
      height: 45px;
      left: 18px;
      top: -4px;
    }
  }
}
</style>
