<template>
  <div
    class="auto-move-slider"
    id="auto_move_slider"
    ref="autoMoveSlider"
    @mouseenter="pauseMovement"
    @mouseleave="resumeMovement"
  >
    <div class="child-wrapper" id="auto_move_slider_child_wrapper">
      <slot v-for="(num, index) in range(slotCount)" :key="index" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      galleryWidth: 0,
      movementInterval: null,
      slotCount: 1,
    };
  },
  mounted() {
    this.galleryWidth = this.$el.offsetWidth;
    this.startMovement();
  },
  unmounted() {
    clearInterval(this.movementInterval);
  },
  methods: {
    range(num) {
      return Array.from({ length: num }, (_, index) => index + 1);
    },
    startMovement() {
      clearInterval(this.movementInterval);
      this.movementInterval = setInterval(() => {
        const container = document.getElementById("auto_move_slider");
        const childWrapper = document.getElementById(
          "auto_move_slider_child_wrapper"
        );

        if (container || childWrapper) {
          const targetScrollLeft = container.scrollLeft + 1;
          const childWrapperWidth = childWrapper.clientWidth;

          if (
            container.clientWidth + container.scrollLeft + 10 >=
            childWrapperWidth
          ) {
            this.slotCount++;
          }

          gsap.to(container, {
            scrollLeft: targetScrollLeft,
            duration: 0.01,
            ease: "Linear.easeNone",
          });
        }
      }, 10);
    },
    resumeMovement() {
      this.startMovement();
    },
    pauseMovement() {
      clearInterval(this.movementInterval);
    },
  },
};
</script>

<style scoped lang="scss">
.auto-move-slider {
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  white-space: nowrap;
  display: flex;

  .child-wrapper {
    display: flex;
  }
}
</style>
