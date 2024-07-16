<script setup lang="ts">
import IStar03 from "@/assets/svg/lightning-2.vue";
import IStar04 from "@/assets/svg/star-02.vue";
import IStar05 from "@/assets/svg/star-05.vue";
import IYPlus from "@/assets/svg/yplus.vue";
import IEye from "@/assets/svg/eye.vue";
import IPlayer from "@/assets/svg/player.vue";
import OverviewSessionDuration from "@/components/pages/homepage/OverviewSessionDuration.vue";
import OverviewRateBox from "@/components/pages/homepage/OverviewRateBox.vue";
</script>

<template>
  <section class="homepage-overview">
    <div class="container">
      <div class="overview-inner">
        <div class="i-star-03"><IStar03 /></div>
        <div class="i-star-04"><IStar04 /></div>
        <div class="i-star-05"><IStar05 /></div>
        <div class="i-star-06"><IStar04 /></div>
        <div class="text-box">
          <p>
            An end-to-end audio platform,
            <span class="bold">
              fusing advertisers, publishers, and podcasts in perfect harmony
            </span>
          </p>
        </div>
        <div class="rate-box revinew-box">
          <OverviewRateBox
            background="#FFA7FB"
            rate="300M"
            :icon="IEye"
            text="Monthly page views"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          />
        </div>
        <div class="rate-box click-throw-box">
          <OverviewRateBox
            background="#55FFA5"
            rate="24M"
            :icon="IPlayer"
            text="Monthly sessions"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          />
        </div>
        <div class="rate-box subscribers-box">
          <OverviewRateBox
            background="#D9FF3F"
            rate="150M"
            :icon="IYPlus"
            text="Monthly reach"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          />
        </div>
        <div class="session-duration-box">
          <OverviewSessionDuration
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.homepage-overview {
  overflow: hidden;

  .container {
    .overview-inner {
      position: relative;
      padding-left: 388px;
      padding-right: 390px;
      padding-top: 147px;
      padding-bottom: 175px;

      .i-star-03 {
        position: absolute;
        top: 70px;
        left: calc(50% - 80px);
        scale: 0.7;
      }

      .i-star-04 {
        position: absolute;
        top: calc(50% - 200px);
        left: 0px;
      }

      .i-star-05 {
        position: absolute;
        top: 100px;
        right: calc(50% - 380px);
        scale: .8;
      }

      .i-star-06 {
        position: absolute;
        top: -100px;
        right: -100px;
        scale: .5;
      }

      .text-box {
        width: fit-content;
        border-radius: 70px;
        border: 1px solid #fff;
        background: #1d1d1b;

        p {
          width: 660px;
          height: 450px;
          padding: 60px 105px 78px 105px;
          font-size: 42px;
          font-weight: 400;
          line-height: 52px;
          .bold {
            font-weight: 700;
          }
        }
      }

      .rate-box {
        position: absolute;
        .rate {
          font-size: 38px;
        }
      }

      .rate-box.revinew-box {
        left: calc(50% + 290px);
        top: 10%;
        z-index: -1;
      }

      .rate-box.click-throw-box {
        left: calc(50% - 450px);
        top: 10%;
      }

      .rate-box.subscribers-box {
        left: calc(50% - 500px);
        bottom: 18%;
        z-index: -1;

        .overview-rate-box {
          width: 184px;
          height: 110px;
        }
      }

      .session-duration-box {
        position: absolute;
        left: calc(50% + 250px);
        bottom: calc(50px);
        transform: translate(0px, -50%);
      }
    }
  }
}

