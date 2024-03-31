<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div style="max-width: 20rem; margin: 10rem auto">
    <h1>{{ error?.statusCode }}</h1>
    <p>{{ error?.statusMessage }}</p>
    <button @click="handleError">Go Home</button>
  </div>
</template>
