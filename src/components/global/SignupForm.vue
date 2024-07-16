<script setup lang="ts">
import FormInputGroup from "@/components/global/FormInputGroup.vue";
import CoreButton from "@/components/core/Button.vue";
import { ref } from "vue";
// @ts-ignore
import { podcastersSignup } from "@/helpers/global";

const props = defineProps({
  onSubmitEnd: Function,
});

const name = ref<string>("");
const email = ref<string>("");
const rssUrl = ref<string>("");
const isLoading = ref<boolean>(false);

const onChangeName = (e: any) => {
	name.value = e.target.value;
}

const onChangeEmail = (e: any) => {
	email.value = e.target.value;
}

const onChangeRssUrl = (e: any) => {
	rssUrl.value = e.target.value;
}

const onSubmit = async (e: any) => {
  const form = document.getElementById("signup_form");
  if (form instanceof HTMLFormElement && form.checkValidity()) {
    e.preventDefault();
    isLoading.value = true;
		await podcastersSignup(name.value, email.value, rssUrl.value, props.onSubmitEnd);
    isLoading.value = false;
  }
}

</script>

<template>
  <form id="signup_form" >
    <FormInputGroup type="text" label="Name" placeHolder="Enter your name" :value="name" :setValue="onChangeName" :required="true" />
    <FormInputGroup type="email" label="Email" placeHolder="example@gmail.com" :value="email" :setValue="onChangeEmail" :required="true" />
    <FormInputGroup type="url" label="RSS URL" placeHolder="Enter URL here" :value="rssUrl" :setValue="onChangeRssUrl" :required="true" />
    <CoreButton
      class="btn-sign-up text-center"
      :is-yellow="true"
      :disabled="isLoading"
      @click="onSubmit"
      >SIGN UP
      <slot />
    </CoreButton>
    <p class="desc">By signing up you agree to our <a href="/terms" target="_blank">terms and conditions</a>.</p>
  </form>
</template>

<style lang="scss">
#signup_form {
	.btn-sign-up {
		width: 100%;
		height: 48px;
		margin-top: 50px;
		margin-bottom: 10px;
	}
	p.desc {
		font-size: 14px;
		line-height: 150%;
		a {
			color: #BBD945;
			:hover {
				color: #fad039;
			}
		}
	}
}

</style>