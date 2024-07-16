<script setup lang="ts">
import Banner from "@/components/contact/Banner.vue";
import AboutUs from "@/components/contact/AboutUs.vue";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main class="main">
    <Banner />
    <AboutUs />
  </main>
</template>