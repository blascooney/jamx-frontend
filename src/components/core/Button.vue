<script setup lang="ts">
const { isBlack, isGreen, isYellow, isLavender, isPink, loading } =
  defineProps<{
    isGreen?: boolean;
    isYellow?: boolean;
    isLavender?: boolean;
    isPink?: boolean;
    isBlack?: boolean;
    loading?: boolean;
    active?: boolean;
    disabled?: boolean;
  }>();
</script>

<template>
  <button
    class="button"
    :class="{
      black: isBlack,
      green: isGreen,
      yellow: isYellow,
      pink: isPink,
      lavender: isLavender,
      loading,
      active,
    }"
    :disabled="disabled"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@import "../../assets/styles/mixins.scss";
.button {
  @include core-button;
  &:disabled {
    background: gray !important;
    * {
      background: gray !important;
    }
    &::after {
      display: none;
    }
  }
}
</style>
