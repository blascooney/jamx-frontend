<script setup lang="ts">
import ICircle from "@/assets/svg/circle-rings.vue";
import IFlower from "@/assets/svg/flower.vue";
import IFunnel from "@/assets/svg/funnel.vue";
import Row from "@/components/core/Row.vue";
import Column from "@/components/core/Column.vue";
import ComeJamButton from "@/components/global/ComeJamButton.vue";

const data = {
  list: [
    {
      title: "Join the Movement",
      content:
        "Sign up and become part of a community that's reshaping the audio landscape.",
      icon: IFunnel,
    },
    {
      title: "Share Your Sound",
      content:
        "Submit your RSS feed and let us do the heavy lifting, distributing your podcast across our extensive network.",
      icon: IFlower,
    },
    {
      title: "Grow Your Audience",
      content:
        "Watch as your listener base expands, connecting with engaged audiences who crave your content.",
      icon: ICircle,
    },
  ],
};
</script>

<template>
  <section class="feature-gallery">
    <div class="container">
      <div class="feature-gallery-inner">
        <div
          class="gallery"
        >
          <Row :gutter="30">
            <Column
              v-for="(item, index) in data.list"
              :lg="4"
              :md="12"
              :sm="12"
              :xs="12"
              :key="index"
            >
              <div class="gallery-item">
                <div class="top">
                  <div
                    class="icon"
                  >
                    <component :is="item.icon"> </component>
                  </div>
                </div>
                <div class="bottom">
                  <div class="title">
                    <span>{{ item.title }}</span>
                  </div>
                  <div class="content">
                    <span>{{ item.content }}</span>
                  </div>
                </div>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.feature-gallery {
  padding-top: 30;
  padding-bottom: 30;

  .feature-gallery-inner {
    max-width: 1260px;
    padding: 0px 30px;
    margin-left: auto;
    margin-right: auto;

    .gallery {
      .gallery-item {
        padding: 14px;

        .top {
          display: flex;
          // justify-content: center;
          .icon {
            width: 140px;
            height: 140px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .bottom {
          margin-top: 15px;
          padding-right: 100px;

          .title span {
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
          }

          .content { 
            span {
              font-size: 14px;
            }
            line-height: 18px;
          }
        }
      }

      .grid-row {
        >div:nth-child(1) .gallery-item .top .icon {
          background: #55FFA5;
        }

        >div:nth-child(2) .gallery-item .top .icon {
          background: #ffa7fb;
        }

        >div:nth-child(3) .gallery-item .top .icon {
          background: #AAA7FF;
        }
      }
    }
  }
}

@media (max-width: 1199px) {
  .feature-gallery .feature-gallery-inner .gallery .gallery-item .bottom {
    padding-right: 0px;
  }
}

@media (max-width: 991px) {
  .feature-gallery .feature-gallery-inner {
    max-width: 610px;
  }
  .feature-gallery .feature-gallery-inner .gallery .gallery-item .top {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .feature-gallery .feature-gallery-inner .gallery .gallery-item .top .icon {
    width: 80px;
    height: 80px;
    border-radius: 24px;
  }
  .feature-gallery .feature-gallery-inner .gallery .gallery-item .top .icon  svg {
    width: 50px;
    height: 50px;
  }
  .feature-gallery .feature-gallery-inner .gallery .gallery-item {
    text-align: center;
  }
}

@media (max-width: 767px) {
  .feature-gallery .feature-gallery-inner {
    padding: 0px 15px;
  }
  .feature-gallery .feature-gallery-inner .gallery .gallery-item {
    padding: 0px;
  }
}
</style>