<template>
  <div class="postlist">
    <div v-if="!on_homepage">
      <!-- ❝I don't know what I think until I read what I write❞
      <br /><br /> -->
    </div>
    <ul v-if="articles.length">
      <li v-for="post in articles" :key="post.link">
        <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
        <span class="date" v-if="post.date"> - {{ post.date }} </span>
      </li>
    </ul>
    <div v-else>
      Nothing here!, maybe check out 
      <NuxtLink to="/blog/journal">my open-journal</NuxtLink>.
    </div>
    <RouterLink to="/blog" v-if="on_homepage && articles.length > list_limit"
      >See all posts</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
const list_limit = 4;

const props = defineProps<{
  on_homepage?: boolean;
  is_journal?: boolean;
}>();

const journal_filter = props.is_journal
  ? { type: "journal" }
  : {
      type: "blog",
    };

const articles = await queryContent()
  .where({ ...journal_filter, _draft: false })
  .only(["title", "_path", "date"])
  .limit(props.on_homepage ? list_limit : 100)
  .find();
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
  }

  .date {
    font-size: 0.9rem;
    color: #999;
  }
}
</style>
