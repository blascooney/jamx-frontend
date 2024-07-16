<script setup lang="ts">
import IPOBannerBrowser from "@/assets/images/po-banner-browser.png";
import ILogo from "@/assets/svg/logo.vue";
import IEmail from "@/assets/svg/email.vue";
import IRSSFeed from "@/assets/svg/rss-feed.vue";
// @ts-ignore
import { podcastersSignup } from "@/helpers/global";
import { ref } from "vue";

const email = ref<string>("");
const rss = ref<string>("");
const isLoading = ref<boolean>(false);

const onChangeEmail = (e: any) => {
	email.value = e.target.value;
}

const onChangeRss = (e: any) => {
	rss.value = e.target.value;
}

const onSignUp = async (e: any) => {
  const form = document.getElementById("po_banner_form");
  if (form instanceof HTMLFormElement && form.checkValidity()) {
    e.preventDefault();
    isLoading.value = true;
		await podcastersSignup('', email.value, rss.value, null);
    isLoading.value = false;
  }
}

</script>

<template>
  <div class="po-banner">
    <div class="po-banner-inner">
      <div class="left">
        <div class="logo">
          <ILogo />
        </div>
        <div class="left-box">
          <div class="title">
            <h1>Reach Audiences That Crave <br> Your Podcast</h1>
          </div>
          <div class="desc">
            <p>JamX boosts your podcast by recommending your episodes on top sites, directly connecting with eager listeners, enhancing your visibility and engagement.</p>
          </div>
          <form class="left-form" id="po_banner_form">
            <div class="input-group">
              <div class="icon"><IEmail /></div>
              <input class="input" placeholder="Your email" :value="email" type="email" @change="onChangeEmail" required />
            </div>
            <div class="input-group">
              <div class="icon"><IRSSFeed /></div>
              <input class="input" placeholder="Your RSS Feed" :value="rss" type="url" @change="onChangeRss" required />
              <button type="submit" @click="onSignUp" :disabled="isLoading">Sign up now</button>
            </div>
            <p class="desc">By signing up you agree to our <a href="/terms" target="_blank">Terms and conditions</a></p>
          </form>
        </div>
      </div>
      <div class="right">
        <img :src="IPOBannerBrowser" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .po-banner {
    padding-top: 100px;
    padding-bottom: 100px;
    .po-banner-inner {
      max-width: 1260px;
      padding: 0px 30px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      .left {
        max-width: 500px;
        .title {
          h1 {
            font-size: 56px;
            line-height: 100%;
            font-weight: 600;
            margin-bottom: 15px;
            margin-top: 10px;
            background: -webkit-linear-gradient(106.51deg, #FFFFFF 27.94%, #D9FF3F 67.52%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        .desc {
          p {
            font-size: 16px;
            line-height: 150%;
            padding-right: 100px;
          }
        }
        .left-form {
          margin-top: 10px;
          .input-group {
            position: relative;
            width: 100%;
            max-width: 320px;
            margin-bottom: 10px;
            input {
              width: 100%;
              height: 38px;
              border-radius: 28px;
              padding: 10px 12px 10px 32px;
              background: white;
              border: none;
            }
            .icon {
              position: absolute;
              width: fit-content;
              height: 100%;
              left: 12px;
              display: flex;
              align-items: center;
            }
            button {
              position: absolute;
              width: 102px;
              height: 32px;
              top: 3px;
              right: 3px;
              border-radius: 30px;
              background: #101010;
              color: #D9FF3F;
              font-size: 14px;
              line-height: 18px;
              font-weight: 400;
              cursor: pointer;
            }
          }
          p.desc {
            font-size: 12px;
            line-height: 22px;
            color: #85859B;
            a {
              color: white;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1199px) {
    .po-banner .po-banner-inner .right img {
      width: 470px;
    }
  }

  @media (max-width: 991px) {
    .po-banner {
      padding: 30px 0px 50px 0px;
    }
    .po-banner .po-banner-inner {
      flex-direction: column-reverse;
      max-width: 610px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .po-banner .po-banner-inner .right {
      position: relative;
    }
    .po-banner .po-banner-inner .right::after {
      background: linear-gradient(180deg, rgba(16, 16, 16, 0) 0%, #101010 77.5%);
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      display: block;
      content: '';
    }
    .po-banner .po-banner-inner .left {
      margin-top: -80px;
      position: relative;
      z-index: 1;
    }
    .po-banner .po-banner-inner .left * {
      text-align: center;
    }
    .po-banner .po-banner-inner .left .title h1 {
      font-size: 48px;
      br {
        display: none;
      }
    }
    .po-banner .po-banner-inner .left .desc p {
      padding-right: 0px;
    }
    .po-banner .po-banner-inner .left .left-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 767px) {
    .po-banner {
      padding: 10px 0px 80px 0px;
    }
    .po-banner .po-banner-inner .right {
      margin: -15px;
    }
    .po-banner .po-banner-inner .right img {
      width: 100%;
    }
    .po-banner .po-banner-inner .left .title h1 {
      font-size: 32px;
            padding: 0px 15px;
    }
    .po-banner .po-banner-inner .left {
      margin-top: -100px;
    }
    .po-banner .po-banner-inner {
      padding: 0px 15px;
    }
    .po-banner .po-banner-inner .left .left-form .input-group {
      max-width: 100%;
    }
    .po-banner .po-banner-inner .left .desc p {
      padding: 0px 15px;
    }
  }
</style>