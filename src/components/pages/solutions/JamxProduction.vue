<script setup lang="ts">
import IJamxProduction from "@/assets/images/jamx-production.png";
import ILaunchpad from "@/assets/images/launchpad.png";
const data = {
  title: "JamX <span style='font-weight: 600'>Production House</span>",
  image: IJamxProduction,
};
</script>

<template>
  <section class="solution-jamx-production">
    <div class="container">
      <section class="solution-jamx-production-inner">
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
          >
            Make better podcasts Take your podcast quality to the next level with
            <img style="height: 20px; border-radius: 4px; margin-bottom: -5px;" :src="ILaunchpad" />
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
.solution-jamx-production {
  padding-top: 50px;
  padding-bottom: 100px;
  .solution-jamx-production-inner {
    max-width: 1437px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    position: relative;
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
  .solution-jamx-production .solution-jamx-production-inner {
    max-width: 1347px;
  }
}
@media (max-width: 1439px) {
  .solution-jamx-production .solution-jamx-production-inner {
    max-width: 1347px;
  }
}

@media (max-width: 1199px) {
  .solution-jamx-production .solution-jamx-production-inner .image {
    margin-right: 30px;
  }
}

@media (max-width: 767px) {
  .solution-jamx-production {
    padding-top: 0px;
    padding-bottom: 100px;
  }
  .solution-jamx-production .solution-jamx-production-inner .i-star-06 {
    display: none;
  }
  .solution-jamx-production .solution-jamx-production-inner {
    display: block;
  }
  .solution-jamx-production .solution-jamx-production-inner .image {
    margin: 0px auto;
    width: 340px;
  }
  .solution-jamx-production .solution-jamx-production-inner .image img {
    width: 100%;
  }
  .solution-jamx-production .solution-jamx-production-inner .data {
    text-align: center;
  }
  .solution-jamx-production .solution-jamx-production-inner .data .content {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 575px) {
  .solution-jamx-production .solution-jamx-production-inner .data .title {
    text-align: left;
  }
  .solution-jamx-production .solution-jamx-production-inner .data .content {
    text-align: left;
  }
}
</style>