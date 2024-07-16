<script setup lang="ts">
import IClose from "@/assets/svg/close.vue";
import FormInputGroup from "@/components/global/FormInputGroup.vue";
import CoreButton from "@/components/core/Button.vue";
import SignupForm from "@/components/global/SignupForm.vue";
import { ref } from "vue";
// @ts-ignore
import { podcastersSignup } from "@/helpers/global";

const props = defineProps({
  open: Boolean,
  onClose: Function,
	translateY: Number,
});

</script>

<template>
  <div :class="`advertisers-signup-modal ${ props.open ? 'open' : '' }`" :style="`transform: translateY(${props.translateY}px)`">
		<div class="advertisers-signup-modal-inner">
			<div class="modal-header">
				<div class="title">Join Jamx</div>
				<div class="btn-close" @click="props.onClose">
					<IClose />
				</div>
			</div>
			<div class="modal-content" :onSubmitEnd="props.onClose">
				<SignupForm />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.advertisers-signup-modal {
	display: none;
	&.open {
		display: block;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100vw;
		height: 100vh;
		z-index: 999;
		background: #00000050;
	}

	.advertisers-signup-modal-inner {
		background: #1D1D1B;
		width: 90%;
		max-width: 460px;
		border-radius: 24px;
		padding: 20px 30px;

		.modal-header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				font-weight: 600;
				font-size: 28px;
				line-height: 150%;
			}

			.btn-close {
				cursor: pointer;
				width: 30px;
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.modal-content {
			padding-top: 50px;
		}
	}
}
</style>