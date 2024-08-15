<script setup lang="ts">
import GetStartedTodayButton from "@/components/global/GetStartedTodayButton.vue";
import IStar07 from "@/assets/svg/star-07.vue";
import IDesktopBG from "@/assets/svg/banner-desktop-bg.vue";
import IMobileBG from "@/assets/svg/banner-mobile-bg.vue";

const data = {
  title:
    "Tap into a <span class='bg-intent-audience'>High-Intent Audience</span> <br class='bg-intent-audience-br'/> <span class='bg-intent'>High-Intent</span> <br class='bg-intent-audience-br'/> <span class='bg-audience'>Audience</span>",
  subtitle:
    " to expand your listener base, build a <span class='bg-podcast'> loyal community,</span>  and take your podcast to new heights.",
};
</script>

<template>
  <section class="advertisers-banner">
    <div class="bg">
      <IDesktopBG
        class="hide sm-block md-block lg-block xl-block xxl-block xxl-block xxxl-block"
      />
      <IMobileBG class="hide xs-block" />
    </div>
    <div class="container">
      <div class="banner-inner">
        <div class="i-star-07">
          <IStar07 />
        </div>
        <div class="i-star-08">
          <IStar07 />
        </div>
        <div class="i-star-02"><IStar02 /></div>

        <h1
          class="title text-center"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
          v-html="data.title"
        >
        </h1>
        <h2
          class="subtitle text-center"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
          v-html="data.subtitle"
        >
        </h2>
        <div class="banner-action flex-center">
          <GetStartedTodayButton />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.advertisers-banner {
  padding-top: 240px;
  padding-bottom: 240px;
  position: relative;

  .bg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  .banner-inner {
    max-width: 1188px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    .i-star-07 {
      position: absolute;
      top: -100px;
      right: 100px;
    }

    .i-star-08 {
      position: absolute;
      bottom: -20px;
      left: calc(50% - 250px);
      scale: 0.6;
    }

    .title {
      color: #fff;
      font-size: 60px;
      font-weight: 300;
      line-height: 75px;
      span.bg-intent-audience,
      span.bg-intent,
      span.bg-audience {
        background: #55FFA5;
        border-radius: 100px;
        color: #101010;
        padding: 0px 20px;
        font-weight: 600;
      }
      span.bg-intent-audience {
        display: inline-block;
      }
      span.bg-intent,
      span.bg-audience  {
        display: none;
      }
      br.bg-intent-audience-br {
        display: none;
      }
    }

    .subtitle {
      color: #fff;
      font-size: 43px;
      font-weight: 300;
      line-height: 48px;
      margin-top: 15px;

      span.bg-podcast {
        background: #AAA7FF;
        display: inline-block;
        border-radius: 100px;
        color: #101010;
        padding: 0px 10px;
        font-weight: 600;
      }      
    }

    .content {
      margin-top: 24px;
      font-size: 27px;
      line-height: 36px;
      padding-left: 50px;
      padding-right: 50px;
    }

    .banner-action {
      margin-top: 54px;
      .btn-come {
        width: 262px;
        button {
          > span {
            font-weight: 700;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .advertisers-banner .banner-inner .content {
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (max-width: 767px) {
  .advertisers-banner {
    margin-top: 100px;
    padding-top: 127px;
    padding-bottom: 50px;
  }
  .advertisers-banner .banner-inner .title {
    font-size: 38px;
    font-weight: 300;
    line-height: 45px;
  }

  .advertisers-banner .banner-inner .subtitle {
    font-size: 30px;
    font-weight: 300;
    line-height: 150%;
  }

  .advertisers-banner .banner-inner .content {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }

  .advertisers-banner .banner-inner .i-star-07 {
    scale: 0.7;
    left: calc(50% - 50px);
  }

  .advertisers-banner .banner-inner .i-star-08 {
    scale: 0.3;
    left: calc(50% + 10px);
    right: auto;
    top: -90px;
    bottom: auto;
  }
}
@media (max-width: 450px) {
  .advertisers-banner .banner-inner .title span.bg-intent-audience {
    display: none;
  }
  .advertisers-banner .banner-inner .title br.bg-intent-audience-br {
    display: inline-block;
  }
  .advertisers-banner .banner-inner .title span.bg-intent,
  .advertisers-banner .banner-inner .title span.bg-audience {
    margin-top: 5px;
    display: inline-block;
  }
}

</style>
