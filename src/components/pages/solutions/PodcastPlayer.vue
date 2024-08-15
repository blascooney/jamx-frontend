<script setup lang="ts">
import IJamxPlayer from "@/assets/images/jamx-player.png";
import IStar04 from "@/assets/svg/star-02.vue";
import IStar05 from "@/assets/svg/star-05.vue";
import { onMounted, ref } from "vue";
const data = {
  title: "Jamx <span style='font-weight: 600'>Player</span>",
  content: "Your window to a high-intent audience A plug-and-play widget that can be embedded on publisher websites with a few clicks",
  image: IJamxPlayer,
};
const browserWidth = ref(1440);

onMounted(() => {
  browserWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    browserWidth.value = window.innerWidth;
  });
  const script = document.createElement('script');
  script.src = 'https://wgt.podcastswaves.com/jamx.player.js';
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <section class="solution-podcast-player">
    <div class="container">
      <section class="solution-podcast-player-inner">
        <div class="i-star-05"><IStar05 /></div>
        <div class="i-star-06"><IStar04 /></div>
        <div class="image">
          <img :src="data.image" alt="" />
          <div
              class="pulsar-player-wrapper"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
              :style="`width: ${
                browserWidth >= 768 ? 360 : 250
              }px; max-width: 750px;`"
            >
              <jamx-player  
                seller="5000" 
                subseller="1285" 
                domain="jamx.ai" theme="0" 
                layout="1"  
                style="width: 100%; height: 100%;"
              ></jamx-player>
            </div>
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
.solution-podcast-player {
  padding-top: 50px;
  padding-bottom: 100px;
  .solution-podcast-player-inner {
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
      max-width: 510px;
      padding-right: 150px;
      position: relative;
      img {
        width: 100%;
      }
      .pulsar-player-wrapper {
        position: absolute;
        top: 150px;
        right: 0px;
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
  .solution-podcast-player .solution-podcast-player-inner {
    max-width: 1347px;
  }
}
@media (max-width: 1439px) {
  .solution-podcast-player .solution-podcast-player-inner {
    max-width: 1347px;
  }
}

@media (max-width: 1199px) {
  .solution-podcast-player .solution-podcast-player-inner .i-star-05 {
    right: -100px;
    bottom: -150px;
  }
  .solution-podcast-player .solution-podcast-player-inner .image {
    margin-right: 30px;
  }
}

@media (max-width: 767px) {
  .solution-podcast-player {
    margin-top: 100px;
    padding-bottom: 100px;
  }
  .solution-podcast-player .solution-podcast-player-inner .i-star-06 {
    display: none;
  }
  .solution-podcast-player .solution-podcast-player-inner {
    display: block;
  }
  .solution-podcast-player .solution-podcast-player-inner .image {
    margin: 0px auto;
    width: 340px;
    padding-right: 50px;
  }
  .solution-podcast-player .solution-podcast-player-inner .image .pulsar-player-wrapper {
    top: 100px;
  }
  .solution-podcast-player .solution-podcast-player-inner .image img {
    width: 100%;
  }
  .solution-podcast-player .solution-podcast-player-inner .data {
    text-align: center;
    padding-top: 130px;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .content {
    margin-left: auto;
    margin-right: auto;
  }
  .solution-podcast-player .solution-podcast-player-inner .i-star-05 {
    right: auto;
    bottom: -200px;
    left: 0%;
    // transform: translate(-90%, 0);
    scale: .4;
  }
}

@media (max-width: 575px) {
  .solution-podcast-player .solution-podcast-player-inner .image {
  }
  .solution-podcast-player .solution-podcast-player-inner .data .title {
    text-align: left;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .content {
    text-align: left;
  }
}
</style>