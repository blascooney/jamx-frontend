<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import LoadingAnimation from "@/components/core/LoadingAnimation.vue";
import SmoothScrollView from "@/components/core/SmoothScrollView.vue";
import "./assets/styles/main.scss";
const isLoading = ref<boolean>(false);
const route = useRoute();

onMounted(() => {
  // setTimeout(() => {
  //   isLoading.value = false;
  // }, 30);
});
</script>

<template>
  <LoadingAnimation :is-loading="isLoading" />
  <SmoothScrollView v-if="
    route.path === '/terms' || 
    route.path === '/privacy-policty' || 
    route.path === '/ccpa-notice' || 
    route.path === '/podcasters-signup' || 
    route.path === '/podcasters-offer'
  ">
    <RouterView  />
  </SmoothScrollView>
  <SmoothScrollView v-else >
    <Header />
    <RouterView />
    <Footer />
  </SmoothScrollView>
</template>