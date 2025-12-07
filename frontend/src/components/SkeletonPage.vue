<template>
  <div class="skeleton-page">
    <!-- Skeleton Header -->
    <Skeleton width="30%" height="24px" class="mb-4" />

    <!-- Skeleton List -->
    <div v-for="i in items" :key="i" class="skeleton-item mb-4">
      <Skeleton height="100vh" class="mb-2" />
      <Skeleton width="70%" height="14px" />
    </div>
  </div>
</template>

<script setup>
import Skeleton from './Skeleton.vue'

defineProps({
  type: { type: String, default: "list" },
  items: { type: Number, default: 1 } 
})
</script>

<style scoped>
.skeleton-page {
  padding: 20px;
}
.skeleton-item {
  padding: 15px;
  border-radius: 10px;
  background: #17154f;
  position: fixed;
  height: 100%;
  width: 100%;
  top:0;
  right:0;
  z-index: 9999;
}
.mb-2 { margin-bottom: 8px; }
.mb-4 { margin-bottom: 16px; }
</style>
