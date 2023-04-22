<template>
  <div class="postcard">
    <NuxtImg :src="post.image"></NuxtImg>
    <div class="info">
      <p class="title">{{ post.title }}</p>
      <p class="date">{{ post.date }}</p>

      <div class="buttons">
        <a class="btn btn-primary" :href="post.link" target="_blank"
          >Read on {{ post.source }}</a
        >
      </div>
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
  background: linear-gradient(
    36deg,
    rgba(81, 202, 250, 0.068),
    rgba(0, 153, 255, 0.048),
    rgba(0, 89, 255, 0.185)
  );
  padding: 2rem !important;
  border-radius: 1rem !important;

  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;

  &:hover {
    outline: solid $blue;
  }

  p {
    line-height: 1.45;
  }

  .title {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .date {
    opacity: 0.75;
  }

  img {
    height: 15rem;
    border-radius: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
  }
}
</style>
