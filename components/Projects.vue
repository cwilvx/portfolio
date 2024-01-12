<template>
  <div class="projects">
    <h2>Products</h2>
    <div class="project-list">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project rounded-sm"
      >
        <div class="project-info">
          <NuxtLink :to="project.pagelink">
            {{ project.title }}
          </NuxtLink>
          <div class="desc">{{ project.description }}</div>
          <div>
            <NuxtLink :to="project.pagelink">Read more</NuxtLink> |
            <NuxtLink target="blank" :to="project.website">Website ➚</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Swing Music",
    description:
      "A self-hosted streaming server for your local audio files with a beautiful browser-based client. Like a cooler Spotify ... but bring your own music.",
    image: "/swing.png",
    pagelink: "/projects/swingmusic",
    website: "https://swingmusic.vercel.app",
  },
];
</script>

<style lang="scss">
@import "../styles/index.scss";

.projects {
  .project {
    .desc {
      margin: 1rem 0;
    }
  }
}
</style>
