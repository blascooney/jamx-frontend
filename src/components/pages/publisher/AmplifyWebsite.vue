<script setup lang="ts">
import IAmplifyWebsite_1 from "@/assets/svg/amplify-website-1.vue";
import IAmplifyWebsite_2 from "@/assets/svg/amplify-website-2.vue";
import IAmplifyWebsite_3 from "@/assets/svg/amplify-website-3.vue";
import IAmplifyWebsite_4 from "@/assets/svg/amplify-website-4.vue";
import IStar01 from "@/assets/svg/star-01.vue";
import IStar04 from "@/assets/svg/star-02.vue";
import IStar05 from "@/assets/svg/star-05.vue";
import { onMounted, ref } from "vue";

const data = {
  title:
    'Amplify publisher<br> websites with <span class="bold">monetized audio experiences</span>',
  list: [
    {
      image: IAmplifyWebsite_1,
      label: "Embed Player",
    },
    {
      image: IAmplifyWebsite_2,
      label: "Select Content",
    },
    {
      image: IAmplifyWebsite_3,
      label: "connect to demand",
    },
    {
      image: IAmplifyWebsite_4,
      label: "Let the Jam begin",
    },
  ],
};

const width = ref();

onMounted(() => {
  const doResize = () => {
    setTimeout(() => {
      width.value = window.innerWidth;
    });
  };

  window.addEventListener("resize", () => {
    doResize();
  });

  setTimeout(() => {
    doResize();
  }, 100);
});
</script>

