<template>
  <main class="">
    <div id="page-content" class="page-content rounded">
      <nuxt-img
        src="/tape.png"
        width="100"
        height="100"
        format="webp"
        v-for="i in [...Array(4).keys()]"
        :key="i"
        :class="`tape tape-${i + 1}`"
      />
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { annotate } from "rough-notation";

onMounted(() => {
  const elem = document.getElementById("page-content") as HTMLElement;
  const annotation = annotate(elem, {
    type: "box",
    color: "black",
    animate: false,
  });
  annotation.show();
});
</script>

<style lang="scss">
main {
  max-width: 40rem;
  margin: auto;
  rotate: 0.5deg;
  transform: translateX(-1rem);

  #page-content {
    padding: 2rem;
    margin: 5rem 0;
    position: relative;
  }

  .tape {
    position: absolute;
    z-index: 10;
  }

  .tape-1,
  .tape-2 {
    top: -2.5rem;
  }

  .tape-3,
  .tape-4 {
    bottom: -2.5rem;
  }

  .tape-1,
  .tape-4 {
    left: -2.5rem;
  }

  .tape-2,
  .tape-3 {
    right: -2.5rem;
  }

  .tape-1 {
    rotate: 90deg;
  }

  .tape-2 {
    rotate: 180deg;
  }

  .tape-3 {
    rotate: 270deg;
  }

  .tape-4 {
    rotate: 0deg;
  }
}
</style>
