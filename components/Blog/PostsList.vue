<template>
  <div class="postlist">
    ❝I don't know what I think until I read what I write❞
    <ul>
      <li v-for="post in posts" :key="post.link">
        <nuxt-link :to="`${post.link}`">{{ post.title }}</nuxt-link>
        <span class="date" v-if="post.date"> - {{ post.date }} </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import posts from "~~/posts";
</script>

<style lang="scss">
.postlist {
  a {
    text-decoration: none;
  }
  ul {
    padding: 0;
  }

  li {
    list-style: none;
    padding: 0.5rem 0;
    border-top: solid 1px rgba(128, 128, 128, 0.466);
  }

  li:last-child {
    border-bottom: solid 1px rgba(128, 128, 128, 0.466);
  }

  .date {
    font-size: 0.9rem;
    color: #999;
  }
}
</style>
