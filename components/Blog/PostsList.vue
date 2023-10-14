<template>
  <section v-if="posts.length">
    <BlogPostCard
      v-for="post in posts.slice(0, 1)"
      :key="post.title"
      :post="post"
    />
  </section>
  <section v-else>No posts yet</section>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces";

const posts: Post[] = [];
</script>
