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
          :placeholder="[100, 50, 10]"
          width="750"
          height="450"
          :src="project.image"
          format="webp"
          :alt="project.title"
        />
        <div class="project-info">
          <h3>{{ index + 1 }}. {{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
        <p class="view-project">
          <NuxtLink class="project-link" :to="project.pagelink"
            >View project page ➡️&nbsp;&nbsp;&nbsp;</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { annotate } from "rough-notation";

const projects = [
  {
    title: "Swing Music Library manager 📁🎵",
    description:
      "Swing music is a beautiful and blazingly-fast self-hosted music player and library manager based on the client-server architecture. ",
    image: "/swing3.png",
    pagelink: "/swingmusicproject",
  },
];

// array to store the index of the projects that have been animated
let animated: number[] = [];

onMounted(() => {
  // get all the project .view-project elements
  const viewProjectElements = document.querySelectorAll(
    ".view-project"
  ) as NodeListOf<HTMLElement>;
  // loop through them
  viewProjectElements.forEach((element, index) => {
    //  when the element enters the viewport, show the annotation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const annotation = annotate(element, {
          type: "box",
          color: "#0d44da",
          animationDuration: 2000,
          strokeWidth: 3,
        });

        if (entry.isIntersecting && !animated.includes(index)) {
          setTimeout(() => {
            annotation.show();
            animated.push(index);
          }, 3000);
        }
      });
    });

    observer.observe(element);
  });
});
</script>

<style lang="scss">
.projects {
  .project-list {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
  }

  img {
    width: 100%;
    border: solid 5px;
  }

  .view-project {
    display: block;
    font-weight: bold;
    width: max-content;

    a {
      text-decoration: none;
    }
  }
}
</style>
