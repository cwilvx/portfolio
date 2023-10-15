<template>
  <article>
    <h1>
      <WrapBalancer>{{ currentTitle.title }}</WrapBalancer>
    </h1>
    <ContentDoc />
  </article>
</template>

<script setup lang="ts">
import WrapBalancer from "vue-wrap-balancer";
const currentPath = useRoute().path;
const currentTitle = await queryContent(currentPath).only(["title"]).findOne();
</script>
