<script setup lang="ts" >
import ITrustedByBrand_1 from "@/assets/images/truested-by-brand-1.png"
import ITrustedByBrand_2 from "@/assets/images/truested-by-brand-2.png"
import ITrustedByBrand_3 from "@/assets/images/truested-by-brand-3.png"
import ITrustedByBrand_4 from "@/assets/images/truested-by-brand-4.png"
import ITrustedByBrand_5 from "@/assets/images/truested-by-brand-5.png"
import IStar04 from "@/assets/svg/star-02.vue";
import IStar05 from "@/assets/svg/star-05.vue";
import Row from "@/components/core/Row.vue";
import Column from "@/components/core/Column.vue";

const data = {
  title: 'Trusted by',
  brans: [
    ITrustedByBrand_1, 
    ITrustedByBrand_3, 
    ITrustedByBrand_4, 
    ITrustedByBrand_2, 
    ITrustedByBrand_5
  ]
}
</script>

<template>
  <section class="trusted-by">
    <div class="container">
      <div class="trusted-by-inner">
        <div class="title">
          <h2>{{ data.title }}</h2>
        </div>
        <div class="gallery">
          <Row>
            <Column
              class="gallery-item" 
              v-for="(item, index) in data.brans"
              :xl="12 / 3"
              :lg="12 / 3"
              :md="12 / 3"
              :sm="12 / 2"
              :xs="12 / 2"
              :key="index"
            >
              <div class="gallery-item">
                <img :src="item" alt=""/>
              </div>
            </Column>
          </Row>
        </div>
        <div class="i-star-05 sm-hide xs-hide"><IStar05 /></div>
        <div class="i-star-06 sm-hide xs-hide"><IStar04 /></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.trusted-by {
  .container {
    .trusted-by-inner {
      max-width: 1437px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      padding: 112px 0 152px 0;

      .title {
        h2 {
          color: #FFF;
          text-align: center;
          font-size: 66px;
          font-weight: 700;
          line-height: 85px;
        }
      }

      .gallery {
        margin-top: 40px;

        .gallery-item:not(.grid-column) {
          margin-top: 95px;
          height: 57px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            max-height: 200%;
          }
        }
      }

      .i-star-05 {
        position: absolute;
        scale: .4;
        top: 0px;
        bottom: auto;
        right: auto;
        left: -80px;
      }

      .i-star-06 {
        position: absolute;
        scale: .4;
        top: auto;
        bottom: -100px;
        right: -80px;
        left: auto;
      }
    }
  }
}

@media (max-width: 767px) {
  .trusted-by .container .trusted-by-inner .gallery  {
    margin-top: 0px;
  }

  .trusted-by .container .trusted-by-inner .gallery .gallery-item:not(.grid-column) {
    margin-top: 80px;
  }

  .trusted-by .container .trusted-by-inner .gallery .grid-row > div:nth-child(5) .gallery-item:not(.grid-column) {
    height: 100px;
  }

  .trusted-by .container .trusted-by-inner .gallery .gallery-item:not(.grid-column) img {
    max-height: 100%;
  }
}

@media (max-width: 575px) {
  .trusted-by .container .trusted-by-inner .title h2 {
    font-size: 48px;
  }

  .trusted-by .container .trusted-by-inner .gallery .gallery-item img {
    scale: .7;
  }
}
</style>