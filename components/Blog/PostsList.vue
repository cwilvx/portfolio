<template>
  <div class="postlist">
    <ul>
      <li v-for="post in data" :key="post.slug">
        <nuxt-link :to="`${post._path}`">{{ post.title }}</nuxt-link>
        <span class="date" v-if="post.date"> - {{ post.date }} </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() =>
  queryContent("/").only(["title", "date", "_path"]).find()
);
</script>

<style lang="scss">
.postlist {
  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 1rem;
  }

  .date {
    font-size: 0.9rem;
    color: #999;
  }
}
</style>
