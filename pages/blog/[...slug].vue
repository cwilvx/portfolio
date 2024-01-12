<template>
  <article>
    <i style="font-size: 1rem">Published: {{ currentTitle.date }} - by: @cwilvx</i>
    <h1 style="font-size: 2.25rem">
      <WrapBalancer>{{ currentTitle.title }}</WrapBalancer>
    </h1>
    <hr
      style="border: none; border-top: solid 1px rgba(128, 128, 128, 0.144)"
    />
    <ContentDoc />
  </article>
</template>

<script setup lang="ts">
import WrapBalancer from "vue-wrap-balancer";
const currentPath = useRoute().path;
const currentTitle = await queryContent(currentPath)
  .only(["title", "date"])
  .findOne();
</script>
