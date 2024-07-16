<script setup lang="ts">
import IExpreienceImg from "@/assets/images/our-experience.svg";
import IWow from "@/assets/images/wow-desktop.svg";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
const browserWidth = ref(1440);

onMounted(() => {
  browserWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    browserWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <section class="out-experience">
    <div class="container">
      <div class="out-experience-inner">
        <div class="left">
          <div class="content">
            <img :src="IExpreienceImg" alt="" />
            <div
              class="pulsar-player-wrapper"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
            >
              <iframe
                :src="`https://sky.audiopulsar.com?seller=5000&subseller=1183&domain=demo.com&theme=1&layout=1&width=360px`"
                frameborder="0"
                height="256"
                scrolling="no"
                :style="`width: ${
                  browserWidth >= 768 ? 360 : 333
                }px; max-width: 750px`"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-content">
            <div class="text">
              <p class="black">
                Positioned at the intersection of technology, creativity, and user experience, we specialize in enabling a seamless integration of audio with other digital media, providing our partners with comprehensive solutions that unlock the full potential of the evolving audio ecosystem.
              </p>
            </div>
            <div class="actions flex-center">
              <img :src="IWow" alt="" class="wow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.out-experience {
  padding-top: 100px;
  padding-bottom: 100px;

  .container {
    padding-left: 40px;
    padding-right: 40px;

    .out-experience-inner {
      height: 600px;
      padding-left: 40px;
      padding-right: 40px;
      border-radius: 100px;
      background: #aaa7ff;
      display: flex;
      align-content: center;

      .left {
        .content {
          position: relative;
        }
        img {
          margin-top: -125px;
          margin-right: 40px;
        }
        .pulsar-player-wrapper {
          position: absolute;
          right: 0px;
          top: 35%;
          width: fit-content;
        }
      }

      .right {
        width: 100%;
        padding-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        .right-content {
          width: 516px;

          .text {
            padding-top: 50px;
            p {
              font-size: 20px;
            }
          }

          .actions {
            margin-top: 50px;
          }
        }
      }
    }
  }
}

@media (max-width: 1599px) {
  .out-experience .container .out-experience-inner {
    margin-left: auto;
    margin-right: auto;
    border-radius: 60px;
  }

  .out-experience .container .out-experience-inner .right {
    padding-left: 0px;
  }

  .out-experience
    .container
    .out-experience-inner
    .right
    .right-content
    .actions
    img.wow {
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 1339px) {
  .out-experience .container .out-experience-inner .right {
    padding-left: 15px;
  }

  .out-experience .container .out-experience-inner .right .right-content {
    width: auto;
  }

  .out-experience .container .out-experience-inner .right .right-content .actions {
    margin-top: 15px;
  }
}

@media (max-width: 1199px) {
  .out-experience .container .out-experience-inner {
    display: block;
    height: auto;
    padding-bottom: 50px;
  }
   .out-experience .container .out-experience-inner .right {
       padding-left: 0px;
   }
  .out-experience .container .out-experience-inner .right .right-content .text {
    padding-top: 125px;
  }
    .out-experience .container .out-experience-inner .right .right-content .actions {
    margin-top: 50px;
  }
  .out-experience .container .out-experience-inner .left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .out-experience .container .out-experience-inner .left img {
    margin-bottom: -100px;
  }
  .out-experience
    .container
    .out-experience-inner
    .left
    .pulsar-player-wrapper {
    top: 40%;
  }
}

@media (max-width: 767px) {
  .out-experience {
    overflow: hidden;
    padding-top: 53px;
    padding-bottom: 53px;
  }

  .out-experience .container {
    padding-top: 82px;
    padding-bottom: 0px;
    padding-left: 3px;
    padding-right: 2px;
  }

  .out-experience .container .out-experience-inner .left img {
    margin-top: -150px;
    margin-left: -150px;
    transform: scale(0.8);
  }

  .out-experience .container .out-experience-inner {
    padding-left: 40px;
    padding-right: 30px;
  }

  .out-experience .container .out-experience-inner .right .right-content .text {
    padding-top: 75px;
  }

  .out-experience .container .out-experience-inner .right .right-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .out-experience
    .container
    .out-experience-inner
    .right
    .right-content
    .actions {
    display: block;
  }

  .out-experience
    .container
    .out-experience-inner
    .left
    .pulsar-player-wrapper {
    left: 18%;
    top: 55%;
  }
}

@media (max-width: 360px) {
}
</style>
