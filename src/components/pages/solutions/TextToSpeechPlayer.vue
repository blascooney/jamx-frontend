<script setup lang="ts">
import IPodcastPlayer from "@/assets/images/solution-podcast-player.png";
import IStar11 from "@/assets/svg/star-11.vue";
import IStar12 from "@/assets/svg/star-12.vue";
import IStar05 from "@/assets/svg/star-05.vue";
import { onMounted, ref } from "vue";
const width = ref();
const data = {
  title: "Text to Speech Player",
  content: "Convert articles to immersive audio journeys",
  image: IPodcastPlayer,
};

onMounted(() => {
  const reloadScript = () => {
    if(width.value !== window.innerWidth) {
      width.value = window.innerWidth;
      const script = document.createElement('script');
      script.src = 'https://sky.podcastswaves.com/player.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }

  reloadScript();
});
</script>

<template>
  <section class="text-to-speech-player">
    <div class="container">
      <div class="text-to-speech-player-inner">
        <div class="i-star-12"><IStar12 /></div>
        <!-- <div class="i-star-05"><IStar05 /></div> -->
        <div class="left">
          <div class="i-star-11"><IStar11 /></div>
          <p
            class="title"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >
            {{ data.title }}
          </p>
          <p
            class="content"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.5"
          >
            {{ data.content }}
          </p>
        </div>
        <div class="right">
          <waves-player ttsSelector='.text-to-speech-player .right' seller="5000" subseller="1183" domain="jamx.ai" theme="0" :width="`${width < 768 ? 310 : 530}`" style="width: 100%;"></waves-player>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.text-to-speech-player {
  padding-top: 140px;
  padding-bottom: 230px;
  .text-to-speech-player-inner {
    max-width: 1437px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    
    .left {
      position: relative;
      padding: 72px 104px;
      background: #55FFA5;
      border-radius: 70px;
      max-width: 945px;
      .title {
        color: #101010;
        font-family: Figtree;
        font-size: 57px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; 
      }
      .content {
        color: #101010;
        font-family: Figtree;
        font-size: 57px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
      .i-star-11 {
        position: absolute;
        top: -60px;
        right: 150px;
        scale: .8;
      }
    }

    .right {
      width: 530px;
      margin-left: -100px;
    }

    .i-star-12 {
      position: absolute;
      bottom: -100px;
      right: 0px;
    }

    .i-star-05 {
      position: absolute;
      scale: .8;
      bottom: -300px;
      left: 50%;
      transform: translate(-70%, 0);
    }
  }
}
@media (max-width: 1599px) {
  .text-to-speech-player .text-to-speech-player-inner {
    max-width: 1347px;
  }
}

@media (max-width: 1439px) {
  .text-to-speech-player .text-to-speech-player-inner .left .title {
    font-size: 47px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .content {
    font-size: 47px;
  }
}

@media (max-width: 1199px) {
  .text-to-speech-player .text-to-speech-player-inner .left .title {
    font-size: 42px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .content {
    font-size: 42px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .i-star-11 {
    right: 100px;
  }
}

@media (max-width: 991px) {
  .text-to-speech-player {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .i-star-11 {
    scale: .6;
    right: 50px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left {
    padding: 42px 110px 42px 54px;
    border-radius: 50px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .title {
    font-size: 38px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .content {
    font-size: 38px;
  }
  .text-to-speech-player .text-to-speech-player-inner .i-star-05 {
    bottom: -250px;
  }
  .text-to-speech-player .text-to-speech-player-inner .i-star-12 {
    bottom: -80px;
  }
}

@media (max-width: 767px) {
  .text-to-speech-player .text-to-speech-player-inner {
    display: block;
  }
  .text-to-speech-player .text-to-speech-player-inner .left {
    padding: 42px 30px 72px 30px;
    border-radius: 50px;
  }
  .text-to-speech-player .text-to-speech-player-inner .right {
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .title {
    font-size: 33px;
  }
  .text-to-speech-player .text-to-speech-player-inner .left .content {
    font-size: 33px;
  }
  .text-to-speech-player .text-to-speech-player-inner .i-star-12 {
    right: 50px;
  }
  .text-to-speech-player .text-to-speech-player-inner .i-star-05 {
    bottom: 20px;
    right: -180px;
    z-index: 1;
    left: auto;
    scale: .6;
  }
}

@media (max-width: 374px) {
  .text-to-speech-player .text-to-speech-player-inner .i-star-05 {
    scale: .5;
  }
}
</style>