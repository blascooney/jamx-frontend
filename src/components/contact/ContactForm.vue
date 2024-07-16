<script setup lang="ts">
import InputFormField from "@/components/core/InputFormField.vue";
import InputFormArea from "@/components/core/InputFormArea.vue";
import CoreButton from "@/components/core/Button.vue";
import { contactUs } from "@/helpers/global";
import { ref } from "vue";

const fullName = ref("");
const email = ref("");
const message = ref("");

const onSubmit = async (e: any) => {
  const form = document.getElementById("contact_form");
  if (form instanceof HTMLFormElement && form.checkValidity()) {
    e.preventDefault();
    await contactUs(fullName.value, email.value, message.value);
  }
};
</script>

<template>
  <div class="contact-form">
    <form action="#" id="contact_form">
      <div class="form-inner">
        <div class="form-input-wrapper flex-space-between xs-block sm-block">
          <div class="left">
            <InputFormField
              class="input-name"
              field-name="Full Name"
              :model-value="fullName"
              @update:modelValue="(newValue) => (fullName = newValue)"
              :required="true"
            />
            <InputFormField
              class="input-email"
              field-name="Email Address "
              :model-value="email"
              @update:modelValue="(newValue) => (email = newValue)"
              :required="true"
              type="email"
            />
          </div>
          <div class="right">
            <InputFormArea
              field-name="Message"
              :model-value="message"
              @update:modelValue="(newValue) => (message = newValue)"
              :required="true"
            />
          </div>
        </div>
        <div class="action flex-center">
          <CoreButton class="btn-send" :is-yellow="true" @click="onSubmit"
            >SEND
          </CoreButton>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.contact-form {
  .form-inner {
    .left {
      width: calc(50% - 61px);
      .input-email {
        margin-top: 16px;
      }
    }

    .right {
      width: calc(50% - 61px);
    }

    .action {
      margin-top: 96px;

      .btn-send {
        width: 360px;
        height: 70px;
        border-radius: 45px;
      }
    }
  }
}

@media (max-width: 991px) {
  .contact-form .form-inner .left {
    width: calc(50% - 15px);
  }

  .contact-form .form-inner .right {
    width: calc(50% - 15px);
  }
}

@media (max-width: 767px) {
  .contact-form .form-inner .left {
    width: 100%;
  }
  .contact-form .form-inner .left .input-email {
    margin-top: 12px;
  }

  .contact-form .form-inner .right {
    margin-top: 12px;
    width: 100%;
  }

  .contact-form .form-inner .action {
    margin-top: 44px;
  }
}
</style>