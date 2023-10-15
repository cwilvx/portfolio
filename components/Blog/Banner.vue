<template>
  <div class="blogbanner rounded-sm">
    <h1>Blog</h1>
    I sometimes write about my experiences as a micro independent software
    vendor. Check out my posts below.
  </div>
</template>

<style lang="scss">
.blogbanner {
  margin-top: 1rem;
  padding: 1rem;

  h1 {
    margin: 1rem 0;
  }

  background: linear-gradient(
      56deg,
      rgba(0, 110, 255, 0.15),
      rgba(240, 37, 30, 0.13),
      rgba(1, 118, 252, 0.15)
    ),
    linear-gradient(
      126deg,
      rgba(13, 55, 240, 0),
      rgba(7, 89, 241, 0.13),
      rgba(243, 37, 9, 0.15)
    );

  // dark mode
  @media (prefers-color-scheme: dark) {
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
}
</style>
