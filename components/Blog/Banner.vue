<template>
  <NuxtLink to="/" class="btn">← Go back</NuxtLink>
  <div class="blogbanner rounded">
    <h1>This is my blog</h1>
    <h3>
      I'm making an attempt to write down what I'm doing. Not like a Josh W
      Comeau kind of writting but a simple developer blog. I want to document
      what I'm currently working on and how it's taking me, all in an attempt to
      become a better writer and probably get some guy offering me a job to read
      it.
    </h3>
    <h4>- Mungai, 22nd Apr 2023.</h4>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.blogbanner {
  margin-top: 1rem;
  padding: 2rem;
  border: solid 1px rgba(125, 125, 182, 0.075);

  background: linear-gradient(
      56deg,
      rgba(60, 137, 238, 0.15),
      rgba(248, 61, 55, 0.13),
      rgba(0, 119, 255, 0.15)
    ),
    linear-gradient(
      126deg,
      rgba(21, 60, 231, 0),
      rgba(0, 69, 197, 0.13),
      rgba(0, 119, 255, 0.15)
    );
}
</style>
