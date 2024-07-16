<script setup lang="ts">
import ComeJamButton from "@/components/global/ComeJamButton.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ISliderTip from "@/assets/svg/slider-tip.vue";
// @ts-ignore
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper";
import "swiper/swiper-bundle.css";

const list = [
  {
    content:
      "It has been a pleasure to work with Amir and the JAMX team over the last year.",
    writer: "- Steve Boymel - VP Business Development, Farlex, Inc",
  },
  {
    content:
      "I love working with Jamx, especially Amir.  In fact, they're one of our most trusted partners! They're very fast and responsive to whatever questions or issues that you have. Their revenue dashboard is clear and transparent. The payment is always on time. I would definitely give Jamx a big fat 5 star",
    writer: "- Moon , TYLLOGA",
  },
  {
    content:
      "It has been fantastic to partner with Jamx  on our most recent podcast series, they have helped to ensure our content reaches a wider, global audience, providing listeners with valuable conversations across women’s health and wellbeing",
    writer: "- Natalie Anderson-Shepherd",
  },
  {
    content:
      "JAMX  has been an excellent partner to help us grow our podcast audience and our revenue. We’ve seen steady growth and they’re very responsive and reliable",
    writer: "- Liz Martin",
  },
  {
    content:
      "JamX’s exceptional communication skills, effective negotiation abilities, and unwavering commitment to results make them an invaluable asset to Ads Plus",
    writer: "- Yuliyana Karaivanova - Business Development",
  },
];
</script>

<template>
  <div class="review">
    <div class="container">
      <div class="review-inner">
        <div
          class="review-slider-wrapper"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          <div class="slider-tip">
            <ISliderTip />
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
              delay: 10000,
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
            <!-- Pagination element -->
            <div class="swiper-pagination"></div>

            <SwiperSlide
              v-for="(reviewItem, index) in list"
              class="review-item"
              :key="index"
            >
              <div class="review-item-content">
                <div class="content">
                  <p>{{ reviewItem.content }}</p>
                </div>
                <div class="writer">
                  <span>{{ reviewItem.writer }}</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="action flex-center">
          <ComeJamButton />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.review {
  padding-top: 100px;
  padding-bottom: 100px;

  .review-inner {
    width: 1164px;
    margin-left: auto;
    margin-right: auto;

    .review-slider-wrapper {
      background: #ffa7fb;
      padding: 95px 76px 12px 76px;
      border-radius: 80px;
      overflow: visible;
      position: relative;

      .slider-tip {
        position: absolute;
        top: -50px;
        left: 75px;
      }

      .swiper-3d {
        overflow: visible;
      }

      .swiper-wrapper {
        padding-bottom: 50px;
        overflow-x: hidden;
      }

      .swiper-pagination {
        position: absolute;
        top: calc(100% + 60px);

        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: #828282;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
      }

      .content p {
        color: var(--dark-color-200);
        font-size: 42px;
        font-weight: 600;
        line-height: 52px;
      }
      .writer {
        margin-top: 20px;
        span {
          color: var(--yellow-color-100);
          font-size: 27px;
          font-weight: 700;
          line-height: 37px;
        }
      }
    }

    .action {
      margin-top: 92px;

      .btn-let-jam {
        padding: 9px 20px;
        width: 278px;

        span {
          font-size: 26px;
          line-height: 52px;
          line-height: 52px;
          color: var(--dark-color-300);
        }
      }
    }
  }
}

@media (max-width: 1399px) {
  .review .review-inner {
    width: auto;
  }
}

@media (max-width: 991px) {
  .review .review-inner .review-slider-wrapper .content p {
    font-size: 32px;
  }
}

@media (max-width: 767px) {
  .review {
    padding-top: 121px;
    padding-bottom: 40px;
  }

  .review .review-inner .review-slider-wrapper {
    border-radius: 50px;
    padding: 39px 41px 25px 32px;
  }

  .review .review-inner .review-slider-wrapper .content p {
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
  }

  .review .review-inner .review-slider-wrapper .slider-tip {
    left: 36px;
    top: -60px;
  }

  .review .review-inner .review-slider-wrapper .slider-tip svg {
    width: 75px;
    height: auto;
  }
  .review .review-inner .review-slider-wrapper .writer span {
    font-size: 24px;
    line-height: 31px;
  }
}
</style>