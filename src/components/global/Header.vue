<script setup lang="ts">
import ILogo from "@/assets/svg/logo.vue";
import IMobileLogo from "@/assets/svg/mobile-logo.vue";
import CoreButton from "@/components/core/Button.vue";
import { useRouter } from "vue-router";
import IMenuBar from "@/assets/svg/white-menu-bar.vue";
import IMobileMenuclose from "@/assets/svg/mobile-menu-close.vue";
import SignUpButton from "@/components/global/SignUpButton.vue";
import { onMounted, ref } from "vue";

const router = useRouter();
const mobileMenuVisiable = ref(false);
const browserWidth = ref(1440);

onMounted(() => {
  browserWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    browserWidth.value = window.innerWidth;
  });
});

const onMenuToogle = () => {
  mobileMenuVisiable.value = !mobileMenuVisiable.value;

  const bodyElement = document.getElementsByTagName("body")[0];
  let oldclasses = bodyElement.getAttribute("class");

  if (mobileMenuVisiable.value) {
    bodyElement.setAttribute("class", `${oldclasses ?? ""} scroll-disabled`);
  } else {
    let newclasses = (oldclasses ?? "").replace("scroll-disabled", "");
    bodyElement.setAttribute("class", newclasses);
  }
};

const onClickLink = () => {
  onMenuToogle();
};

