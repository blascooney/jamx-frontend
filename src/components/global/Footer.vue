<script setup lang="ts">
import ILogo from "../../assets/svg/yellow-logo.vue";
import ILinkedin from "@/assets/svg/icon-linkedin.vue";
import { onMounted, ref } from "vue";
const isOpenDropDownMenu = ref(false);
const browserWidth = ref(1440);

onMounted(() => {
  browserWidth.value = window.innerWidth;
  if (browserWidth.value < 768) {
    isOpenDropDownMenu.value = true;
  }
  window.addEventListener("resize", () => {
    browserWidth.value = window.innerWidth;
    if (browserWidth.value < 768) {
      isOpenDropDownMenu.value = true;
    }
  });
});


const toggleDropdown = () => {
  if (browserWidth.value < 768) return;
  isOpenDropDownMenu.value = !isOpenDropDownMenu.value;
}

const onClickLink = () => {
  isOpenDropDownMenu.value = false;
}

</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo-wrapper">
        <router-link to="/"><ILogo /></router-link>
      </div>
      <div class="nav-wrapper">
        <div class="nav-column-wrapper">
          <div class="top-nav-wrapper">
            <nav class="nav">
              <router-link class="nav-item-link" to="/podcasters" @click="onClickLink">Podcasters</router-link>
            </nav>
          </div>
          <div class="top-nav-wrapper">
            <nav class="nav">
              <router-link class="nav-item-link" to="/publishers" @click="onClickLink">Publishers</router-link>
            </nav>
          </div>
        </div>
        <div class="nav-column-wrapper">
          <div class="top-nav-wrapper">
            <nav class="nav">
              <router-link class="nav-item-link" to="/solutions"
                >Soultions</router-link
              >
            </nav>
          </div>
        </div>
        <div class="nav-column-wrapper">
          <div class="top-nav-wrapper">
            <nav class="nav">
              <router-link class="nav-item-link" to="/contact"
                >CONTACT</router-link
              >
            </nav>
          </div>
          <div class="bottom-nav-wrapper contact-us">
            <nav class="nav">
              <router-link class="nav-item-link" to="/contact">
                Contact Us
              </router-link>
              <a
                class="nav-item-link linkedin"
                target="_blank"
                href="https://www.linkedin.com/company/jamx/"
              >
                <ILinkedin />
              </a>
            </nav>
          </div>
        </div>
        <div class="nav-column-wrapper">
          <div class="top-nav-wrapper">
            <nav class="nav">
              <router-link class="nav-item-link" to="/#">Legal</router-link>
            </nav>
          </div>
          <div class="bottom-nav-wrapper">
            <nav class="nav">
              <a
                class="nav-item-link"
                target="_blank"
                href="https://www.termsofusegenerator.net/live.php?token=5otkGvL3fJPinQlEIo5VLpak6XkBwaDd"
                >Terms & Conditions</a
              >
              <a
                class="nav-item-link"
                target="_blank"
                href="/privacy-policty"
                >Privacy Policy</a
              >
              <a
                class="nav-item-link"
                target="_blank"
                href="/ccpa-notice"
                >CCPA</a
              >
              <a
                class="nav-item-link"
                target="_blank"
                href="https://cdn.jamx.ai/dsr.pdf"
                download="dsr.pdf"
                >DSR</a
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 20px var(--page-padding) var(--page-padding) var(--page-padding);

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-wrapper {
      height: 124px;
      padding: 0px 42px;
      border-radius: 20px;
      background: #1d1d1b;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .nav-wrapper {
      margin-left: 20px;
      width: 100%;
      padding: 26px 40px;
      border-radius: 20px;
      background: #1d1d1b;
      height: 124px;
      display: flex;

      .nav-column-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 118px;

        &:last-child {
          padding-right: 0px;
        }

        .top-nav-wrapper {
          .nav {
            display: flex;

            .nav-item-link {
              color: var(--lavender-color-400);
              font-size: 14px;
              font-weight: 600;
              line-height: 24px;
              letter-spacing: 0.5px;
              text-transform: uppercase;

              &:hover {
                color: var(--lavender-color-500);
              }

              margin-right: 24px;
              &:last-child {
                margin-right: 0px;
              }
            }
          }
        }

        .bottom-nav-wrapper {
          .nav {
            display: flex;

            .nav-item-link {
              display: block;
              color: #fff;
              font-family: Figtree;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px;
              margin-right: 24px;
              &:last-child {
                margin-right: 0px;
              }
              &.linkedin {
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                background: var(--primary-color-royal-blue, #495af3);
                margin-right: 0px;
              }
            }
          }
        }

        .dropdown {
          position: relative;
          .dropdown-toggle.header-nav-item {
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            color: var(--lavender-color-400);
            &:hover {
              color: var(--lavender-color-500);
            }
          }
          .dropdown-menu {
            position: absolute;
            left: 0px;
            bottom: calc(100%);
            display: flex;
            flex-direction: column;
            background: #1F1F1F;
            padding: 5px 20px 5px 10px;
            z-index: 1;
            .nav-item-link {
              color: white;
              padding: 5px;
              &:hover {
                color: var(--lavender-color-500);
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1600px) {
  .footer .footer-content .nav-wrapper .nav-column-wrapper {
    padding-right: 50px;
  }
}

@media (max-width: 1299px) {
  .footer .footer-content {
    display: block;
  }
  .footer .footer-content .nav-wrapper {
    padding: 25px 40px;
    margin-left: 0px;
    margin-top: 20px;
  }
  .footer .footer-content .nav-wrapper .nav-column-wrapper {
    padding-right: 50px;
  }
}

@media (max-width: 1200px) {
  .footer .footer-content .nav-wrapper .nav-column-wrapper {
    padding-right: 30px;
  }
}

@media (max-width: 991px) {
  .footer .footer-content .nav-wrapper {
    height: auto;
    display: block;
    .nav-column-wrapper {
      .nav {
        margin-top: 15px;
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding-bottom: 250px;
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper {
    padding-right: 0px;
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper .bottom-nav-wrapper {
    padding-left: 15px;
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper .bottom-nav-wrapper.contact-us .nav {
    display: flex;
    align-items: center;
    .nav-item-link {
      margin-bottom: 0px;
    }
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper .nav .dropdown .dropdown-toggle.header-nav-item {
    padding: 6px;
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper .nav .dropdown {
    margin-bottom: 12px;
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper .nav .dropdown .dropdown-menu {
    position: initial;
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper .nav .dropdown .dropdown-menu a {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 300;
  }

  .footer .footer-content .nav-wrapper .nav-column-wrapper .nav .nav-item-link {
    padding: 6px;
  }

  .footer
    .footer-content
    .nav-wrapper
    .nav-column-wrapper
    .bottom-nav-wrapper
    .nav {
    display: block;
    .nav-item-link {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  .footer .footer-content {
    padding: 42px;
    background: var(--dark-color-200);
    border-radius: 30px;
  }

  .footer .footer-content .logo-wrapper {
    padding: 0px;
    height: auto;
    margin-top: 0px;
    border-radius: 0px;
    background: transparent;
  }

  .footer .footer-content .nav-wrapper {
    padding: 0px;
    background: transparent;
    border-radius: 0px;
  }
}
</style>