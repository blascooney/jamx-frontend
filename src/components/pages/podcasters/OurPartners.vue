<script setup lang="ts">
import GetStartedTodayButton from "@/components/global/GetStartedTodayButton.vue";
import IStar02 from "@/assets/svg/star-02.vue";
import IOurPartners1 from "@/assets/images/our-partners-1.png";
import IOurPartners2 from "@/assets/images/our-partners-2.png";
import IOurPartners3 from "@/assets/images/our-partners-3.png";
import IOurPartners4 from "@/assets/images/our-partners-4.png";
import IOurPartners5 from "@/assets/images/our-partners-5.png";
import IOurPartners6 from "@/assets/images/our-partners-6.png";
import IOurPartners7 from "@/assets/images/our-partners-7.png";
import IOurPartners8 from "@/assets/images/our-partners-8.png";
import IOurPartners9 from "@/assets/images/our-partners-9.png";
import IOurPartners10 from "@/assets/images/our-partners-10.png";
import IOurPartners11 from "@/assets/images/our-partners-11.png";
import IOurPartners12 from "@/assets/images/our-partners-12.png";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// @ts-ignore
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper";
</script>

<template>
  <section class="our-partners">
    <div class="our-partners-inner">
      <div class="title">Our partners</div>
      <div class="partner-list">
        <div class="i-star-02">
          <IStar02 />
        </div>
        <div class="i-star-03">
          <IStar02 />
        </div>
        <Swiper
          class="review-sdlier"
          :modules="[Autoplay, EffectCreative, Pagination]"
          :pagination="{
            el: '.swiper-pagination',
          }"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :speed="500"
          :autoplay="{
            delay: 5000,
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
          <!-- <div class="swiper-pagination"></div> -->

          <SwiperSlide
            class="block-slider-item"
          >
            <div class="block-line">
              <div class="block-item"><img :src="IOurPartners1"/></div>
              <div class="block-item"><img :src="IOurPartners2"/></div>
              <div class="block-item"><img :src="IOurPartners3"/></div>
            </div>
            <div class="block-line">
              <div class="block-item"><img :src="IOurPartners4"/></div>
              <div class="block-item"><img :src="IOurPartners5"/></div>
              <div class="block-item"><img :src="IOurPartners6"/></div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            class="block-slider-item"
          >
            <div class="block-line">
              <div class="block-item"><img :src="IOurPartners7"/></div>
              <div class="block-item"><img :src="IOurPartners8"/></div>
              <div class="block-item"><img :src="IOurPartners9"/></div>
            </div>
            <div class="block-line">
              <div class="block-item"><img :src="IOurPartners10"/></div>
              <div class="block-item"><img :src="IOurPartners11"/></div>
              <div class="block-item"><img :src="IOurPartners12"/></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.our-partners {
  padding-top: 240px;
  padding-bottom: 240px;
  position: relative;
  overflow: hidden;

  .our-partners-inner {
    max-width: 912px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    .i-star-02 {
      position: absolute;
      top: calc(50% - 150px);
      left: -180px;
    }

    .i-star-03 {
      position: absolute;
      top: -150px;
      right: calc(-150px);
      scale: 0.6;
    }

    .title {
      color: #fff;
      font-size: 66px;
      font-weight: 600;
      line-height: 75px;
      text-align: center;
      font-family: 'Figtree';
    }

    .partner-list {
      margin-top: 50px;
      position: relative;

      .block-line {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .block-item {
          padding-left: 30px;
          padding-right: 30px;
          img {
            width: 100%;
          }
        }
      }

      // .swiper-pagination {
      //   position: absolute;
      //   top: calc(100% + 60px);

      //   .swiper-pagination-bullet {
      //     width: 14px;
      //     height: 14px;
      //     background: #828282;
      //   }
      //   .swiper-pagination-bullet-active {
      //     background: #fff;
      //   }
      // }
    }
  }
}

@media (max-width: 991px) {
  .our-partners {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .our-partners .our-partners-inner {
    max-width: 700px;
  }
  .our-partners .our-partners-inner .title {
    font-size: 52px;
  }
}

@media (max-width: 767px) {
  .our-partners .our-partners-inner .title {
    font-size: 42px;
    line-height: 50px;
  }
  .our-partners .our-partners-inner {
    max-width: 520px;
  }
  .our-partners .our-partners-inner .partner-list {
    padding-left: 30px;
    padding-right: 30px;
  }
  .our-partners .our-partners-inner .partner-list .block-line .block-item {
    padding-left: 15px;
    padding-right: 15px;
  }
  .our-partners .our-partners-inner .i-star-02 {
    scale: 0.4;
    left: -100px;
  }
  .our-partners .our-partners-inner .i-star-03 {
    scale: 0.4;
    right: -100px;
  }
}
@media (max-width: 450px) {
  .our-partners {
      padding-top: 60px;
      padding-bottom: 60px;
  }
  .our-partners .our-partners-inner .partner-list {
    margin-top: 30px;
  }
  .our-partners .our-partners-inner .partner-list .block-line {
    margin-top: 15px;
  }
  .our-partners .our-partners-inner .partner-list .block-line .block-item {
    padding-left: 10px;
    padding-right: 10px;
  }
}

</style>
