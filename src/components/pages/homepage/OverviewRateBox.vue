<script setup lang="ts">
const { icon, rate, text, background } = defineProps({
  icon: { type: Object },
  rate: { type: String },
  text: { type: String },
  background: { type: String },
});
</script>

<template>
  <div class="overview-rate-box" :style="{ background: `${background}` }">
    <div class="top flex-align-center">
      <div class="icon flex-center">
        <component :is="icon"></component>
      </div>
      <span class="rate black bold">{{ rate }}</span>
    </div>
    <div class="bottom">
      <span class="text black">{{ text }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overview-rate-box {
  width: 211px;
  height: 110px;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;

  .icon {
    width: 39px;
    height: 39px;
    background: var(--dark-color-300);
    border-radius: 50%;
  }

  .rate {
    font-size: 31px;
    line-height: 50px;
    padding-left: 10px;
  }

  .text {
    font-size: 16px;
    line-height: 20px;
  }
}

@media (max-width: 1199px) {
  .overview-rate-box {
    width: 175px;
    height: 109px;
    padding: 16px;
  }
}

@media (max-width: 767px) {
  .overview-rate-box .text {
    font-size: 16px;
  }
}
</style>