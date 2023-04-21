<template>
  <main class="">
    <div id="page-content" class="page-content">
      <slot />
    </div>
  </main>
  <footer style="text-align: center">
    Powered by <a href="https://nuxt.com">NuxtJS</a>
  </footer>
</template>

<style lang="scss">
main {
  max-width: 55rem;
  margin: auto;

  #page-content {
    padding: 2rem;
    margin: 5rem 0;
    position: relative;
  }
}
</style>
