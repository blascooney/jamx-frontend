<script setup lang="ts">
// @ts-nocheck
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
  const form = document.getElementById("po_footer_form");
  if (form instanceof HTMLFormElement && form.checkValidity()) {
    e.preventDefault();
    isLoading.value = true;
		await podcastersSignup('', email.value, rss.value, null);
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="po-footer">
    <div class="po-footer-inner">
      <div class="inner-content-wrapper">
        <div class="inner-content">
          <div class="left">
            <div class="title">
              <h2>Ready to Amplify Your Reach?</h2>
            </div>
            <div class="content">
              <p>Join JamX today and see how far your podcast can go. Submit your RSS and take the first step towards audio excellence.</p>
            </div>
          </div>
          <div class="right">
            <form class="po-footer-form" id="po_footer_form">
              <input placeholder="your email" :value="email" type="email" @change="onChangeEmail" required />
              <input placeholder="rss feed url" :value="rss" type="url" @change="onChangeRss" required />
              <button type="submit" @click="onSignUp" :disabled="isLoading">Sign up now</button>
              <p>By signing up you agree to our <a href="/terms" target="_blank">Terms and conditions</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .po-footer {
    padding-top: 0px;
    padding-bottom: 50px;
    
    .po-footer-inner {
      max-width: 1260px;
      margin-left: auto;
      margin-right: auto;
      padding: 0px 30px;

      .inner-content-wrapper {
        background: #AAA7FF;
        border-radius: 30px;

        .inner-content {
          max-width: 700px;
          padding-top: 50px;
          padding-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between;
          * {
            color: black;
          }

          .left {
            max-width: 270px;
            .title h2 {
              font-size: 32px;
              line-height: 34px;
              margin-bottom: 10px;
            }
            .content p {
              font-size: 14px;
              line-height: 18px;
            }
          }
          .right {
            max-width: 282px;

            .po-footer-form {
              input {
                width: 100%;
                max-width: 242px;
                height: 32px;
                border-radius: 8px;
                padding: 7px 12px;
                line-height: 18px;
                font-size: 14px;
                margin-bottom: 4px;
                background: white;
                border: none;
              }
              button {
                color: white;
                line-height: 18px;
                font-size: 14px;
                background: #101010;
                padding: 7px 12px;
                margin-bottom: 4px;
                border-radius: 30px;
                cursor: pointer;
              }
              p {
                line-height: 22px;
                font-size: 12px;
                a {
                  color: white;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 991px) {
    .po-footer .po-footer-inner .inner-content-wrapper .inner-content {
      max-width: 600px;
    }
  }

  @media (max-width: 767px) {
    .po-footer .po-footer-inner {
      padding: 0px 15px;
    }
    .po-footer .po-footer-inner .inner-content-wrapper .inner-content {
      flex-direction: column;
      max-width: 270px;
      padding-top: 30px;
      padding-bottom: 30px;
    }
    .po-footer .po-footer-inner .inner-content-wrapper .inner-content .left,
    .po-footer .po-footer-inner .inner-content-wrapper .inner-content .right {
      width: 100%;
      max-width: 100%;
    }
    .po-footer .po-footer-inner .inner-content-wrapper .inner-content .right {
      margin-top: 30px;
    }
    .po-footer .po-footer-inner .inner-content-wrapper .inner-content .right .po-footer-form p {
      padding-right: 120px;
    }
  }
</style>