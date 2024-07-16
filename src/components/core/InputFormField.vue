<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const { fieldName, placeHolder, modelValue, required, type } = defineProps({
  fieldName: { type: String },
  placeHolder: { default: "", type: String },
  modelValue: { default: "", type: String },
  type: { default: "text", type: String },
  required: { default: false, type: Boolean },
});

const onChange = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="input-form-field">
    <div class="input-form-field-wrapper">
      <div class="label">
        <p>{{ fieldName }}</p>
      </div>
      <div class="input">
        <input
          :type="type"
          :value="modelValue"
          @input="onChange"
          :placeholder="placeHolder"
          :required="required"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-form-field {
  .label {
    padding: 0px 6px;
    p {
      color: #fff;
      font-size: 27px;
      font-family: Figtree;
      font-weight: 400;
      line-height: 38px;
      margin-bottom: 25px;
    }
  }
  .input {
    input {
      color: #fff;
      font-size: 27px;
      font-weight: 400;
      line-height: 24px;
      padding: 16px 32px;
      border-radius: 20px;
      font-family: Figtree;
      width: 100%;
      height: 80px;
      background: #272724;
      border: none;
      outline: none;
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

  .input-form-field .input input {
    border-radius: 10px;
    font-size: 24px;
    height: 60px;
  }
}
</style>