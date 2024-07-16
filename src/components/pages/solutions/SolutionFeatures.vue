<script setup lang="ts">
import IFeatureimage01 from "@/assets/images/solution-features-01.svg";
import IFeatureimage02 from "@/assets/images/solution-features-02.svg";
import IAsterix from "@/assets/images/asterix.svg";
import ComeJamButton from "@/components/global/ComeJamButton.vue";

const data = [
  {
    texts: [
      {
        title: "Attention amplifiers",
        content:
          "Boost session durations by 54% and decrease bounce rates by 10%",
      },
      {
        title: "Exceptional monetization",
        content: "uplift ad revenue by an average of 17%",
      },
    ],
    image: IFeatureimage01,
  },
  {
    texts: [
      {
        title: "Improved UX",
        content:
          "Provide multisensory audio experiences  leading to +7% CTRs",
      },
      {
        title: "Enhanced content offerings",
        content:
          "attracting and retaining loyal audiences with captivating audio content - resulting in +12% new monthly subscribers",
      },
    ],
    image: IFeatureimage02,
  },
];
</script>

<template>
  <section class="solution-features">
    <div class="container">
      <div class="solution-features-inner">
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
        <div class="action flex-center flex xs-hide sm-hide">
          <ComeJamButton />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.solution-features {
  padding-top: 91px;
  padding-bottom: 85px;

  .solution-features-inner {
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

          .title,
          .content {
            font-size: 42px;
            line-height: 52px;
          }

          .title {
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

    .action {
      margin-top: 168px;
    }
  }
}

@media (max-width: 1439px) {
  .solution-features .solution-features-inner {
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (max-width: 1199px) {
  .solution-features
    .solution-features-inner
    .feature-item-list
    .feature-item
    .text-item {
    max-width: 500px;
  }
}

@media (max-width: 1099px) {
  .solution-features
    .solution-features-inner
    .feature-item-list
    .feature-item
    .text-item {
    max-width: 380px;
  }

  .solution-features
    .solution-features-inner
    .feature-item-list
    .feature-item
    .text-item
    .title,
  .solution-features
    .solution-features-inner
    .feature-item-list
    .feature-item
    .text-item
    .content {
    font-size: 32px;
  }
}

@media (max-width: 991px) {
  .solution-features .solution-features-inner .feature-item-list .feature-item {
    flex-direction: column-reverse;
    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }

  .solution-features .container {
    padding-left: 40px;
    padding-right: 40px;
  }

  .solution-features
    .solution-features-inner
    .feature-item-list
    .feature-item
    .text-item {
    max-width: 500px;
    margin-bottom: 50px;
  }
}

@media (max-width: 767px) {
  .solution-features {
    padding-top: 60px; 
  }

  .solution-features
    .solution-features-inner
    .feature-item-list
    .feature-item
    .image {
    transform-origin: top center;
    width: 280px !important;
    max-width: 280px !important;
    height: 315px !important;
  }


  .solution-features .solution-features-inner .feature-item-list .feature-item:nth-child(1) .image {
    height: 200px !important;
  }

  .solution-features
    .solution-features-inner
    .feature-item-list
    .feature-item:nth-child(2)
    .image
    .asterix {
    position: absolute;
    top: 30px;
    left: 30px;
    scale: 1;
  }
}
</style>
