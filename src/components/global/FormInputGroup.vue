<script setup lang="ts">
const props = defineProps({
  label: String,
  value: String,
	setValue: Function,
  placeHolder: String,
  type: String,
  name: String,
  required: Boolean,
});
</script>

<template>
  <div class="form-input-group">
    <label>{{ props.label }}</label>
    <input :type="props.type" :name="name" :value="value" @change="props.setValue" :placeholder="props.placeHolder" :required="props.required ?? false" />
  </div>
</template>

<style lang="scss">
  .form-input-group {
    margin-bottom: 30px;
    width: 100%;
    position: relative;
    border-radius: 12px;
    border: 1px solid #3F3F3F;
    label {
      position: absolute;
      font-size: 16px;
      background: unset;
      padding: 0px 3px;
      left: 12px;
      top: -19px;
    }
    input {
      width: 100%;
      padding: 15px;
      border: none !important;
      outline: none !important;
      color: white;
      font-size: 16px;
    }
  }
</style>