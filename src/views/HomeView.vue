<script setup lang="ts">
import Banner from "@/components/pages/homepage/Banner.vue";
import OurExperience from "@/components/pages/homepage/OurExperience.vue";
import Overview from "@/components/pages/homepage/Overview.vue";
import TrustedBy from "@/components/pages/homepage/TrustedBy.vue"
import Review from "@/components/global/Review.vue";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main class="main">
    <Banner />
    <Overview />
    <OurExperience />
    <TrustedBy />
    <Review />
  </main>
</template>