@media (max-width: 1439px) {
  .homepage-overview .container .overview-inner {
    display: flex;
    justify-content: center;
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (max-width: 1199px) {
  .homepage-overview .container {
    max-width: 992px;
    margin-left: auto;
    margin-right: auto;
  }

  .homepage-overview .container .overview-inner .text-box p {
    width: 500px;
    padding: 60px 50px;
  }

  .homepage-overview .container .overview-inner .i-star-03 {
    left: calc(45% - 40px);
  }

  .homepage-overview .container .overview-inner .i-star-05 {
    top: 150px;
    right: calc(50% - 320px);
    scale: 0.6;
  }

  .homepage-overview .container .overview-inner .session-duration-box {
    left: calc(50% + 200px);
  }

  .homepage-overview .container .overview-inner .rate-box.subscribers-box {
    left: calc(50% - 420px);
  }

  .homepage-overview .container .overview-inner .rate-box.click-throw-box {
    left: calc(50% - 350px);
  }

  .homepage-overview .container .overview-inner .rate-box.revinew-box {
    left: calc(50% + 220px);
  }
}

@media (max-width: 991px) {
  .homepage-overview .container .overview-inner {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  .homepage-overview .container .overview-inner .text-box {
    width: calc(100% - 200px);
    p {
      width: 100%;
    }
  }

  .homepage-overview .container .overview-inner .text-box p {
    width: 500px;
    padding: 60px 50px;
  }

  .homepage-overview .container .overview-inner .i-star-03 {
    left: calc(45% - 40px);
  }

  .homepage-overview .container .overview-inner .session-duration-box {
    left: calc(50% + 130px);
  }

  .homepage-overview .container .overview-inner .rate-box.subscribers-box {
    left: calc(50% - 380px);
  }

  .homepage-overview .container .overview-inner .rate-box.click-throw-box {
    left: calc(50% - 350px);
  }

  .homepage-overview .container .overview-inner .rate-box.revinew-box {
    left: calc(50% + 200px);
    top: 8%;
  }

  .homepage-overview .container .overview-inner .i-star-03 {
    right: 300px;
    left: auto;
  }

  .homepage-overview .container .overview-inner .i-star-04 {
    right: calc(50% - 200px);
    top: auto;
    bottom: 70px;
    left: auto;
  }
}

@media (max-width: 767px) {
  .homepage-overview .container .overview-inner {
    padding-top: 172px;
    padding-bottom: 324px;
    width: 100%;
  }

  .homepage-overview .container .overview-inner .text-box {
    width: 100%;
    border-radius: 50px;
  }

  .homepage-overview .container .overview-inner .text-box p {
    padding: 38px 20px 79px 20px;
    font-size: 35px;
    line-height: 49px;
    min-height: 300px;
    min-width: unset;
    width: 100%;
    height: auto;
  }

  .homepage-overview .container .overview-inner .i-star-04 {
    bottom: -100px;
    transform: scale(0.7);
  }

  .homepage-overview .container .overview-inner .rate-box.revinew-box {
    right: auto;
    left: 0px;
    top: 82px;
    bottom: auto;
    z-index: 1;
  }

  .homepage-overview .container .overview-inner .session-duration-box {
    z-index: 2;
    right: auto;
    left: -3%;
    bottom: 200px;
    top: auto;
  }

  .homepage-overview .container .overview-inner .rate-box.subscribers-box {
    right: 0%;
    left: auto;
    top: auto;
    bottom: 170px;
    transform: translate(0, 0);
  }

  .homepage-overview .container .overview-inner .rate-box.click-throw-box {
    left: auto;
    right: 0px;
    top: 24px;
    bottom: auto;
    z-index: 2;
  }

  .homepage-overview .container .overview-inner .rate-box .rate {
    font-size: 32px;
  }

  .homepage-overview .container .overview-inner .i-star-05 {
    top: auto;
    bottom: 230px;
    right: -50px;
    transform: scale(0.7);
  }

  .homepage-overview .container .overview-inner .i-star-04 {
    display: none;
  }

  .homepage-overview .container .overview-inner .i-star-03 {
    bottom: 0px;
    right: auto;
    transform: scale(1);
    top: auto;
    left: auto;
  }
}

@media (max-width: 360px) {
  .homepage-overview .container .overview-inner .text-box p {
    font-size: 32px;
  }
}
</style>