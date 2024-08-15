<script setup lang="ts">
import IJamxApp from "@/assets/images/jamx-app.png";
import IStar02 from "@/assets/svg/star-02.vue";
import IStar11 from "@/assets/svg/star-11.vue";
const data = {
  title: "JamX <span style='font-weight: 600'>App</span>",
  content: "A new home for your podcast<br>To engage with Jamx Audience",
  image: IJamxApp,
};
</script>

<template>
  <section class="solution-jamx-app">
    <div class="container">
      <section class="solution-jamx-app-inner">
        <div class="i-star-02"><IStar02 /></div>
        <div class="i-star-11"><IStar11 /></div>
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
.solution-jamx-app {
  padding-top: 50px;
  padding-bottom: 100px;
  .solution-jamx-app-inner {
    max-width: 1437px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    .i-star-02 {
      position: absolute;
      bottom: -100px;
      right: -50px;
      scale: .8;
      transform: translate(-50%, 0);
    }
    .i-star-11 {
      position: absolute;
      top: calc(50% - 170px);
      left: 10px;
      scale: .6;
      transform: translate(-50%, 0);
    }
    .image {
      margin-right: 70px;
      max-width: 491px;
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
  .solution-jamx-app .solution-jamx-app-inner {
    max-width: 1347px;
  }
}
@media (max-width: 1439px) {
  .solution-jamx-app .solution-jamx-app-inner {
    max-width: 1347px;
  }
}

@media (max-width: 1199px) {
.jamx-dashboard-inner .i-star-02 {
    right: -100px;
    bottom: -150px;
  }
  .solution-jamx-app .solution-jamx-app-inner .image {
    margin-right: 30px;
  }
}

@media (max-width: 767px) {
  .solution-jamx-app {
    padding-top: 0px;
    padding-bottom: 100px;
  }
  .solution-jamx-app .solution-jamx-app-inner {
    display: block;
  }
  .solution-jamx-app .solution-jamx-app-inner .image {
    margin: 0px auto;
    width: 340px;
  }
  .solution-jamx-app .solution-jamx-app-inner .image img {
    width: 100%;
  }
  .solution-jamx-app .solution-jamx-app-inner .data {
    text-align: center;
  }
  .solution-jamx-app .solution-jamx-app-inner .data .content {
    margin-left: auto;
    margin-right: auto;
  }
  .solution-jamx-app .solution-jamx-app-inner .i-star-02 {
    right: auto;
    bottom: -200px;
    left: 0%;
    // transform: translate(-90%, 0);
    scale: .4;
  }
}

@media (max-width: 575px) {
  .solution-jamx-app .solution-jamx-app-inner .data .title {
    text-align: left;
  }
  .solution-jamx-app .solution-jamx-app-inner .data .content {
    text-align: left;
  }
}
</style>