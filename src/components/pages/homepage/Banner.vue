<script setup lang="ts">
import IStar01 from "@/assets/svg/lightning-1.vue";
import IStar02 from "@/assets/svg/star-02.vue";
import IArrowTopRight from "@/assets/svg/arrow-right-top.vue";
import IDesktopBG from "@/assets/svg/banner-desktop-bg.vue";
import IMobileBG from "@/assets/svg/banner-mobile-bg.vue";
import ComeJamButton from "@/components/global/ComeJamButton.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// @ts-ignore
import { Autoplay, EffectCreative } from "swiper";
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
        <div class="i-star-01"><IStar01 /></div>
        <div class="i-star-02"><IStar02 /></div>

        <h1
          class="title text-center"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="1"
        >        
          The Place Where
          <br class="company-br" />

          <span class="text-all-customers">
            Podcasters, Publishers and Advertisers
          </span>
          <span class="text-podcasters">
            Podcasters,
          </span>
          <br class="customers-br" />
          <span class="text-publishers-advertisers">
            Publishers and Advertisers
          </span>
          <span class="text-publishers">
            Publishers
          </span>
          <br class="text-publishers"/>
          <span class="text-and-advertisers">
            and Advertisers
          </span>
          <br class="text-discovery-br"/>

          Come To
          <span class="text-boost">Jamx</span>
        </h1>
        <div class="content text-center banner-gallery">
          <div class="desktop-gallery">
            <div class="gallery-item">
              <div class="title">Podcasts</div>
              <div class="content">are powered and pushed to new audiences</div>
            </div>
            <div class="gallery-item">
              <div class="title">Audio Advertisers</div>
              <div class="content">contextual ads to audiences interested in their offering</div>
            </div>
            <div class="gallery-item">
              <div class="title">Publishers</div>
              <div class="content">provide new content that speaks to their audience</div>
            </div>
          </div>
          <div class="mobile-gallery">
            <Swiper
              :modules="[Autoplay, EffectCreative]"
              :pagination="{
                el: '.swiper-pagination',
              }"
              :slides-per-view="1"
              :loop="true"
              :effect="'creative'"
              :speed="500"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
              }"
              :creative-effect="{
                prev: {
                  shadow: false,
                  translate: ['-150%', 0, -1],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }"
            >
             <SwiperSlide class="review-item">
                <div class="gallery-item">
                  <div class="title">Podcasts</div>
                  <div class="content">Are powered and pushed to new audiences</div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="review-item">
                <div class="gallery-item">
                  <div class="title">Audio Advertisers</div>
                  <div class="content">Contextual ads to audiences interested in their offering</div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="review-item">
                <div class="gallery-item">
                  <div class="title">Publishers</div>
                  <div class="content">Provide new content that speaks to their audience</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
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
      top: 25%;
      left: -200px;
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

      .text-podcasters,
      .text-publishers-advertisers,
      .text-all-customers,
      .text-publishers,
      .text-and-advertisers,
      .text-advertisers {
        position: relative;
        white-space: nowrap;
        background: var(--lavender-color-100);
        border-radius: 100px;
        padding: 5px 10px;
        color: #000;
        font-weight: 700;
      }

      .text-podcasters,
      .customers-br,
      .text-publishers-advertisers,
      .text-publishers,
      .text-and-advertisers {
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

    .banner-gallery {
      padding: 0px;
      margin-top: 50px;

      .desktop-gallery {
        display: flex;
      }

      .mobile-gallery {
        display: none;
      }

      .gallery-item {
        padding: 0px 30px;
        .title {
          font-size: 40px;
          line-height: 52px;
        }
        .content {
          font-size: 20px;
          padding: 0;
        }
      }
    }
  }
}

@media (max-width: 1399px) {
  .homepage-banner .banner-inner .title .text-all-customers {
    display: none;
  }
  .homepage-banner .banner-inner .title .text-podcasters, 
  .homepage-banner .banner-inner .title .customers-br, 
  .homepage-banner .banner-inner .title .text-publishers-advertisers {
    display: inline;
  }
}

@media (max-width: 1109px) {
  .homepage-banner .banner-inner .banner-gallery .gallery-item .title {
    font-size: 30px;
    line-height: 42px;
  }
  .homepage-banner .banner-inner .banner-gallery .gallery-item .content {
    font-size: 18px;
    line-height: 24px;
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

  .homepage-banner .banner-inner .banner-gallery .desktop-gallery {
    display: none;
  }

  .homepage-banner .banner-inner .banner-gallery .mobile-gallery {
    display: block;
  }

  .homepage-banner .banner-inner .banner-gallery .gallery-item {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .homepage-banner .banner-inner .banner-gallery .gallery-item .title {
    font-size: 36px;
    line-height: 42px;
  }

  .homepage-banner .banner-inner .banner-gallery .gallery-item .content {
    margin-top: 30px;
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
  .homepage-banner .banner-inner .title .text-podcasters,
  .homepage-banner .banner-inner .title .text-publishers-advertisers,
  .homepage-banner .banner-inner .title .text-all-customers,
  .homepage-banner .banner-inner .title .text-publishers,
  .homepage-banner .banner-inner .title .text-and-advertisers {
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
  .homepage-banner .banner-inner .title .text-publishers-advertisers {
    display: none;
  }
  .homepage-banner .banner-inner .title .text-publishers,
  .homepage-banner .banner-inner .title .text-and-advertisers {
    display: inline;
  }
  .homepage-banner .banner-inner .banner-gallery .gallery-item .title {
    font-size: 30px;
    line-height: 42px;
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
    top: 20%;
    left: calc(50% - 300px);
  }

  .homepage-banner .banner-inner .banner-gallery .gallery-item {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .homepage-banner .banner-inner .banner-gallery .gallery-item .content {
    margin-top: 15px;
  }
}

@media (max-width: 391px) {
  .homepage-banner .banner-inner .i-star-02 {
    top: 25%;
    left: calc(50% - 280px);
  }
  .homepage-banner .banner-inner .title {
    font-size: 39px;
  }
}

@media (max-width: 360px) {
  .homepage-banner .banner-inner .i-star-02 {
    top: 25%;
    left: calc(50% - 280px);
  }
  .homepage-banner .banner-inner .title {
    font-size: 38px;
  }
}
</style>