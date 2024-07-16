<script setup>
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
</script>

<template>
  <div
    class="custom-scroll-container"
    id="custom_scroll_container"
    data-scroll-container
  >
    <template v-if="isMobile">
      <slot />
    </template>
    <template v-else>
      <div data-scroll-section>
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
let instances = null;

export function useSmoothScrollView() {
  return instances;
}

export default {
  watch: {
    $route() {
      setTimeout(() => {
        this.lms.update();
      });

      setTimeout(() => {
        this.lms.update();
      }, 500);

      setTimeout(() => {
        this.lms.update();
      }, 1000);
    },
  },
  data() {
    return {
      isMobile: true,
      instances: [],
    };
  },
  created() {
    instances = this;
  },
  mounted() {
    this.checkMobileScreen();
    window.addEventListener("resize", this.checkMobileScreen);

    this.$nextTick(
      function () {
        let scrollContainer = document.querySelector("[data-scroll-container]");
        this.lms = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        setTimeout(() => {
          this.lms.update();
        }, 500);
      }.bind(this)
    );
  },
  methods: {
    checkMobileScreen() {
      this.isMobile = window.innerWidth <= 768;
    },
    getScrollbarRef() {
      return this.lms;
    },
  },
  destroyed() {
    this.lms.destroy();
  },
};
</script>

<style>
.c-scrollbar_thumb {
  background-color: #7e7b7b !important;
}
</style>