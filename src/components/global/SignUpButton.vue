<script setup lang="ts">
import { useRouter } from "vue-router";
import CoreButton from "@/components/core/Button.vue";
import SignupModal from "@/components/global/SignupModal.vue"
import { ref, defineProps } from 'vue';
const router = useRouter();

const showDropdown = ref(false);
const modalOpen = ref(false);
const translateY = ref(0);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const hideDropDown = () => {
  showDropdown.value = false;
}

const props = defineProps({
  title: String,
  onMenuToogle: Function,
});

const getTranslationY = () => {
  var element = document.querySelector('#custom_scroll_container > div');
  if (!element) return 0;

  var transform = window.getComputedStyle(element).getPropertyValue('transform');
  var translateY = 0;

  if (transform && transform !== 'none') {
    var matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix && matrix[1]) {
      var matrixValues = matrix[1].split(',');
      if (matrixValues.length >= 6) {
        translateY = parseFloat(matrixValues[5]);
      }
    }
  }

  return translateY;
}

const gotoContactForm = () => {
  showDropdown.value = false;
  props.onMenuToogle && props.onMenuToogle();
  router.push("/contact-form");
};

const gotoPodcastersSignup = () => {
  props.onMenuToogle && props.onMenuToogle();
  showDropdown.value = false;
  modalOpen.value = true;
  translateY.value = getTranslationY();
}
</script>

<template>
  <div class="dropdown">
    <CoreButton
      class="header-link btn-signup"
      :is-yellow="true"
      @click="toggleDropdown"
    >
      {{ props.title ??  'SIGN UP'}}
    </CoreButton>
    <ul class="dropdown-menu" v-if="showDropdown" v-click-outside="hideDropDown">
      <li><span class="dropdown-item" @click="gotoContactForm">Publishers</span></li>
      <li><span class="dropdown-item" @click="gotoPodcastersSignup">Podcasters</span></li>
    </ul>
    <SignupModal :open="modalOpen" :onClose="() => modalOpen = false" :translateY="-translateY" />
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  .dropdown-menu {
    position: absolute;
    top: calc(100% + 5px);
    width: 100%;
    border-radius: 6px;
    z-index: 1;
    background-color: #131313;
    min-width: 160px;
    box-shadow: 0 4px 4px 0 rgba(40, 40, 40, 0.3);
    padding: 10px 16px;
    li {
      span {
        cursor: pointer;
        color: white;
        &:hover {
          color: #D9FF3F;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .dropdown .dropdown-menu {
    top: calc(100% - 25px) !important;
  }
}
</style>