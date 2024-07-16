<script setup lang="ts">
import CoreButton from "@/components/core/Button.vue";
import SignupModal from "@/components/global/SignupModal.vue"
import { ref } from "vue";
const modalOpen = ref(false);
const translateY = ref(0);

const getTranslationY = () => {
  var element = document.querySelector('#custom_scroll_container > div');
  if (!element) return 0;

  var transform = window.getComputedStyle(element).getPropertyValue('transform');
  var translateY = 0;

  if (transform && transform !== 'none') {
    var matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix && matrix[1]) {
      var matrixValues = matrix[1].split(',');
      if (matrixValues.length >= 6) {
        translateY = parseFloat(matrixValues[5]);
      }
    }
  }

  return translateY;
}

const onClick = () => {
  modalOpen.value = true;
  translateY.value = getTranslationY();
}
</script>

<template>
  <div>
    <CoreButton
    class="btn-come text-center"
    :is-yellow="true"
    @click="onClick"
    >GET STARTED TODAY
    <slot />
  </CoreButton>
  <SignupModal :open="modalOpen" :onClose="() => modalOpen = false" :translateY="-translateY" />
  </div>
</template>

<style scoped>
.btn-come {
  width: 278px;
}
</style>