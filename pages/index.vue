<template>
  <div class="homeheader">
    <img src="/wojak.webp" alt="Image: wojak!" style="width: 80px" />
    <div>
      <div>Hello there :)</div>
      <div>I'm Mungai, and I build cool music stuff!</div>
    </div>
  </div>
  <Projects />
  <h2>Blog posts</h2>
  <BlogPostsList :on_homepage="true" />
  <AboutMe />
</template>

<script setup lang="ts">
useHead({
  title: "Home | Mungai",
});
</script>

<style lang="scss">
.homeheader {
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