const goToLogin = () => {
  onMenuToogle();
  window.open("https://platform.jamx.ai");
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-wrapper">
        <router-link
          to="/"
          class="logo-link"
          :class="{ onMobileToogle: mobileMenuVisiable }"
        >
          <ILogo
            class="hide lg-block xl-block xxl-block xxl-block xxxl-block"
          />
          <IMobileLogo class="hide xs-block sm-block md-block" />
        </router-link>
      </div>
      <div class="mobile-menu-toogle hide xs-block sm-block md-block">
        <a href="javascript:;" @click="onMenuToogle"><IMenuBar /></a>
      </div>
      <nav class="nav desktop-nav hide lg-flex xl-flex xxl-flex xxxl-flex">
        <div class="mobile-nav-menu-right-var">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
        <router-link class="header-link" to="/podcasters" @click="onClickLink">
          Podcasters
        </router-link>
        <router-link class="header-link" to="/publishers" @click="onClickLink">
          Publishers
        </router-link>
        <router-link class="header-link" to="/solutions" @click="onClickLink">
          Solutions
        </router-link>
        <router-link class="header-link" to="/contact" @click="onClickLink">
          contact us
        </router-link>
        <router-link class="header-link btn-login" to="#" @click="goToLogin">
          LOG IN
        </router-link>
        <SignUpButton title="SIGN UP" :onMenuToogle="onMenuToogle" />
      </nav>
      <nav
        class="nav mobile-nav hide xs-block sm-block md-block"
        :class="{ open: mobileMenuVisiable }"
      >
        <div class="nav-content">
          <div class="left">
            <div class="mobile-nav-menu-right-var">
              <div class="top"></div>
              <div class="bottom"></div>
            </div>
          </div>
          <div class="right">
            <CoreButton
              class="btn-mobile-menu-close"
              @click="
                () => {
                  onMenuToogle();
                }
              "
            >
              <IMobileMenuclose />
            </CoreButton>

            <SignUpButton title="SIGN UP" :onMenuToogle="onMenuToogle" />

            <router-link
              class="header-link btn-login"
              to="#"
              @click="goToLogin"
            >
              LOG IN
            </router-link>
            
            <router-link 
              class="header-link" 
              to="/podcasters" 
              @click="onClickLink"
            >
             Podcasters
            </router-link>
            <router-link 
              class="header-link" 
              to="/publishers" 
              @click="onClickLink"
            >
              Publishers
            </router-link>
            <router-link
              class="header-link"
              to="/solutions"
              @click="onClickLink"
            >
              Solutions
            </router-link>
            <router-link class="header-link" to="/contact" @click="onClickLink">
              Contact us
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
body.scroll-disabled {
  overflow: hidden !important;
}

.header {
  background: #000;
  padding: 25px var(--page-padding);

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-wrapper {
      width: 122px;
      height: 30px;
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
      }
    }

    .nav {
      display: flex;
      align-items: center;

      .header-link {
        text-transform: capitalize;
        font-weight: 600;
        padding: 4px 10px;
        margin-right: 70px;
        font-size: 20px;
        cursor: pointer;

        color: #fff;
        font-family: Poppins;
        line-height: 32px;
        font-weight: 400;

        &.router-link-active {
          color: #D9FF3F;
        }

        &.btn-login {
          margin-right: 0px;
          background: transparent;
          padding: 9px 68px;
          margin-right: 20px;
          font-weight: 600;
          line-height: 32px;
          color: #d9ff3f;
          font-size: 16px;
        }

        &.btn-signup {
          margin-right: 0px;
          background: #d9ff3f;
          padding: 9px 68px;

          & span {
            font-weight: 600;
            line-height: 32px;
            color: #333;
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media (max-width: 1439px) {
  .header .header-content .nav .header-link {
    margin-right: 30px;
  }
}

@media (max-width: 1299px) {
  .header .header-content .nav .header-link.btn-login,
  .header .header-content .nav .header-link.btn-signup {
    padding: 6px 30px;
  }
  .header .header-content .nav .header-link {
    margin-right: 30px;
  }
}

@media (max-width: 1100px) {
  .header .header-content .nav .header-link {
    font-size: 14px;
  }
}

@media (max-width: 991px) {
  .header .header-content .nav .header-link {
    font-size: 14px;
  }
  .header .header-content .nav .header-link {
    margin-right: 5px;
  }
  .header .header-content .nav .header-link.btn-login,
  .header .header-content .nav .header-link.btn-signup {
    padding: 6px;
  }
}

@media (max-width: 767px) {
  .header {
    position: fixed;
    width: 100%;
    background: #000;
    z-index: 10;
    padding: 30px var(--page-padding);
    top: 0px;
  }

  .header .header-content .nav .header-link.btn-signup {
    padding: 9px 68px;
  }

  .header .header-content .nav .header-link.btn-login {
    padding: 4px 10px;
    color: #d9ff3f !important;
  }

  .header .header-content .nav {
    padding: 0px !important;

    .nav-content {
      padding: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      
      .left {
        width: 96px;
        height: 100%;
        .top {
          width: 100%;
          height: 100px;
          background: #000;
        }
        .bottom {
          width: 100%;
          height: calc(100% - 100px);
          background: var(--dark-color-100);
        }
      }

      .right {
        width: 100%;
        display: block !important;
        padding-top: 130px;
        padding-left: 30px;
        position: relative;

        .btn-mobile-menu-close {
          position: absolute;
          top: 29px;
          right: 29px;
          background: transparent;
          width: 32px;
          height: 32px;
          padding: 0px !important;
          z-index: 12;

          > span {
            width: 100%;
            height: 100%;
            display: block;
          }
        }

        .header-link {
          display: flex !important;
          margin-bottom: 30px;
          font-weight: 600;
          font-size: 18px;
          color: #000;
        }
      }
    }
  }

  .header .header-content .nav.open {
    width: 100%;
    transition: all 0.5s ease-in-out;
    padding-left: var(--page-padding);
    padding-right: var(--page-padding);
  }

  .header .header-content .nav {
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    position: fixed;
    height: 100vh;
    width: 0px;
    background: #aaa7ff;
    display: flex;
    flex-direction: column;
    align-items: start;
    right: 0;
    top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: var(--page-padding);
    z-index: 11;
  }

  .header .header-content .logo-wrapper a.onMobileToogle {
    position: fixed;
    z-index: 12;
    left: var(--page-padding);
    top: 31px;
  }

  .header .header-content .nav .mobile-nav-menu-right-var {
    background: #000;
    width: 96px;
    height: 100%;
  }
}

@media (max-width: 576px) {
}
</style>