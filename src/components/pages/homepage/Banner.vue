<script setup lang="ts">
import IStar01 from "@/assets/svg/lightning-1.vue";
import IStar02 from "@/assets/svg/star-02.vue";
import IArrowTopRight from "@/assets/svg/arrow-right-top.vue";
import IDesktopBG from "@/assets/svg/banner-desktop-bg.vue";
import IMobileBG from "@/assets/svg/banner-mobile-bg.vue";
import ComeJamButton from "@/components/global/ComeJamButton.vue";
</script>

<template>
  <section class="homepage-banner">
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
          The technology company
          <br class="company-br" />
          powering
          <span class="text-audio-integration"
            ><div class="i-star-01"><IStar01 /></div>
            audio discovery
          </span>
          <br class="text-discovery-br"/>
          on your 
          <span class="text-boost">audience's</span> preferred media
        </h1>
        <div class="content text-center">
          Targeted advertising and distribution,<br> that reaches the right ears, at scale.
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
.homepage-banner {
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
      font-size: 63px;
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
  .homepage-banner {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .homepage-banner .banner-inner {
    max-width: 680px;
  }

  .company-br {
    display: none;
  }

  .homepage-banner .banner-inner .i-star-02 {
    top: 60%;
    left: -100px;
    transform: scale(0.8);
  }
}

@media (max-width: 767px) {
  .homepage-banner {
    margin-top: 100px;
  }
  .homepage-banner .banner-inner .title {
    font-size: 40px;
    line-height: 55px;
  }
  .homepage-banner .banner-inner .content {
    margin-top: 50px;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 10px;
  }
  .homepage-banner .banner-inner .banner-action {
    margin-top: 25px;
  }

  .homepage-banner .banner-inner .title .text-boost,
  .homepage-banner .banner-inner .title .text-audio,
  .homepage-banner .banner-inner .title .text-integration,
  .homepage-banner .banner-inner .title .text-audio-integration {
    padding: 0px 20px;
  }

  .homepage-banner .banner-inner .i-star-01 {
    transform: scale(0.7);
  }

  .homepage-banner .banner-inner .i-star-02 {
    top: 5%;
    left: -100px;
    transform: scale(0.8);
  }

  .homepage-banner .banner-inner .banner-action .btn-come {
    padding: 9px 20px;
  }
}

@media (max-width: 664px) {
  .homepage-banner .banner-inner .i-star-02 {
    right: auto;
    left: calc(50% - 350px);
    bottom: -240px;
  }
}

@media (max-width: 624px) {
  .homepage-banner .banner-inner .i-star-02 {
    right: auto;
    left: calc(50% - 360px);
    bottom: -240px;
  }
}

@media (max-width: 502px) {
  .homepage-banner .banner-inner .i-star-02 {
    right: auto;
    left: calc(50% - 320px);
    top: 80px;
  }
}

@media (max-width: 469px) {
  .homepage-banner .banner-inner .i-star-02 {
    top: 15%;
    left: calc(50% - 310px);
  }
}

@media (max-width: 391px) {
  .homepage-banner .banner-inner .i-star-02 {
    top: 8%;
    left: calc(50% - 280px);
  }
  .homepage-banner .banner-inner .title {
    font-size: 39px;
  }
}

@media (max-width: 360px) {
  .homepage-banner .banner-inner .i-star-02 {
    top: 8%;
    left: calc(50% - 280px);
  }
  .homepage-banner .banner-inner .title {
    font-size: 38px;
  }
}
</style>