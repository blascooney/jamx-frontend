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
  const script = document.createElement('script');
  script.src = 'https://wgt.podcastswaves.com/jamx.player.js';
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <section class="our-experience">
    <div class="container">
      <div class="our-experience-inner">
        <div class="left">
          <div class="content">
            <img :src="IExpreienceImg" alt="" />
            <div
              class="pulsar-player-wrapper"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
              :style="`width: ${
                browserWidth >= 768 ? 360 : 333
              }px; max-width: 750px`"
            >
              <jamx-player  
                seller="5000" 
                subseller="1285" 
                domain="jamx.ai" theme="0" 
                layout="1"  
                style="width: 100%;"
              ></jamx-player>
              <!-- <iframe
                :src="`https://sky.audiopulsar.com?seller=5000&subseller=1183&domain=demo.com&theme=1&layout=1&width=360px`"
                frameborder="0"
                height="256"
                scrolling="no"
                :style="`width: ${
                  browserWidth >= 768 ? 360 : 333
                }px; max-width: 750px`"
              ></iframe> -->
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-content">
            <div class="text">
              <p class="black">
                JamX combines cutting-edge technology, artificial intelligence, and a smooth user experience to deliver audio content to a new audience. It’s a platform for listeners to discover the undiscoverable and fall in love with new podcasts, and publishers to retain an engaged audience.
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
.our-experience {
  padding-top: 100px;
  padding-bottom: 100px;

  .container {
    padding-left: 40px;
    padding-right: 40px;

    .our-experience-inner {
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
  .our-experience .container .our-experience-inner {
    margin-left: auto;
    margin-right: auto;
    border-radius: 60px;
  }

  .our-experience .container .our-experience-inner .right {
    padding-left: 0px;
  }

  .our-experience
    .container
    .our-experience-inner
    .right
    .right-content
    .actions
    img.wow {
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 1339px) {
  .our-experience .container .our-experience-inner .right {
    padding-left: 15px;
  }

  .our-experience .container .our-experience-inner .right .right-content {
    width: auto;
  }

  .our-experience .container .our-experience-inner .right .right-content .actions {
    margin-top: 15px;
  }
}

@media (max-width: 1199px) {
  .our-experience .container .our-experience-inner {
    display: block;
    height: auto;
    padding-bottom: 50px;
  }
   .our-experience .container .our-experience-inner .right {
       padding-left: 0px;
   }
  .our-experience .container .our-experience-inner .right .right-content .text {
    padding-top: 125px;
  }
    .our-experience .container .our-experience-inner .right .right-content .actions {
    margin-top: 50px;
  }
  .our-experience .container .our-experience-inner .left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .our-experience .container .our-experience-inner .left img {
    margin-bottom: -100px;
  }
  .our-experience
    .container
    .our-experience-inner
    .left
    .pulsar-player-wrapper {
    top: 40%;
  }
}

@media (max-width: 767px) {
  .our-experience {
    overflow: hidden;
    padding-top: 53px;
    padding-bottom: 53px;
  }

  .our-experience .container {
    padding-top: 82px;
    padding-bottom: 0px;
    padding-left: 3px;
    padding-right: 2px;
  }

  .our-experience .container .our-experience-inner .left img {
    margin-top: -150px;
    margin-left: -150px;
    transform: scale(0.8);
  }

  .our-experience .container .our-experience-inner {
    padding-left: 40px;
    padding-right: 30px;
  }

  .our-experience .container .our-experience-inner .right .right-content .text {
    padding-top: 150px;
  }

  .our-experience .container .our-experience-inner .right .right-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .our-experience
    .container
    .our-experience-inner
    .right
    .right-content
    .actions {
    display: block;
  }

  .our-experience
    .container
    .our-experience-inner
    .left
    .pulsar-player-wrapper {
    left: 18%;
    top: 55%;
  }
}

@media (max-width: 360px) {
}
</style>
