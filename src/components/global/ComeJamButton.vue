<script setup lang="ts">
import { useRouter } from "vue-router";
import CoreButton from "@/components/core/Button.vue";
const router = useRouter();
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  onClick: Function,
});
</script>

<template>
  <CoreButton
    class="btn-come text-center"
    :is-yellow="true"
    @click="() => props.onClick ? props.onClick() : router.push('/contact')"
    >{{ props.title ?? 'COME JAM WITH US' }}
    <slot />
  </CoreButton>
</template>

<style scoped>
.btn-come {
  width: 278px;
}
</style>