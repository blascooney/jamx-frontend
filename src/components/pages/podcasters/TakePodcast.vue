<script setup lang="ts">
  import GetStartedTodayButton from "@/components/global/GetStartedTodayButton.vue";
  import IStar05 from "@/assets/svg/star-05.vue";
  import IStar02 from "@/assets/svg/star-02.vue";
  import ITakePodcast from "@/assets/images/take-podcast.png";

  const data = {
    title: 'Take your podcast to the next tier',
    subtitle: 'Ready to amplify your podcast\'s reach and grow a dedicated listener base? ',
    content: 'Join the JamX Distribution Network and start connecting with a global audience of enthusiastic listeners.'
  }
</script>

<template>
  <div class="take-podcast">
    <div class="take-podcast-inner">
      <div class="section-title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="section-content">
        <div class="left">
          <div class="section-mobile-title">
            <h2>{{ data.title }}</h2>
          </div>
          <div class="title">
            <p>
              {{ data.subtitle }}
            </p>
          </div>
          <div class="content">
            <p>
              {{ data.content }}
            </p>
          </div>
          <div
            class="i-star-02"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <IStar02 />
          </div>
          <div
            class="i-star-05"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <IStar05 />
          </div>
          <div class="action">
            <GetStartedTodayButton />
          </div>
        </div>
        <div class="right">
          <div class="image">
            <img :src="ITakePodcast" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.take-podcast {
  padding-top: 160px;
  padding-bottom: 40px;
  overflow: hidden;

  .take-podcast-inner {
    width: 1360px;
    margin-left: auto;
    margin-right: auto;

    .section-title {
      width: 100%;
      margin-bottom: 120px;
      h2 {
        font-size: 60px;
        text-align: center;
        font-weight: 600;
      }
    }

    .section-content {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .left {
        position: relative;
        width: 45%;

        .section-mobile-title {
          display: none;
        }

        .i-star-02 {
          position: absolute;
          top: -170px;
          left: calc(50% + 100px);
          scale: 0.8;
        }
        .i-star-05 {
          position: absolute;
          bottom: -30px;
          left: calc(50% - 80px);
          scale: 0.8;
        }
        .title {
          p {
            max-width: 533px;
            font-size: 42px;
            line-height: 140%;
          }
        }
        .content {
          margin-top: 25px;
          p {
            max-width: 383px;
            font-size: 22px;
            font-weight: 400;
            line-height: 32px;
          }
        }
        .action {
          margin-top: 80px;
        }
      }

      .right {
        width: 55%;
      }
    }
  }
}

@media (max-width: 1399px) {
  .take-podcast .take-podcast-inner {
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  .take-podcast .take-podcast-inner .section-content .left {
    width: 50%;
  }

  .take-podcast .take-podcast-inner .section-content .right {
    width: 50%;
  }

  .take-podcast .take-podcast-inner .section-content .right .image img{
    max-width: 540px;
    width: 100%;
  }
}

@media (max-width: 991px) {
  .take-podcast {
    padding-top: 60px;
  }

  .take-podcast .take-podcast-inner .section-content {
    flex-direction: column-reverse;
  }

  .take-podcast .take-podcast-inner .section-content .left .section-mobile-title {
    display: block;
    font-size: 32px;
    line-height: 150%;
    max-width: 533px;
    margin-bottom: 30px;
  }

  .take-podcast .take-podcast-inner .section-content .left .title p {
    font-size: 28px;
  }

  .take-podcast .take-podcast-inner .section-title {
    display: none;
  } 

  .take-podcast .take-podcast-inner .section-content .left, .take-podcast .take-podcast-inner .section-content .right {
    width: 100%;
  }

  .take-podcast .take-podcast-inner .section-content .left {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }

  .take-podcast .take-podcast-inner .section-content .right .image img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

@media (max-width: 767px) {
  .take-podcast .take-podcast-inner {
    padding-left: 10px;
    padding-right: 10px;
  }

  .take-podcast .take-podcast-inner .section-content .left {
    margin-top: 50px;
  }

  .take-podcast .take-podcast-inner .section-content .left .section-mobile-title {
    text-align: center;
    font-size: 26px;
  }

  .take-podcast .take-podcast-inner .section-content .left .action {
    margin-top: 50px;
  }

  .take-podcast .take-podcast-inner .section-content .left .i-star-05 {
    position: absolute;
    bottom: -75px;
    scale: 0.8;
    left: auto;
    right: -80px;
  }
}

</style>