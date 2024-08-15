<script setup lang="ts">
import PodcastDrilldown from "@/assets/images/podcast-drilldown.png";
import IStar05 from "@/assets/svg/star-05.vue";
const data = {
  title: "JamX Analytics <span style='font-weight: 600'>Dashboard</span>",
  content: "What is measured can be managed Learn your audience, optimize your podcast, and grow",
  image: PodcastDrilldown,
};
</script>

<template>
  <section class="solution-jamx-dashboard">
    <div class="container">
      <section class="solution-jamx-dashboard-inner">
        <div class="i-star-05"><IStar05 /></div>
        <div class="image">
          <img :src="data.image" alt="" />
        </div>
        <div class="data">
          <p
            class="title"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
            v-html="data.title"
          >
          </p>
          <p
            class="content"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.5"
            v-html="data.content"
          >
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
.solution-jamx-dashboard {
  padding-top: 50px;
  padding-bottom: 100px;
  .solution-jamx-dashboard-inner {
    max-width: 1437px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    position: relative;
    .i-star-05 {
      position: absolute;
      bottom: -100px;
      right: 0;
      scale: .8;
      transform: translate(-50%, 0);
    }
    .i-star-06 {
      position: absolute;
      top: -100px;
      left: 70%;
      scale: .8;
      transform: translate(-50%, 0);
    }
    .image {
      margin-right: 70px;
      max-width: 648px;
      img {
        width: 100%;
      }
    }
    .data {
      .title {
        font-size: 42px;
        font-style: normal;
        line-height: 150%;
      }
      .content {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        max-width: 470px;
      }
    }
  }
}

@media (max-width: 1599px) {
  .solution-jamx-dashboard .solution-jamx-dashboard-inner {
    max-width: 1347px;
  }
}
@media (max-width: 1439px) {
  .solution-jamx-dashboard .solution-jamx-dashboard-inner {
    max-width: 1347px;
  }
}

@media (max-width: 1199px) {
.jamx-dashboard-inner .i-star-05 {
    right: -100px;
    bottom: -150px;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .image {
    margin-right: 30px;
  }
}

@media (max-width: 767px) {
  .solution-jamx-dashboard {
    padding-top: 0px;
    padding-bottom: 100px;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .i-star-06 {
    display: none;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner {
    display: block;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .image {
    margin: 0px auto;
    width: 340px;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .image img {
    width: 100%;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .data {
    text-align: center;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .data .content {
    margin-left: auto;
    margin-right: auto;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .i-star-05 {
    right: auto;
    bottom: -200px;
    left: 0%;
    // transform: translate(-90%, 0);
    scale: .4;
  }
}

@media (max-width: 575px) {
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .data .title {
    text-align: left;
  }
  .solution-jamx-dashboard .solution-jamx-dashboard-inner .data .content {
    text-align: left;
  }
}
</style>