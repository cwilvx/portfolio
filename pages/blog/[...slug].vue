<template>
  <article>
    <div style="font-size: 1rem">
      Author: Mungai Njoroge &lt;geoffreymungai45@gmail.com&gt;
    </div>
    <div style="font-size: 1rem">Date: {{ formatDate(currentTitle.date) }}</div>

    <h2>{{ currentTitle.title }}</h2>
    <ContentDoc />
  </article>
</template>

<script setup lang="ts">
import { formatDate } from "~/utils";

const currentPath = useRoute().path;
const currentTitle = await queryContent(currentPath)
  .only(["title", "date"])
  .findOne();
</script>
