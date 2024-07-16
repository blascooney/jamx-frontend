<script setup lang="ts">
import ILight from "@/assets/svg/ilight.vue";
import { onMounted, ref } from "vue";

const width = ref(1024);

onMounted(() => {
  const doResize = () => {
    setTimeout(() => {
      width.value =  window.innerWidth;
    });
  };

  window.addEventListener("resize", () => {
    doResize();
  });

  setTimeout(() => {
    doResize();
  }, 100);
});
</script>

<template>
  <div class="amplifying-voice">
    <div class="amplifying-voice-inner">
      <div class="subtitle">
        <p>Why invest so much in your content and then settle on listening numbers?</p>
      </div>
      <div class="inner-content" id="pinSection">
        <div class="left" v-if="width >= 992" data-scroll data-scroll-sticky data-scroll-offset="-30%, 350" data-scroll-target="#pinSection">
          <div class="title">
            <h2>At JamX, we're more than a platform;<br> we're your partner in <span class="strong">amplifying your voice.</span></h2>
          </div>
        </div>
        <div class="left" v-else>
          <div class="title">
            <h2>At JamX, we're more than a platform;<br> we're your partner in <span class="strong">amplifying your voice.</span></h2>
          </div>
        </div>
        <div class="right">
          <div class="right-item">
            <div class="badge">
              <div class="badge-content">
                <div class="icon">
                  <ILight />
                </div>
                <span>Unmatched Visibility</span>
              </div>
            </div>
            <div class="title">
              <h3>Imagine being featured where your listeners are already engaged.</h3>
            </div>
            <div class="content">
              <p>That's the kind of visibility we offer.</p>
            </div>
          </div>
          <div class="right-item">
            <div class="badge">
              <div class="badge-content">
                <div class="icon">
                  <ILight />
                </div>
                <span>Instant Impact</span>
              </div> 
            </div>
            <div class="title">
              <h3>From the moment you join us, your podcast's reach multiplies</h3>
            </div>
            <div class="content">
              <p>We're not just talking numbers. We're talking about connecting with listeners who are genuinely interested in what you have to say.</p>
            </div>
          </div>
          <div class="right-item">
            <div class="badge">
              <div class="badge-content">
                <div class="icon">
                  <ILight />
                </div>
                <span>Effortless Integration</span>
              </div>
            </div>
            <div class="title">
              <h3>With just a few clicks, your podcast is everywhere</h3>
            </div>
            <div class="content">
              <p>It's not magic; it's the power of advanced distribution technology at your fingertips.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .amplifying-voice {
    padding-top: 0px;
    padding-bottom: 50px;

    .amplifying-voice-inner {
      max-width: 1260px;
      padding: 0px 30px;
      margin-left: auto;
      margin-right: auto;

      .subtitle {
        p {
          font-size: 16px;
          text-align: center;
        }
      }

      .inner-content {
        display: flex;
        .left {
          width: 55%;
          margin-right: 100px;
          padding-top: 30px;
          height: fit-content;

          .title {
            h2 {
              font-size: 56px;
              line-height: 100%;
              font-weight: 300;
              .strong {
                font-weight: 600;
                background: -webkit-linear-gradient(106.51deg, #FFFFFF 27.94%, #D9FF3F 67.52%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
        .right {
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 30px;

          .right-item {
            width: 272px;
            margin-bottom: 100px;

            .badge {
              position: relative;
              width: fit-content;
              padding: 1px 1px 2px 1px;
              margin-bottom: 15px;

              &::before {
                background: linear-gradient(0deg, #D6D5FE -58.33%, rgba(21, 16, 155, 0) 100%);
                box-shadow: 0px 1px 44px 0px #FFA7FB0F;
                display: block;
                content: '';
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                border-radius: 20px;
              }
              .badge-content {
                position: relative;
                z-index: 1;
                background: linear-gradient(85.77deg, #000000 3.44%, #272727 142.15%);
                box-shadow: 1px 4px 12px 0px #AAA7FF1F;
                display: flex;
                align-items: center;
                width: fit-content;
                padding: 6px 14px;
                border: 1px solid;
                border-radius: 20px;
                border: none;
                span {
                  font-size: 14px;
                  line-height: 18px;
                  margin-left: 10px;
                }
                .icon {
                  display: flex;
                  height: 16px;
                } 
              }
            }

            &:nth-child(1) {
              .badge::before {
                background: linear-gradient(0deg, #D6D5FE -58.33%, rgba(21, 16, 155, 0) 100%);
                box-shadow: 0px 1px 44px 0px #FFA7FB0F;
              }
              .badge-content {
                background: linear-gradient(85.77deg, #000000 3.44%, #272727 142.15%);
                box-shadow: 1px 4px 12px 0px #AAA7FF1F;
              }
            }
            &:nth-child(2) {
              .badge::before {
                background: linear-gradient(0deg, #D9FF3F -58.33%, rgba(21, 16, 155, 0) 100%);
                box-shadow: 0px 1px 44px 0px #FFA7FB0F;
              }
              .badge-content {
                background: linear-gradient(85.77deg, #000000 3.44%, #272727 142.15%);
                box-shadow: 1px 4px 12px 0px #D9FF3F29;
              }
            }
            &:nth-child(3) {
              .badge::before {
                background: linear-gradient(0deg, #55FFA5 -58.33%, rgba(51, 153, 99, 0) 100%);
                box-shadow: 0px 1px 44px 0px #FFA7FB0F;
              }
              .badge-content {
                background: linear-gradient(85.77deg, #000000 3.44%, #272727 142.15%);
                box-shadow: 1px 4px 12px 0px #55FFA51F;
              }
            }

            .title {
              h3 {
                font-size: 24px;
                line-height: 28px;
                font-weight: 400;
                margin-bottom: 10px;
              }
            }

            .content {
              p {
                font-size: 14px;
                line-height: 18px;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1199px) {
    .amplifying-voice .amplifying-voice-inner .inner-content .left {
      margin-right: 0px;
    }
  }

  @media (max-width: 991px) {
    .amplifying-voice .amplifying-voice-inner {
      max-width: 610px;
      margin-left: auto;
      margin-right: auto;
    }
    .amplifying-voice .amplifying-voice-inner .inner-content {
      flex-direction: column;
    }
    .amplifying-voice .amplifying-voice-inner .inner-content .left,
    .amplifying-voice .amplifying-voice-inner .inner-content .right {
      width: 100%;
    }
    .amplifying-voice .amplifying-voice-inner .inner-content .right {
      margin-top: 50px;
      padding-top: 0px;;
    }
    .amplifying-voice .amplifying-voice-inner .inner-content .left .title h2 {
      font-size: 40px;
    }
    .amplifying-voice .amplifying-voice-inner .inner-content .right .right-item {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 767px) {
    .amplifying-voice {
      padding-bottom: 30px;
    }
    .amplifying-voice .amplifying-voice-inner .subtitle p {
      line-height: 24px;
      text-align: left;
    }
    .amplifying-voice .amplifying-voice-inner {
      padding: 0px 15px;
    }
    .amplifying-voice .amplifying-voice-inner .inner-content .left .title h2 {
      padding-right: 45px;
    }
    .amplifying-voice .amplifying-voice-inner .inner-content .right .right-item .title h3 {
      padding-right: 30px;
    }
  }

</style>
