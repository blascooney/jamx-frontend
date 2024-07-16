<script setup lang="ts">
import IHowJamxWorks from "@/assets/images/how-jamx-works.svg";
import IStar05 from "@/assets/svg/star-05.vue";
import IStar06 from "@/assets/svg/star-06.vue";
import IStar07 from "@/assets/svg/star-02.vue";
import CoreButton from "@/components/core/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const data = {
  title: "How JamX Distribution Works?",
  list: [
    {
      number: 1,
      numberColor: '#55FFA5',
      title: 'Join the JamX Distribution Network',
      content: 'Become a valued member of our network of podcasters, content creators, and unique publishers.'
    },
    {
      number: 2,
      numberColor: '#D9FF3F',
      title: 'Submit your RSS',
      content: 'Share your podcast episodes with our platform, making them accessible to JamX\'s immersed user base.'
    },
    {
      number: 3,
      numberColor: '#FFA7FB',
      title: 'Engage with your audience',
      content: 'Connect with a dedicated listener base that is already engaging with the topics your podcast is about. This pre-engaged audience is more likely to listen thoroughly and become regular subscribers, contributing to a steady increase in downloads and listens.'
    }
  ]
};
</script>

<template>
  <div class="how-jamx-works">
    <div class="how-jamx-works-inner">
      <div class="section-title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="inner-content">
        <div class="left">
          <div class="image">
            <img :src="IHowJamxWorks" alt="" />
          </div>
          <div
            class="i-star-05"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >
            <IStar05 />
          </div>
          <div
            class="i-star-06"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >
            <IStar06 />
          </div>
          <div
            class="i-star-07"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >
            <IStar07 />
          </div>
          <div
            class="btn-education-wapper"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.5"
          >
            <CoreButton
              class="btn-education"
              :is-pink="true"
              @click="() => router.push('#')"
              >Education
            </CoreButton>
          </div>
          <div
            class="btn-technology-wapper"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.5"
          >
            <CoreButton
              class="btn-technology"
              :is-lavender="true"
              @click="() => router.push('#')"
              >Technology
            </CoreButton>
          </div>
          <div
            class="btn-sports-wapper"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.5"
          >
            <CoreButton
              class="btn-sports"
              :is-yellow="true"
              @click="() => router.push('#')"
              >Sports
            </CoreButton>
          </div>
        </div>
        <div class="right">
          <div class="rght-desc-item" v-for="(item, index) in data.list" :key="index">
            <div class="number">
              <span :style="`color: ${item.numberColor}`" >{{ item.number }}</span>
            </div>
            <div class="description">
              <p class="title">{{ item.title }}</p>
              <p class="content">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.how-jamx-works {
  padding-top: 110px;
  padding-bottom: 40px;
  overflow: hidden;

  .how-jamx-works-inner {
    width: 1250px;
    margin-left: auto;
    margin-right: auto;

    .section-title {
      width: 100%;
      margin-bottom: 120px;
      h2 {
        line-height: 150%;
        font-size: 60px;
        text-align: center;
      }
    }

    .inner-content {
      display: flex;

      .left {
        width: 510px;
        position: relative;

        .image {
          img {
            margin-left: -10px;
            margin-top: -40px;
            margin-bottom: -50px;
          }
        }

        .i-star-05 {
          position: absolute;
          left: -15%;
          top: -5%;
        }

        .i-star-06 {
          position: absolute;
          right: 17%;
          top: 4%;
        }

        .i-star-07 {
          position: absolute;
          right: -80px;
          top: 40%;
          transform: translate(0px, -50px);
        }

        .btn-education,
        .btn-technology,
        .btn-sports {
          padding: 4px 20px;
          span {
            font-weight: 700;
            font-size: 14px;
          }
        }

        .btn-education-wapper {
          button {
            width: 126px;
          }
          position: absolute;
          top: 15%;
          right: 18%;
        }

        .btn-technology-wapper {
          position: absolute;
          button {
            width: 126px;
          }
          top: 25%;
          right: 6%;
        }

        .btn-sports-wapper {
          position: absolute;
          bottom: 21%;
          right: 34%;
        }
      }
      .right {
        padding-left: 50px;
        .rght-desc-item {
          display: flex;
          margin-bottom: 50px;

          .number {
            width: 64px;
            min-width: 64px;
            height: 64px;
            border: 1px solid #B2B2B2;
            border-radius: 16px;
            margin-right: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              font-size: 32px;
              font-weight: 600;
            }
          }

          .description {
            .title {
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              font-size: 24px;
              font-weight: 300;
              color: #ECEFF1;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1399px) {
  .how-jamx-works .how-jamx-works-inner {
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .right {
    padding-left: 30px;
  }
}

@media (max-width: 991px) {
  .how-jamx-works .how-jamx-works-inner .inner-content {
    display: block;
  }
  .how-jamx-works .how-jamx-works-inner .inner-content .left {
    margin-left: auto;
    margin-right: auto;
  }

  .how-jamx-works .how-jamx-works-inner .right {
    padding-left: 0px;
    margin-top: 100px;
  }
}

@media (max-width: 767px) {
  .how-jamx-works {
    padding-top: 50px;
    padding-bottom: 37px;
  }

  .how-jamx-works .container {
    padding-left: 32px;
    padding-right: 36px;
  }

  .how-jamx-works .how-jamx-works-inner .section-title {
    margin-bottom: 50px;
  }

  .how-jamx-works .how-jamx-works-inner .section-title h2 {
    font-size: 30px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left {
    margin-top: 60px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left,
  .how-jamx-works .how-jamx-works-inner .inner-content .right {
    width: 100%;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .right {
    padding-left: 0px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left, .how-jamx-works .how-jamx-works-inner .inner-content .left {
    overflow: visible;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .i-star-05 {
    left: -15%;
    top: -15%;
    scale: 0.7;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .i-star-06 {
    left: 30%;
    top: 15%;
    right: auto;
    bottom: auto;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .i-star-07 {
    transform: scale(0.6);
    left: -50px;
    top: auto;
    right: auto;
    bottom: -60px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .image {
    display: flex;
    justify-content: end;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .image img {
    margin-left: auto;
    margin-top: -40px;
    margin-bottom: -50px;
    margin-right: -110px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .btn-technology-wapper {
    top: 4%;
    right: 10%;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .btn-education-wapper {
    bottom: 12%;
    right: 10%;
    top: auto;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .left .btn-education,
  .how-jamx-works .how-jamx-works-inner .inner-content .left .btn-technology,
  .how-jamx-works .how-jamx-works-inner .inner-content .left .btn-sports {
    padding: 0px 20px;
    > span {
      font-size: 14px;
      font-weight: 700;
    }
  }

  .how-jamx-works
    .how-jamx-works-inner
    .left
    .btn-education-wapper
    button,
  .how-jamx-works
    .how-jamx-works-inner
    .left
    .btn-technology-wapper
    button {
    width: 115px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .right .rght-desc-item .number {
    width: 48px;
    height: 48px;
    min-width: 48px;
    margin-bottom: 20px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .right .rght-desc-item .description .title {
    font-size: 19px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .right .rght-desc-item .description .content {
    font-size: 16px;
  }

  .how-jamx-works .how-jamx-works-inner .inner-content .right .rght-desc-item {
    display: block;
    margin-bottom: 30px;
  }
}

@media (max-width: 360px) {
  .how-jamx-works .how-jamx-works-inner .inner-content .left .image img {
    margin-left: -130px;
  }
}
</style>