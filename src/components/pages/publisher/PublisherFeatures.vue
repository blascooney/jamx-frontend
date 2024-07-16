<script setup lang="ts">
import IFeatureimage01 from "@/assets/images/publisher-features-01.png";
import IFeatureimage02 from "@/assets/images/publisher-features-02.svg";
import IAsterix from "@/assets/images/asterix.svg";

const data = [
  {
    texts: [
      {
        title: "Attention amplifiers",
        content:
          "An omnichannel platform, built to attract high-quality attention",
      },
      {
        title: "Exceptional monetization",
        content: "Maximize revenue through CPMs only audio can offer",
      },
    ],
    image: IFeatureimage01,
  },
  {
    texts: [
      {
        title: "Enhanced content offerings",
        content:
          "Attracting and retaining loyal audiences with captivating audio content",
      },
      {
        title: "Improved UX",
        content:
          "Providing users with the multisensory audio experiences they are eager for.",
      },
    ],
    image: IFeatureimage02,
  },
];
</script>

<template>
  <section class="publisher-features">
    <div class="container">
      <div class="publisher-features-inner">
        <div class="feature-item-list">
          <div class="feature-item" v-for="(item, index) in data" :key="index">
            <div class="texts">
              <div
                class="text-item"
                v-for="(textItem, index) in item.texts"
                :key="index"
              >
                <p
                  class="title"
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="1"
                >
                  {{ textItem.title }}
                </p>
                <p
                  class="content"
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="0.5"
                >
                  {{ textItem.content }}
                </p>
              </div>
            </div>
            <div class="image">
              <img :src="item.image" alt="" />
              <div v-if="index === 1" class="asterix">
                <img :src="IAsterix" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.publisher-features {
  padding-top: 91px;
  padding-bottom: 85px;

  .publisher-features-inner {
    padding-left: 30px;
    padding-right: 30px;

    .feature-item-list {
      .feature-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;

        &:last-child {
          margin-bottom: 0px;
        }

        &:nth-child(even) {
          flex-direction: row-reverse;
        }

        .text-item {
          margin-bottom: 108px;
          max-width: 612px;

          &:last-child {
            margin-bottom: 0px;
          }

          .content {
            font-size: 36px;
            line-height: 52px;
          }

          .title {
            font-size: 42px;
            line-height: 52px;
            font-weight: 700;
          }
        }

        .image {
          position: relative;
        }

        &:nth-child(1) {
          .image {
            width: 520px;
            overflow: hidden;
            height: 518px;

            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }

        &:nth-child(2) {
          .image {
            // width: 520px;
            // overflow: hidden;
            // height: 518px;

            // img {
            //   position: absolute;
            //   top: 50%;
            //   left: 50%;
            //   transform: translate(-50%, -50%);
            // }

            .asterix {
              position: absolute;
              top: -30px;
              left: 0px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1439px) {
  .publisher-features .publisher-features-inner {
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (max-width: 1199px) {
  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item
    .text-item {
    max-width: 500px;
  }
}

@media (max-width: 1099px) {
  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item
    .text-item {
    max-width: 380px;
  }

  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item
    .text-item
    .title,
  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item
    .text-item
    .content {
    font-size: 32px;
  }
}

@media (max-width: 991px) {
  .publisher-features .publisher-features-inner .feature-item-list .feature-item {
    flex-direction: column-reverse;
    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }

  .publisher-features .container {
    padding-left: 40px;
    padding-right: 40px;
  }

  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item
    .text-item {
    max-width: 500px;
    margin-bottom: 50px;
  }
}

@media (max-width: 767px) {
  .publisher-features .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .publisher-features {
    padding-top: 0px; 
  }

  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item
    .image {
    width: 100%;
    height: auto;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .publisher-features .publisher-features-inner .feature-item-list .feature-item:nth-child(1) .image {
    width: 100%;
    height: fit-content;
    width: fit-content;
  }

  .publisher-features .publisher-features-inner .feature-item-list .feature-item:nth-child(1) .image img {
    margin-left: -30px;
    width: 100%;
    position: initial; 
    transform: none;
  }

  .publisher-features .publisher-features-inner .feature-item-list .feature-item .text-item .title,
  .publisher-features .publisher-features-inner .feature-item-list .feature-item .text-item .content {
    font-size: 26px;
    line-height: 160%;
  }

  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item:nth-child(2) .image img {
      width: 100%;
    }

  .publisher-features
    .publisher-features-inner
    .feature-item-list
    .feature-item:nth-child(2)
    .image
    .asterix {
    position: absolute;
    top: 15px;
    left: 15px;
    scale: 1;
    width: 80px;
  }
}
</style>
