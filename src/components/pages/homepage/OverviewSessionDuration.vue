<script lang="ts" setup>
import IGraph from "@/assets/svg/graph.vue";
import IMobileGraph from "@/assets/svg/mobile-graph.vue";

const data = {
  text: "Avarage session duration - 13.5Min",
  time: "13.5",
  timeLabel: "min",
};
</script>

<template>
  <div class="overview-session-duration">
    <div class="overview-session-duration-inner">
      <div class="title">
        <span> {{ data.text }} </span>
      </div>
      <div class="graph">
        <IGraph class="hide xxl-block xxxl-block" />
        <IMobileGraph class="hide xs-block sm-block lg-block xl-block" />
      </div>
      <div class="dot"></div>
      <div class="time">
        <span class="hm"> {{ data.time }} </span>
        <span class="label"> {{ data.timeLabel }} </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overview-session-duration {
  width: 308px;
  height: 179px;
  border-radius: 20px;
  background: #AAA7FF;
  box-shadow: 0px 4px 84px 0px rgba(0, 0, 0, 0.15);
  position: relative;

  .title {
    color: #000;
    font-family: Figtree;
    font-size: 20px;
    line-height: 28px;
    position: absolute;
    top: 14px;
    left: 19px;
  }

  .graph {
    position: absolute;
    left: 0px;
    top: 44px;
  }

  .dot {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--dark-color-200);
    top: 80px;
    right: 42px;
  }

  .time {
    position: absolute;
    right: 28px;
    bottom: 56px;
    border-radius: 6px;
    background: #1d1d1b;
    padding: 5px 8px;
    line-height: 17px;

    .hm,
    .label {
      font-size: 14px;
      color: #fff;
    }
  }
}

@media (max-width: 1199px) {
  .overview-session-duration .dot {
    // right: 32px;
    // top: 58px;
    width: 15px;
    height: 15px;
  }

  .overview-session-duration {
    width: 246px;
    height: 160px;
  }

  .overview-session-duration .graph,
  .overview-session-duration .graph svg {
    width: 100%;
  }

  .overview-session-duration .time {
    width: 77px;
    height: 27px;
    padding: 7px 7px;
    line-height: 10px;
    // right: 45px;
    // top: 28px;
  }

  .overview-session-duration .title {
    font-size: 18px;
    // bottom: 14px;
    // top: auto;
  }
}

@media (max-width: 767px) {
  .overview-session-duration {
    width: 246px;
    height: 128px;
  }
}
</style>