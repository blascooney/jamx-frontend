<script setup lang="ts">
import Banner from "@/components/pages/podcasters-offer/Banner.vue";
import AmplifyingVoice from "@/components/pages/podcasters-offer/AmplifyingVoice.vue";
import FeatureGallery from "@/components/pages/podcasters-offer/FeatureGallery.vue";
import POOverview from "@/components/pages/podcasters-offer/POOverview.vue";
import POFooter from "@/components/pages/podcasters-offer/POFooter.vue";
import IES01 from "@/assets/images/es-01.png";
import IES02 from "@/assets/images/es-02.png";
import IES03 from "@/assets/images/es-03.png";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main>
    <div class="es-group">
      <img :src="IES01" class="es-01" />
      <img :src="IES02" class="es-02" />
      <img :src="IES03" class="es-03" />
    </div>
    <div class="podcasters-offer">
      <Banner />
      <AmplifyingVoice />
      <FeatureGallery />
      <POOverview />
      <POFooter />
    </div>
  </main>
</template>

<style lang="scss">
  main {
    position: relative;
    .es-group {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      .es-01 {
        transform: translate(-30%, -30%);
        position: absolute;
      }
      .es-02 {
        position: absolute;
        right: 0px;
        top: 200px;
      }
      .es-03 {
        position: absolute;
        left: 0px;
        bottom: 00px;
      }
    }
    .podcasters-offer {
      position: relative;
      z-index: 1;
    }
  }
</style>