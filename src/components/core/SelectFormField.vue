<script setup lang="ts">
import IArrowDown from "@/assets/images/arrow-down.png";
import type { OptionData } from "../../@types/core/global";
const emit = defineEmits(["update:modelValue"]);
const { fieldName, placeHolder, options, modelValue, type } = defineProps({
  fieldName: { type: String },
  options: Array<OptionData>,
  placeHolder: { default: "", type: String },
  modelValue: String,
  type: { default: "text", type: String },
});

const onChange = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="select-form-field">
    <div class="select-form-field-wrapper">
      <div class="label">
        <p>{{ fieldName }}</p>
      </div>
      <div class="select">
        <select
          :value="modelValue"
          @input="onChange"
          :class="{ placeHolder: modelValue == '' }"
          :style="{ 'background-image': 'url(' + IArrowDown + ')' }"
        >
          <option value="" disabled selected hidden>{{ placeHolder }}</option>
          <option
            v-for="(optionItem, index) in options"
            :value="optionItem.value"
            :key="index"
          >
            {{ optionItem.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select-form-field {
  .label {
    padding: 0px 6px;
    p {
      color: var(--secondary-500);
      font-family: Public Sans;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
  }
  .select {
    select {
      color: var(--type-gray);
      font-family: Public Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      padding: 10px 16px;
      border-radius: 8px;
      width: 100%;
      background: #fff;
      border: none;
      outline: none;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-position: calc(100% - 10px) center;
      box-sizing: border-box;
      background-repeat: no-repeat;

      &.placeholder {
        color: var(--type-gray);
      }
    }
  }
}
</style>