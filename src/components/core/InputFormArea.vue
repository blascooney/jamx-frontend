<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const { fieldName, placeHolder, modelValue, required } = defineProps({
  fieldName: { type: String },
  placeHolder: { default: "", type: String },
  modelValue: { default: "", type: String },
  required: { default: false, type: Boolean },
});

const onChange = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="input-form-area">
    <div class="input-form-field-wrapper">
      <div class="label">
        <p>{{ fieldName }}</p>
      </div>
      <div class="input">
        <textarea
          @input="onChange"
          :value="modelValue"
          :placeholder="placeHolder"
          :required="required"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-form-area {
  .label {
    padding: 0px 6px;
    p {
      color: #fff;
      font-size: 27px;
      font-weight: 400;
      line-height: 38px;
      margin-bottom: 25px;
      font-family: Figtree;
    }
  }
  .input {
    textarea {
      color: #fff;
      font-size: 27px;
      font-weight: 400;
      line-height: 24px;
      padding: 16px 32px;
      border-radius: 8px;
      width: 100%;
      background: #272724;
      border: none;
      outline: none;
      font-family: Figtree;
      height: 240px;
    }
  }
}

@media (max-width: 767px) {
  .input-form-field .label p {
    margin-left: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
  }

  .input-form-field .input textarea {
    border-radius: 10px;
    font-size: 24px;
  }
}
</style>