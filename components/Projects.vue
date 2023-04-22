<template>
  <div class="projects">
    <h2>🛠️ Projects</h2>
    <p>Here are some things that I have worked on</p>
    <div class="project-list">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="project rounded"
      >
        <nuxt-img
          :src="project.image"
          format="webp"
          :alt="'image for:' + project.title"
        />
        <div class="project-info">
          <NuxtLink :to="project.pagelink">
            <h3>{{ project.title }}</h3>
          </NuxtLink>
          <p v-for="p in project.description">{{ p }}</p>
          <div class="buttons">
            <NuxtLink class="btn btn-primary" :to="project.pagelink"
              >View project</NuxtLink
            >
            <NuxtLink target="blank" class="btn" :to="project.website"
              >Project homepage</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Swing Music 🎵",
    description: [
      "A self-hosted streaming server for your local audio files with a beautiful browser-based client. Like a cooler Spotify ... but bring your own music.",
      "Based on the client-server architecture and written in Python, Typescript and Vue 3.",
    ],
    image: "/swing.png",
    pagelink: "/swingmusicproject",
    website: "https://swingmusic.vercel.app",
  },
];
</script>

<style lang="scss">
@import "../styles/index.scss";

.projects {
  .project-list {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
    width: 100%;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
    background-color: rgba(59, 119, 250, 0.103);
    border: solid 1px rgba(0, 110, 255, 0.103);

    @media (max-width: 745px) {
      grid-template-columns: 1fr;
      padding: 1rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: left;
      border-radius: 0.5rem;
      aspect-ratio: 1.3;
    }
  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    a {
      margin-right: 1rem;
      text-decoration: none;
    }

    h3 {
      margin: 0;
      color: $blue;
      font-size: x-large;
    }

    p {
      margin: 0;
      color: rgb(36, 35, 35);
      line-height: 1.75;
      margin-bottom: 1rem;
    }
  }
}
</style>
