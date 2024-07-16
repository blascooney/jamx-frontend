<script setup>
import PDF from "@/assets/docs/terms.pdf";
import { onMounted, ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
const { pdf, pages } = usePDF(PDF);
const width = ref();

onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');

  document.querySelector('html').classList.add('overflow-auto');
  document.querySelector('body').classList.add('overflow-auto');

  const doResize = () => {
    setTimeout(() => {
      width.value =  Math.min(window.innerWidth, 1024);
    });
  };

  window.addEventListener("resize", () => {
    doResize();
  });

  setTimeout(() => {
    doResize();
  }, 100);
});

</script>

<template>
  <div>
    <div style="
      max-width: 1024px; 
      right: 50%; 
      top: 10px; 
      z-index: 1; 
      transform: translateX(50%); 
      width: 100%;
      position: fixed; 
      display: flex; 
      justify-content: flex-end;
      padding-left: 50px;
      padding-right: 50px;
    ">
      <a href="/podcasters-offer" style="text-decoration: underline;">Back</a>
    </div>
    <div v-for="page in pages" :key="page" :style="`width: ${width}px; margin: 0 auto;`" >
      <VuePDF :pdf="pdf" :page="page" :width="width" />
      <hr style="margin: 0px;" />
    </div>
  </div>
</template>

<style>
.overflow-auto {
  overflow: auto !important;
}
</style>
