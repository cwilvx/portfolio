<template>
  <div class="postlist">
    <ul v-if="articles.length">
      <li
        v-for="post in articles
          .concat(is_journal ? [] : others)
          .splice(
            0,
            on_homepage ? list_limit : articles.length + others.length
          )"
        :key="post.link"
      >
        <nuxt-link
          :to="post._path"
          :target="`${(post._path as string).startsWith('http') ? '_blank' : ''}`"
          >{{ post.title }}
          {{ (post._path as string).startsWith("http") ? "↗" : "" }}</nuxt-link
        >
        <span class="date" v-if="post.date">
          - {{ formatDate(post.date) }}
        </span>
      </li>
    </ul>
    <div v-else>
      Nothing here!, maybe check out
      <NuxtLink to="/blog/journal">my open-journal</NuxtLink>.
    </div>

    <RouterLink
      to="/blog"
      class="see-all"
      v-if="on_homepage && articles.length + others.length > list_limit"
      >See all posts ↗</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import { formatDate } from "~/utils";
const list_limit = 4;

const props = defineProps<{
  on_homepage?: boolean;
  is_journal?: boolean;
}>();

const others = [
  {
    title: "User registration in Django using Google OAuth | Section",
    date: "2020-12-18",
    _path:
      "https://web.archive.org/web/20210120093451/https://www.section.io/engineering-education/django-google-oauth/",
  },
  {
    title: "Building a Blog site from scratch using Jekyll | Section",
    date: "2020-10-01",
    _path:
      "https://web.archive.org/web/20210120093451/https://www.section.io/engineering-education/build-a-jekyll-site/",
    type: "blog",
  },
  {
    title: "Debugging a Node.js app running in Docker | Section",
    date: "2020-09-11",
    _path:
      "https://web.archive.org/web/20210120110316/https://www.section.io/engineering-education/debug-node-docker/",
  },
  {
    title: "All Section articles",
    _path:
      "https://web.archive.org/web/20210120093451/https://www.section.io/engineering-education/authors/geoffrey-mungai/",
    date: "2020-12-18",
  },
];

const journal_filter = props.is_journal
  ? { type: "journal" }
  : {
      type: "blog",
    };

const articles = await queryContent()
  .where({ ...journal_filter, _draft: false })
  .only(["title", "_path", "date"])
  .limit(props.on_homepage ? list_limit : 100)
  .sort({ date: -1 })
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
