<script setup lang="ts">
  import IWhyJamxDistrib from "@/assets/images/why-jamx-distrib.png";
  import IYellowArrowRightTop from "@/assets/svg/yellow-arrow-right-top.vue";

  const data = {
    title: 'Why JamX Distribution?',
    list: [
      {
        title: 'Enhanced exposure',
        content: 'Share your podcast episodes with our platform, making them accessible to JamX\'s immersed user base.',
      },
      {
        title: 'Engaged audience',
        content: 'Connect with a dedicated listener base that is already engaging with the topics your podcast is about. This pre-engaged audience is more likely to listen thoroughly and become regular subscribers, contributing to a steady increase in downloads and listens.',
      },
      {
        title: 'Effortless Setup',
        content: 'Integrate your podcast effortlessly with JamX\'s distribution platform.'
      }
    ],
  }
</script>

<template>
  <div class="why-jamx-distrib">
    <div class="why-jamx-distrib-inner">
      <div class="section-title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="section-content">
        <div class="left">
          <div class="left-desc-item" v-for="(item, index) in data.list" :key="index">
            <div class="icon">
              <IYellowArrowRightTop />
            </div>
            <div class="description">
              <p class="title">
                {{ item.title }}
              </p>
              <p class="content">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="image">
            <img :src="IWhyJamxDistrib" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.why-jamx-distrib {
  padding-top: 160px;
  padding-bottom: 40px;
  overflow: hidden;

  .why-jamx-distrib-inner {
    width: 1360px;
    margin-left: auto;
    margin-right: auto;

    .section-title {
      width: 100%;
      margin-bottom: 120px;
      h2 {
        font-size: 60px;
        line-height: 150%;
        text-align: center;
        font-weight: 600;
      }
    }

    .section-content {
      background: #AAA7FF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 100px;
      padding: 80px;

      .left {
        position: relative;
        z-index: 1;

        .left-desc-item {
          display: flex;
          margin-bottom: 30px;

          .icon {
            margin-top: -5px;
            margin-right: 15px;

            svg {
              transition: all 0.5s;
              &:hover {
                transform: rotate(-45deg);
                transition: all 0.5s;
              }
            }
          }
          .description {
            .title {
              font-size: 24px;
              color: #000000;
              font-weight: 600;
            }
            .content {
              font-size: 24px;
              color: #101010;
            }
          }
        }
      }
      .right {
        margin: -200px -80px -200px -0px;
        position: relative;
        z-index: 0;
      }
    }
  }
}

@media (max-width: 1399px) {
  .why-jamx-distrib .why-jamx-distrib-inner {
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content {
    padding: 50px;
    border-radius: 50px;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content .right {
    margin-right: -50px;
  }
}

@media (max-width: 1199px) {
  .why-jamx-distrib .why-jamx-distrib-inner .section-content .right .image img {
    max-width: 400px;
  }
}

@media (max-width: 991px) {
  .why-jamx-distrib .why-jamx-distrib-inner .section-content {
    flex-direction: column-reverse;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content .right {
    margin: -100px -100px -60px -100px;
  }
}

@media (max-width: 768px) {
  .why-jamx-distrib {
    padding-top: 0px;
  }
  .why-jamx-distrib .why-jamx-distrib-inner {
    padding: 10px;
  }
  .why-jamx-distrib .why-jamx-distrib-inner .section-title {
    margin-bottom: 50px;
  }
  .why-jamx-distrib .why-jamx-distrib-inner .section-title h2 {
    font-size: 32px;
    padding-left: 30px;
    padding-right: 32px;
  }
  .why-jamx-distrib .why-jamx-distrib-inner .section-content .left .left-desc-item .description .title {
    font-size: 20px;
  }
  .why-jamx-distrib .why-jamx-distrib-inner .section-content .left .left-desc-item .description .content {
    font-size: 16px;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content .left .left-desc-item .icon {
    margin-top: 0px;
    margin-right: 5px;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content .left .left-desc-item .icon svg {
    width: 32px;
    height: 32px;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content {
    padding: 10px;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content .right {
    margin: -30px;
  }

  .why-jamx-distrib .why-jamx-distrib-inner .section-content .right .image img {
    width: 300px;
  }
}

</style>