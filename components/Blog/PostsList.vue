<template>
  <div class="blogpostlist">
    <div class="heading-group">
      <section>
        <h1>Latest post</h1>
        <p>This is the most recent post that I have written.</p>
        <br>
        <BlogPostCard
          v-for="post in posts.slice(0, 1)"
          :key="post.title"
          :post="post"
        />
      </section>
      <br><br>
      <section v-if="posts.slice(1).length">
        <h1>Other posts</h1>
        <p>These ones ... not so fresh, but you might like them.</p>
        <BlogPostCard v-for="post in posts.slice(1)" :key="post.image" :post="post" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post, post_sources } from "~~/interfaces";

const posts: Post[] = [
  {
    title:
      "Features coming to SwingMusic v1.3.0 - Album versions and balanced album titles",
    image: "/chicago.png",
    source: post_sources.Notion,
    link: "https://rhetorical-othnielia-565.notion.site/Features-coming-to-SwingMusic-v1-3-0-Album-versions-and-balanced-album-titles-ddf11484ae7545afb634374bd6efd077",
    date: "22nd April, 2023",
  },
];
</script>

<style lang="scss">
.blogpostlist {
  display: grid;

  .heading-group {
    margin: 2rem 0;

    h1,
    p {
      margin: 0;
    }
  }
}
</style>
