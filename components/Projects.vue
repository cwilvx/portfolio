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
          :src="project.image"
          format="webp"
          :alt="project.title"
          class="rounded"
        />
        <div class="project-info">
          <h3>{{ index + 1 }}. {{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
        <p class="view-project">
          <a class="project-link" href="#">View project page ➡️&nbsp;&nbsp;&nbsp;</a>
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
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente? Quam omnis, nihil tempora, blanditiis optio pariatur eius, exercitationem ducimus porro accusamus asperiores nobis. Nobis ex unde maxime nostrum corporis!",
    image: "swing.png",
  },
  {
    title: "Swing Music Library manager",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente? Quam omnis, nihil tempora, blanditiis optio pariatur eius, exercitationem ducimus porro accusamus asperiores nobis. Nobis ex unde maxime nostrum corporis!",
    image: "https://picsum.photos/800/451",
  },
];

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
        });

        if (entry.isIntersecting) {
          setTimeout(() => {
            annotation.show();
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
