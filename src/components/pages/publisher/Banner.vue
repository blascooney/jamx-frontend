<script setup lang="ts">
import IStar01 from "@/assets/svg/lightning-1.vue";
import IStar02 from "@/assets/svg/star-02.vue";
import IArrowTopRight from "@/assets/svg/arrow-right-top.vue";
import IDesktopBG from "@/assets/svg/banner-desktop-bg.vue";
import IMobileBG from "@/assets/svg/banner-mobile-bg.vue";
import ComeJamButton from "@/components/global/ComeJamButton.vue";
</script>

<template>
  <section class="publisher-banner">
    <div class="bg">
      <IDesktopBG
        class="hide sm-block md-block lg-block xl-block xxl-block xxl-block xxxl-block"
      />
      <IMobileBG class="hide xs-block" />
    </div>

    <div class="container">
      <div class="banner-inner">
        <div class="i-star-02"><IStar02 /></div>

        <h1
          class="title text-center"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="1"
        >
          Unlock the magic of audio: your
          <span class="text-boost">24/7</span> vibrant
          <span class="text-audio-integration"
            ><div class="i-star-01"><IStar01 /></div>
            audio powerhouse
          </span>
          <span class="text-audio"> audio</span>
          <br class="text-audio-br"/>
          <span class="text-integration"
            ><div class="i-star-01"><IStar01 /></div>
            powerhouse
          </span>
        </h1>
        <div class="content text-center">
          Where media houses jam with podcasters, and publications embrace the
          wonders of audio
        </div>
        <div class="banner-action flex-center">
          <ComeJamButton>
            <span> &nbsp;&nbsp;<IArrowTopRight /> </span>
          </ComeJamButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.publisher-banner {
  padding-top: 195px;
  padding-bottom: 195px;
  position: relative;

  .bg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  .banner-inner {
    max-width: 1070px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    .i-star-01 {
      position: absolute;
      top: -70px;
      right: -30px;
      scale: 0.5;
    }

    .i-star-02 {
      position: absolute;
      top: 45%;
      left: -80px;
    }

    .title {
      color: #fff;
      font-size: 54px;
      font-weight: 300;
      line-height: 100px;
      .text-boost {
        white-space: nowrap;
        position: relative;
        background: var(--lavender-color-200);

        border-radius: 100px;
        padding: 5px 20px 5px 20px;
        color: #000;
        font-weight: 700;
      }

      .text-jamx {
        font-weight: 700;
      }

      .text-audio,
      .text-integration,
      .text-audio-integration {
        position: relative;
        white-space: nowrap;
        background: var(--lavender-color-100);
        border-radius: 100px;
        padding: 5px 10px;
        color: #000;
        font-weight: 700;
      }

      .text-audio,
      .text-integration,
      .text-audio-br {
        display: none;
      }
    }

    .content {
      margin-top: 24px;
      font-size: 27px;
      line-height: 36px;
      padding-left: 110px;
      padding-right: 110px;
    }

    .banner-action {
      margin-top: 54px;
      .btn-come {
        width: 262px;
        button {
          > span {
            font-weight: 700;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .publisher-banner {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .publisher-banner .banner-inner {
    max-width: 680px;
  }

  .publisher-banner .banner-inner .i-star-02 {
    top: 60%;
    left: -100px;
    transform: scale(0.8);
  }
}

@media (max-width: 767px) {
  .publisher-banner {
    margin-top: 100px;
  }
  .publisher-banner .banner-inner .title {
    font-size: 40px;
    line-height: 55px;
  }
  .publisher-banner .banner-inner .content {
    margin-top: 50px;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 10px;
  }
  .publisher-banner .banner-inner .banner-action {
    margin-top: 25px;
  }

  .publisher-banner .banner-inner .title .text-boost,
  .publisher-banner .banner-inner .title .text-audio,
  .publisher-banner .banner-inner .title .text-integration,
  .publisher-banner .banner-inner .title .text-audio-integration {
    padding: 0px 20px;
  }

  .publisher-banner .banner-inner .i-star-01 {
    transform: scale(0.7);
  }

  .publisher-banner .banner-inner .i-star-02 {
    top: 5%;
    left: -100px;
    transform: scale(0.8);
  }

  .publisher-banner .banner-inner .banner-action .btn-come {
    padding: 9px 20px;
  }
}

@media (max-width: 664px) {
  .publisher-banner .banner-inner .i-star-02 {
    right: auto;
    left: calc(50% - 350px);
    top: -60px;
  }
}

@media (max-width: 624px) {
  .publisher-banner .banner-inner .i-star-02 {
    right: auto;
    left: calc(50% - 300px);
    top: 150px;
  }
}

@media (max-width: 502px) {
  .publisher-banner .banner-inner .i-star-02 {
    right: auto;
    left: calc(50% - 320px);
    top: 80px;
  }

  .publisher-banner .banner-inner .title .text-audio-integration {
    display: none;
  }
  .publisher-banner .banner-inner .title .text-audio {
    display: inline;
  }
  .publisher-banner .banner-inner .title .text-integration {
    display: inline;
  }
  .publisher-banner .banner-inner .title .text-audio-br {
    display: inline;
  }
}

@media (max-width: 469px) {
  .publisher-banner .banner-inner .i-star-02 {
    top: 15%;
    left: calc(50% - 310px);
  }
}

@media (max-width: 391px) {
  .publisher-banner .banner-inner .i-star-02 {
    top: 8%;
    left: calc(50% - 280px);
  }
}
</style>