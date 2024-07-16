<script setup lang="ts">
import PodcastersSignup from "@/components/pages/podcasters-signup/PodcastersSignup.vue";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main>
    <PodcastersSignup />
  </main>
</template>

<style>

</style>