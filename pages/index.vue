<template>
  <div>
    <div>Hello there 👋</div>
    <div>I'm Mungai ... and I build cool stuff! ... sometimes :)</div>
  </div>
  <Projects />
  <h2>Blog posts</h2>
  <ul class="blog-list">
    <li v-for="post in posts" :key="post.title" class="blog">
      <NuxtLink :to="post.link">{{ post.title }} </NuxtLink>
      <span> - {{ post.date }}</span>
    </li>
  </ul>
  <AboutMe />
</template>

<script setup lang="ts">
import posts from "@/posts";
useHead({
  title: "Home | Mungai",
});
</script>

<style lang="scss">
.blog-list {
  padding: 0;

  a {
    text-decoration: none;
  }

  span {
    font-size: 14px;
    color: #999;
  }

  li {
    list-style: none;
    padding: 0.5rem 0;
  }
}
</style>
