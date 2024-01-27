<template>
  <div class="main">
    <header ref="logoref">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink> |
      <NuxtLink to="/blog/journal">Thinking out loud!</NuxtLink>
    </header>
    <div id="page-content" class="page-content">
      <slot />
    </div>
  </div>
  <footer style="text-align: center; margin-bottom: 0.5rem">
    © Mungai Njoroge - {{ new Date().getFullYear() }}
  </footer>
</template>

<style lang="scss">
.main {
  max-width: 50rem;
  padding: 1rem;
  margin: 0 auto;

  #page-content {
    margin: 5rem 0;
    position: relative;
  }

  header {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
}
</style>
