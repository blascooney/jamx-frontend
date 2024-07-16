<script setup lang="ts">
const { icon, rate, text } = defineProps({
  icon: { type: Object },
  rate: { type: String },
  text: { type: String },
});
</script>

<template>
  <div class="ps-number-box">
    <div class="icon flex-center">
      <component :is="icon"></component>
    </div>
    <span class="rate black bold">{{ rate }}</span>
    <span class="text black">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.ps-number-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    width: 72px;
    height: 72px;
  }

  .rate {
    font-size: 40px;
    line-height: 150%;
    font-weight: 600;
    color: white;
    text-align: center;
  }

  .text {
    font-size: 16px;
    line-height: 150%;
    color: white;
    text-align: center;
  }
}

@media (max-width: 1199px) {
  .ps-number-box .text {
    font-size: 15px;
  }
}

@media (max-width: 767px) {
  .ps-number-box .rate {
    font-size: 24px;
  }
  .ps-number-box .text {
    font-size: 12px;
  }
  .ps-number-box .icon {
    width: 40px;
    height: 40px;
  }
}
</style>