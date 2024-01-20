<template>
  <div>
    <BlogPostsList :is_journal="true" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Journal | Mungai",
  meta: [{ name: "description", content: "This is me, thinking out loud!" }],
});
</script>

<style lang="scss"></style>
