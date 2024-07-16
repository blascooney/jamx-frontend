<script setup lang="ts">
import ComeJamButton from "@/components/global/ComeJamButton.vue";
import IStar01 from "@/assets/svg/star-01.vue";
import IStar10 from "@/assets/svg/star-10.vue";
import { onMounted, ref } from "vue";
const width = ref();
const data = {
  title:
    '<span class="bold">A plug-and-play,<br> lightweight player</span> that can be embedded on publisher websites in a few clicks',
};

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

  loadJAMXPlayerScript();
});

const loadJAMXPlayerScript = () => {
    const script = document.createElement('script');
    script.src = 'https://wgt.podcastswaves.com/jamx.player.js';
    document.body.appendChild(script);
  }
</script>

<template>
  <section class="solution-banner">
    <div class="container">
      <div class="solution-banner-inner">
        <div class="main-content">
          <div class="i-star-01-wrapper hide xs-block sm-block">
            <IStar01 />
          </div>
          <div class="left">
            <div class="title">
              <div class="title">
                <h2 v-html="data.title"></h2>
              </div>
              <div class="action hide xxxl-block">
                <ComeJamButton />
              </div>
            </div>
          </div>
          <div class="right">
            <div
              class="player-01 block xs-hide sm-hide"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="0.3"
            >
              <div class="i-star-01-wrapper block xs-hide sm-hide">
                <IStar01 />
              </div>
              <jamx-player  seller="5000" subseller="1285" domain="jamx.ai" theme="0" layout="0"  style="width: 100%;"></jamx-player>
              <!-- <iframe
                :src="`https://sky.audiopulsar.com?seller=5000&subseller=1285&domain=demo.com&theme=4&layout=1&width=661px`"
                frameborder="0"
                height="256"
                scrolling="no"
                :style="`width: ${
                  width >= 1440 ? 661 : width >= 1200 ? (width - 100) / 2 : 750
                }px; max-width: 750px`"
              ></iframe> -->
            </div>
            <div
              class="player-02"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
            >
              <div class="i-star-10-wrapper block xs-hide sm-hide">
                <IStar10 />
              </div>
              <iframe
                :src="`https://sky.audiopulsar.com?seller=5000&subseller=1183&domain=demo.com&theme=1&layout=1&width=393px`"
                frameborder="0"
                height="256"
                scrolling="no"
                :style="`width: 393px; max-width: 750px`"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="action block xxxl-hide">
          <ComeJamButton />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.solution-banner .solution-banner-inner .action .btn-come {
  width: 262px !important;
}
.solution-banner {
  padding-top: 140px;
  padding-bottom: 120px;

  .solution-banner-inner {
    max-width: 1437px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 131px 80px 131px;
    border-radius: 100px;
    background: #aaa7ff;

    .main-content {
      display: flex;
    }

    .left {
      .title h2 {
        max-width: 737px;
        color: #1d1d1b;
        font-size: 57px;
        line-height: 75px;
      }

      .action {
        margin-top: 40px;
        button {
          width: 262px;
        }
      }
    }

    .right {
      flex-grow: 1;
      position: relative;
      .player-01 {
        position: absolute;
        .i-star-01-wrapper {
          position: absolute;
          top: -20px;
          right: 200px;
        }
      }
      .player-02 {
        position: absolute;
        bottom: 0px;
        left: 160px;

        .i-star-10-wrapper {
          position: absolute;
          bottom: 50px;
          left: -80px;
        }
      }
    }
  }
}

@media (max-width: 1599px) {
  .solution-banner .solution-banner-inner {
    max-width: 1347px;
  }

  .solution-banner .solution-banner-inner .left {
    width: 50%;
  }

  .solution-banner .solution-banner-inner .left .title h2 {
    min-width: auto;
    max-width: unset;
    font-size: 50px;
  }

  .solution-banner .solution-banner-inner .right .player-01 .i-star-01-wrapper {
    right: 180px;
  }
}

@media (max-width: 1439px) {
  .solution-banner .solution-banner-inner .left .title h2 {
    font-size: 45px;
  }

  .solution-banner .solution-banner-inner .right .player-02 {
    left: calc(50% - 115px);
  }
}

@media (max-width: 1199px) {
  .solution-banner .solution-banner-inner .left {
    width: 100%;
  }
  .solution-banner .solution-banner-inner .left .title h2 {
    text-align: center;
  }
  .solution-banner .solution-banner-inner .main-content {
    display: block;
  }

  .solution-banner .solution-banner-inner .right {
    width: 100%;
    height: 400px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .solution-banner .solution-banner-inner .right .player-01 {
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
  }

  .solution-banner .solution-banner-inner .right .player-02 {
    width: 100%;
    left: 0px;
    display: flex;
    justify-content: center;
  }

  .solution-banner .solution-banner-inner > .action {
    margin-top: 30px;
    display: flex !important;
    justify-content: center;
  }
}

@media (max-width: 991px) {
  .solution-banner .solution-banner-inner .right .player-01 .i-star-01-wrapper {
    right: 180px;
  }
}

@media (max-width: 767px) {
  .solution-banner .solution-banner-inner {
    padding: 50px 12px 40px 12px;
    border-radius: 50px;
  }
  .solution-banner .solution-banner-inner .left .title h2 {
    color: #1d1d1b;
    font-size: 38px;
    line-height: 50px;
    padding-left: 15px;
    padding-right: 10px;
    text-align: left;
  }
  .solution-banner .solution-banner-inner .main-content {
    position: relative;
  }

  .solution-banner .solution-banner-inner .main-content .i-star-01-wrapper {
    position: absolute;
  }

  .solution-banner .solution-banner-inner .right {
    height: 250px;
  }

  .solution-banner .solution-banner-inner .main-content .i-star-01-wrapper {
    top: -80px;
    left: 50%;
    transform: translate(-50%, 0px);
  }
}
</style>