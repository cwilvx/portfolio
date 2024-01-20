<template>
  <article>

    <div style="font-size: 1rem">
      Author: @cwilvx &lt;geoffreymungai45@gmail.com&gt;
    </div>
    <div style="font-size: 1rem">Date: {{ currentTitle.date }}</div>

    <br />
    <div>{{ currentTitle.title }}</div>
    <hr
      style="border: none; border-top: solid 1px rgba(128, 128, 128, 0.144)"
    />
    <ContentDoc />
  </article>
</template>

<script setup lang="ts">
const currentPath = useRoute().path;
const currentTitle = await queryContent(currentPath)
  .only(["title", "date"])
  .findOne();
</script>
