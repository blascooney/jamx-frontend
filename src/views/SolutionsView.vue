<script setup lang="ts">
import Banner from "@/components/pages/solutions/Banner.vue";
import PodcastPlayer from "@/components/pages/solutions/PodcastPlayer.vue";
import Empty from "@/components/pages/solutions/Empty.vue";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main class="main">
    <Banner />
    <PodcastPlayer />
    <Empty />
  </main>
</template>