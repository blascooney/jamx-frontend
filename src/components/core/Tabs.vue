<script lang="ts">
import { ref, watch, onMounted, toRefs } from "vue";
// @ts-ignore
import Swiper from "swiper";

export default {
  props: {
    tabs: { default: [], type: Array },
    tabIndex: { default: 0, type: Number },
  },
  setup(props) {
    const { tabs, tabIndex } = toRefs(props);
    const activeTab = ref(0);
    // @ts-ignore
    let swiper = null;

    onMounted(() => {
      swiper = new Swiper(".swiper-container", {
        initialSlide: activeTab.value,
        on: {
          slideChange: () => {
            // @ts-ignore
            activeTab.value = swiper.activeIndex;
          },
        },
      });
      changeTab(tabIndex.value);
    });

    function changeTab(index: number) {
      // @ts-ignore
      swiper.slideTo(index);
    }

    watch(
      () => tabIndex.value,
      () => {
        changeTab(tabIndex.value);
      }
    );

    return {
      activeTab,
      changeTab,
      tabs,
    };
  },
};
</script>

<template>
  <div class="tabs-container">
    <div class="tabs-container-content">
      <div class="tabs-nav">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeTab(index)"
          class="tab-nav-item title-heading-5"
          :class="{ active: activeTab === index }"
        >
          {{
            // @ts-ignore 
            tab.title 
          }}
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(tab, index) in tabs" :key="index">
            <slot :name="
              // @ts-ignore
              tab.slot
            "></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs-container {
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 0;
    opacity: 0.5;
    background: #fff;
  }

  .tabs-container-content {
    z-index: 1;
    position: relative;

    .tabs-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .tab-nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 10px;
        width: 100%;
        height: 78px;
        background: var(--primary-color-300);

        color: #fff;

        &.active {
          background: var(--primary-color-500);
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .tabs-container {
    border-radius: 0px;
  }
}
</style>
