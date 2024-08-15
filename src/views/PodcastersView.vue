<script setup lang="ts">
import Banner from "@/components/pages/podcasters/Banner.vue";
import PodcastPlatform from "@/components/pages/podcasters/PodcastPlatform.vue";
import HowJamxWorks from "@/components/pages/podcasters/HowJamxWorks.vue";
import WhyJamxDistrib from "@/components/pages/podcasters/WhyJamxDistrib.vue";
import TakePodcast from "@/components/pages/podcasters/TakePodcast.vue";
import OurPartners from "@/components/pages/podcasters/OurPartners.vue";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main class="main">
    <Banner />
    <PodcastPlatform />
    <HowJamxWorks />
    <WhyJamxDistrib />
    <TakePodcast />
    <OurPartners />
  </main>
</template>