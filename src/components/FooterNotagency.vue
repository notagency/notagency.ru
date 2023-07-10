<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AnimateBlock from 'src/components/AnimateBlock.vue';

const { t } = useI18n();

const year = new Date().getFullYear();
</script>

<template>
  <div class="footer">
    <AnimateBlock type="bottom-to-top" :start-from="1100">
      <div class="inner visible-xs">
        <div>
          <div class="item">{{ t('Footer.inn') }} 771878367680</div>
          <div class="item">{{ t('Footer.psrn') }} 314774601700196</div>
        </div>
        <div class="item">{{ year }} &copy; NotAgency</div>
      </div>
      <div class="inner hidden-xs">
        <div class="item">{{ year }} &copy; NotAgency</div>
        <div class="item">{{ t('Footer.psrn') }} 314774601700196</div>
        <div class="item">{{ t('Footer.inn') }} 771878367680</div>
      </div>
    </AnimateBlock>
  </div>
</template>

<style scoped lang="scss">
@import 'src/styles/media-queries';

.footer {
  .inner {
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    padding: 8px 0;
    background: #000;
    color: #8c8c8c;

    @include device-xs {
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .item {
    padding: 0 10px;
  }

  a {
    border-bottom: 0;
    color: inherit;
  }
}
</style>