<template>
  <section class="amplify-website">
    <div class="container">
      <div class="amplify-website-inner">
        <div class="flex-top amplify-website-content">
          <div class="title flex-center">
            <h2 v-html="data.title"></h2>
          </div>
          <div class="gallery">
            <div>
              <div
                v-for="(item, index) in data.list"
                :key="index"
                class="gallery-row"
              >
                <div class="gallery-item flex-align-center">
                  <div class="image flex-center">
                    <component :is="item.image" />
                  </div>
                  <div class="text">
                    <span>{{ item.label }}</span>
                  </div>
                </div>
                <hr v-if="index != data.list.length - 1" />
              </div>
            </div>
          </div>
        </div>
        <div class="i-star-05"><IStar05 /></div>
        <div class="i-star-06"><IStar04 /></div>
        <div class="players">
          <div
            class="player-01"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.3"
          >
            <div class="i-star-01-wrapper">
              <IStar01 />
            </div>
            <iframe
              :src="`https://sky.audiopulsar.com?seller=5000&subseller=1285&domain=demo.com&theme=2&layout=1&width=661px`"
              frameborder="0"
              height="256"
              scrolling="no"
              :style="`width: ${
                width >= 1440 ? 661 : (width - 100) * .6
              }px; max-width: 750px; min-width: 492px;`"
            ></iframe>
          </div>
          <div
            class="player-02"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <iframe
              :src="`https://sky.audiopulsar.com?seller=5000&subseller=1183&domain=demo.com&theme=1&layout=1&width=393px`"
              frameborder="0"
              height="256"
              scrolling="no"
              :style="`width: ${
                width >= 500 ? 393 : 314
              }px; max-width: 750px; min-width: 314px;`"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.amplify-website {
  overflow: hidden;
  padding-top: 165px;
  padding-bottom: 216px;

  .container {
    .amplify-website-inner {
      width: 1164px;
      margin-left: auto;
      margin-right: auto;
      background: #1D1D1B;
      border-radius: 100px;
      border: 1px solid #FFF;
      padding: 80px 45px 80px 85px;
      position: relative;

      .amplify-website-content {
        justify-content: space-between;

        .title {
          h2 {
            max-width: 505px;
            font-size: 42px;
            font-style: normal;
            font-weight: 400;
            line-height: 52px;
          }
        }

        .gallery {
          .gallery-row  {
            hr {
              height: 40px;
              margin: 0px 38px;
              width: 0px;
              border-left: none;
              border-right: 1px solid #FFF;
            }
          }

          .gallery-item {
            display: flex;
            justify-content: start;

            .image svg {
              width: 80px;
              height: 80px;
            }

            .text {
              margin-left: 32px;
              width: 100%;

              span {
                font-size: 24px;
                font-weight: 700;
                line-height: 29px;
                text-transform: capitalize;
              }
            }
          }
        }
      }

      .players {
        position: absolute;
        top: calc(100% - 230px);
        right: calc(100% - 550px);

        .player-02 {
          position: absolute;
          top: 100px;
          right: -50px;
        }

        .i-star-01-wrapper {
          position: absolute;
          top: -30px;
          left: calc(50% - 50px);
          z-index: 2;
        }
      }

      .i-star-05 {
        position: absolute;
        top: -80px;
        right: -50px;
        scale: .5;
      }

      .i-star-06 {
        position: absolute;
        bottom: -50px;
        left: calc(50% - 100px);
        scale: .5;
      }
    }
  }
}

@media (max-width: 1439px) {
  .amplify-website .container .amplify-website-inner {
    width: 1000px;
    padding-left: 45px;
    padding-right: 30px;
  }

  .amplify-website .container .amplify-website-inner .i-star-06 {
    bottom: 120px;
    left: calc(50% - 150px);
  }

  .amplify-website .container .amplify-website-inner .players .player-02 {
    right: -30px;
  }
}

@media (max-width: 1199px) {
  .amplify-website .container .amplify-website-inner {
    width: auto;
  }

  .amplify-website .container .amplify-website-inner .players {
    right: auto;
    left: -30px;
  }

  .amplify-website .container .amplify-website-inner .players .player-02 {
    right: auto;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .amplify-website .container .amplify-website-inner .amplify-website-content .gallery .gallery-item .text {
    margin-left: 16px;
  }

  .amplify-website .container .amplify-website-inner .amplify-website-content .gallery .gallery-item .text span {
    font-size: 22px;
  }

  .amplify-website .container .amplify-website-inner .amplify-website-content .title h2 {
    font-size: 42px;
  }
}

@media (max-width: 991px) {
  .amplify-website {
    padding-top: 50px;
    padding-bottom: 300px;
  }
  .amplify-website .container .amplify-website-inner .amplify-website-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
  }

  .amplify-website .container .amplify-website-inner .amplify-website-content .title h2 {
    text-align: center;
  }

  .amplify-website .container .amplify-website-inner .gallery {
    margin-top: 60px;
  }

  .amplify-website .container .amplify-website-inner .players {
    left: 100px;
  }

  .amplify-website .container .amplify-website-inner .players .player-02 {
    right: auto;
    left: -100px;
    transform: translate(0, 0);
  }

  .amplify-website .container .amplify-website-inner .players {
    top: calc(100% - 110px);
  }

  .amplify-website .container .amplify-website-inner .i-star-05 {
    top: auto;
    bottom: -100px;
    right: auto;
    left: -80px;
  }

  .amplify-website .container .amplify-website-inner .i-star-06 {
    top: -100px;
    bottom: auto;
    right: -80px;
    left: auto;
  }
}

@media (max-width: 767px) {
  .amplify-website {
    padding-top: 98px;
    padding-bottom: 300px;
  }

  .amplify-website .container .amplify-website-inner {
    padding: 40px 16px;
    border-radius: 50px;
  }

  .amplify-website .container .amplify-website-inner .players .player-02 {
    left: -120px;
  }

  .amplify-website .container .amplify-website-inner .amplify-website-content .title h2 {
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
  }

  .amplify-website .container .amplify-website-inner .amplify-website-content .gallery .gallery-item .image svg {
    width: 72px;
    height: 72px;
  }

  .amplify-website .container .amplify-website-inner .amplify-website-content .gallery .gallery-item .text span {
    font-size: 18px;
    line-height: 29px;
  }

  .amplify-website .container .amplify-website-inner .players {
    top: calc(100% - 110px);
  }
}

</style>