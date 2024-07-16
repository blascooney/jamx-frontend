<script setup lang="ts">
import IPodcastPlayer from "@/assets/images/solution-podcast-player.png";
import IStar04 from "@/assets/svg/star-02.vue";
import IStar05 from "@/assets/svg/star-05.vue";
const data = {
  title: "Podcast<br> Recommendations Player",
  content: "Infuse contextual podcast<br> recommendations",
  image: IPodcastPlayer,
};
</script>

<template>
  <section class="solution-podcast-player">
    <div class="container">
      <section class="solution-podcast-player-inner">
        <div class="i-star-05"><IStar05 /></div>
        <div class="i-star-06"><IStar04 /></div>
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
      top: -200px;
      left: 50%;
      scale: .8;
      transform: translate(-50%, 0);
    }
    .image {
      margin-right: 70px;
    }
    .data {
      .title {
        font-size: 57px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
      }
      .content {
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
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
  .solution-podcast-player .solution-podcast-player-inner .data .title {
    font-size: 47px;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .content {
    font-size: 47px;
  }
}

@media (max-width: 1199px) {
  .solution-podcast-player .solution-podcast-player-inner .data .title {
    font-size: 40px;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .content {
    font-size: 40px;
  }
  .solution-podcast-player .solution-podcast-player-inner .i-star-05 {
    right: -100px;
    bottom: -150px;
  }
  .solution-podcast-player .solution-podcast-player-inner .image {
    margin-right: 30px;
  }
}


@media (max-width: 991px) {
  .solution-podcast-player .solution-podcast-player-inner .data .title {
    font-size: 24px;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .content {
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  .solution-podcast-player {
    padding-top: 0px;
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
  }
  .solution-podcast-player .solution-podcast-player-inner .image img {
    width: 100%;
  }
  .solution-podcast-player .solution-podcast-player-inner .data {
    text-align: center;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .title {
    font-size: 32px;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .content {
    font-size: 26px;
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
  .solution-podcast-player .solution-podcast-player-inner .data .title {
    text-align: left;
  }
  .solution-podcast-player .solution-podcast-player-inner .data .content {
    text-align: left;
  }
}
</style>