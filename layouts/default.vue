<template>
  <main class="">
    <div id="page-content" class="page-content">
      <slot />
    </div>
  </main>
  <footer style="text-align: center">
    Powered by <a href="https://nuxt.com">NuxtJS</a> and
    <a href="https://github.com/rough-stuff">Rough Stuff</a>
  </footer>
</template>

<style lang="scss">
main {
  max-width: 50rem;
  margin: auto;
  transform: translateX(-1rem);

  #page-content {
    padding: 2rem;
    margin: 5rem 0;
    position: relative;
  }
}
</style>
