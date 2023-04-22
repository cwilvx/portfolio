<template>
  <div class="banner rounded">
    <div>
      <h1>Hello there 👋</h1>
      <h2>My name is <span id="name">Mungai</span> Njoroge</h2>
      <h3>
        ... and I build with <span id="javascript">Javascript</span> and Python
      </h3>
    </div>
    <img id="avatar" src="/avatar.jpeg" />
    <div class="social-icons">
      <NuxtLink
        to="https://github.com/mungai-njoroge"
        target="_blank"
        class="btn btn-primary"
      >
        Github
      </NuxtLink>
      <NuxtLink to="https://twitter.com/mu_njoroge" target="_blank" class="btn">
        Twitter
      </NuxtLink>
    </div>
  </div>
  <hr />
  <Projects />
  <hr />
  <AboutMe />
  <hr />
  <Skills />
  <hr />
  <Foot />
</template>

<style lang="scss">
hr {
  margin: 5rem 0;
  opacity: 0.25;
}

.banner {
  display: grid;
  grid-template-columns: 1fr max-content;
  padding: 3rem 0;
  align-items: center;
  position: relative;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }

  #avatar {
    height: 10rem;
  }
}

.social-icons {
  width: 100%;

  a {
    margin-right: 1rem;
  }
}
</style>
