<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  type: String,
  startFrom: Number,
});
const appear = ref(false);
// if (!playAnimation) {
setTimeout(() => {
  appear.value = true;
}, props.startFrom);
// }
</script>

<template>
  <div class="animate" :class="[props.type, { start: appear }]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.animate {
  opacity: 0;
  animation-duration: 0.6s;
  perspective: 1000px;
  backface-visibility: hidden;

  &.start {
    opacity: 1;
    &.top-to-bottom {
      animation-name: top_to_bottom;
    }
    &.bottom-to-top {
      animation-name: bottom_to_top;
    }
    &.left-to-right {
      animation-name: left_to_right;
    }
    &.right-to-left {
      animation-name: right_to_left;
    }
    &.zoom-in {
      animation-name: zoom_in;
      transform: scale(1);
    }
    &.zoom-out {
      animation-name: zoom_out;
      transform: scale(1);
    }
    &.fade-in {
      animation-name: fade_in;
    }
  }
}
/* Top to bottom keyframes */
@keyframes top_to_bottom {
  0% {
    transform: translate3d(0, -100px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
/* Bottom to top keyframes */
@keyframes bottom_to_top {
  0% {
    transform: translate3d(0, 100px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
/* Left to right keyframes */
@keyframes left_to_right {
  0% {
    transform: translate3d(-100px, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
/* Right to left keyframes */
@keyframes right_to_left {
  0% {
    transform: translate3d(100px, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
/* Appear from center in keyframes */
@keyframes zoom_in {
  0% {
    transform: scale(0.5);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
/* Appear from center out keyframes */
@keyframes zoom_out {
  0% {
    transform: scale(1.5);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
/* Alpha keyframes */
@keyframes fade_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
