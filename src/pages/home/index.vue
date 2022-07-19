<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { Artist } from '@/utils/draw';
import { onMounted } from 'vue';

onMounted(() => {
  new Artist();
  console.log('打开');
});
</script>

<style scoped></style>
