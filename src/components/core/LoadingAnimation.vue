<script setup lang="ts">
const { isLoading } = defineProps<{
  isLoading: boolean;
}>();
</script>

<template>
  <div class="loading-animation" :class="{ loading: isLoading }">
    <div class="loader">
      <span></span>
    </div>
  </div>
</template>

<style>
.loading-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  width: 100%;
  z-index: 99999999;
  background: white;
}

.loading-animation:not(.loading) {
  display: none;
}

.loader {
  position: relative;
  width: 100px;
  height: 100px;
}

.loader span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #3498db;
  transform-origin: center center;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
