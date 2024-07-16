<script setup lang="ts">
import Banner from "@/components/pages/publisher/Banner.vue";
import AudioExperience from "@/components/pages/publisher/AudioExperience.vue";
import AmplifyWebsite from "@/components/pages/publisher/AmplifyWebsite.vue";
import PublisherFeatures from "@/components/pages/publisher/PublisherFeatures.vue";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main class="main">
    <Banner />
    <AudioExperience />
    <AmplifyWebsite />
    <PublisherFeatures />
  </main>
</template>