<template>
  <div class="postcard">
    <div class="info">
      <a class="title" :href="post.link">{{ post.title }} </a>
      <div class="date">- {{ post.date }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces";

defineProps<{
  post: Post;
}>();
</script>

<style lang="scss">
@import "../../styles/index.scss";

.postcard {
  border-radius: 1rem !important;

  .title {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .date {
    opacity: 0.75;
  }
}
</style>
