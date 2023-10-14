<template>
  <div class="projects">
    <br /><br>
    <h2>Products</h2>
    <div>Here's something I've built</div>
    <div class="project-list">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project rounded-sm"
      >
        <div class="project-info">
          <NuxtLink :to="project.pagelink">
            <div class="logosm" v-html="project.logo"></div>
            {{ project.title }}
          </NuxtLink>
          <div class="desc">{{ project.description }}</div>
          <div class="buttons">
            <NuxtLink :to="project.pagelink">Read more</NuxtLink>
            <NuxtLink target="blank" :to="project.website"
              >View project</NuxtLink
            >
          </div>
        </div>
        <div class="logo" v-html="project.logo"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logosvg = `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="90" height="90" rx="10" fill="white"/>
<g clip-path="url(#clip0_27_6)">
<path class="stroke" d="M72.7627 45C72.7627 60.3329 60.3329 72.7628 45 72.7628C29.6671 72.7628 17.2373 60.3329 17.2373 45C17.2373 29.6671 29.6671 17.2373 45 17.2373C60.3329 17.2373 72.7627 29.6671 72.7627 45Z" fill="white" stroke="currentColor"/>
<g filter="url(#filter0_d_27_6)">
<path class="main" d="M45.2529 46.9414C48.4238 46.9414 51.5287 46.7531 54.0736 46.3763C56.092 46.071 56.7242 44.5814 56.0386 42.4555L52.2479 30.5106C51.5606 28.3232 49.8019 27.3051 47.3748 27.3051H43.1166C40.6895 27.3051 38.9307 28.3232 38.2436 30.5106L34.4528 42.4555C33.7671 44.5814 34.3993 46.071 36.4178 46.3763C38.9628 46.7531 42.0701 46.9414 45.2529 46.9414ZM43.9307 45.9342V61.813H46.566V45.9342H43.9307ZM38.7703 62.8172H51.7211C52.3399 62.8172 52.7614 62.3737 52.7614 61.7287C52.7614 60.5345 51.788 59.7051 50.3223 59.7051H40.1692C38.7034 59.7051 37.7444 60.5345 37.7444 61.7287C37.7444 62.3737 38.1516 62.8172 38.7703 62.8172Z" fill="currentColor"/>
</g>
</g>
<defs>
<filter id="filter0_d_27_6" x="30.1864" y="27.3051" width="30.1185" height="43.5121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_6"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_6" result="shape"/>
</filter>
<clipPath id="clip0_27_6">
<rect width="58" height="58" fill="white" transform="translate(16 16)"/>
</clipPath>
</defs>
</svg>`;
const projects = [
  {
    title: "Swing Music",
    description:
      "A self-hosted streaming server for your local audio files with a beautiful browser-based client. Like a cooler Spotify ... but bring your own music.",
    image: "/swing.png",
    pagelink: "/swingmusicproject",
    website: "https://swingmusic.vercel.app",
    logo: logosvg,
  },
];
</script>

<style lang="scss">
@import "../styles/index.scss";

.projects {
  .project-list {
    margin-top: 1rem;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem;
    background-color: rgba(157, 158, 160, 0.349);

    .logosm {
      display: none;
    }

    // dark mode
    @media (prefers-color-scheme: dark) {
      background-color: rgba(45, 47, 51, 0.349);

      svg {
        .main {
          fill: rgb(255, 255, 255);
        }

        .stroke {
          stroke: rgb(255, 255, 255);
          fill: transparent;
        }

        rect {
          fill: rgb(51, 51, 58);
        }
      }
    }

    @media (max-width: 745px) {
      grid-template-columns: 1fr;
      padding: 1rem;

      .logo {
        display: none !important;
      }

      .logosm {
        display: block;
        svg {
          height: 3rem;
          width: 3rem;
        }
      }
    }

    .buttons {
      display: flex;
      gap: 1rem;
    }

    .desc {
      margin: 1rem 0;
    }

    .logo {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      svg {
        margin-right: 2rem;
      }
    }
  }
}
</style>
