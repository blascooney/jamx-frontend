<script setup lang="ts">
import { ref } from "vue";
import IPlus from "../../assets/svg/plus.vue";
import IMinus from "../../assets/svg/minus.vue";
const { title } = defineProps({
  title: { type: String, default: "" },
});
const open = ref(false);
</script>


<template>
  <div class="collapse">
    <div @click="open = !open" class="collapse-header">
      <div class="faq-title title-heading-5" v-html="title"></div>
      <div class="collapse-toogle">
        <IMinus v-if="open" />
        <IPlus v-else />
      </div>
    </div>
    <transition name="fade">
      <div v-if="open" class="collapse-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.collapse {
  border-bottom: 2px solid #d8dfe2;

  .collapse-header {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .faq-title {
      color: #000;
      font-family: Public Sans;

      display: flex;
    }

    .collapse-toogle {
      margin-left: 10px;
    }
  }
  .collapse-content {
    padding: 0px 10px 10px 10px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-to {
    position: absolute;
    top: -20px;
  }
}
</style>