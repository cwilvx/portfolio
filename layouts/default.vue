<template>
  <main class="">
    <header class="logo" ref="logoref">
      <NuxtLink
        to="/"
        class="emoji"
        @click="
          () => {
            clicked = true;
            randomizeEmoji();
          }
        "
        v-for="e in currentEmoji"
        :key="key"
        >{{ e }}</NuxtLink
      >
    </header>
    <div id="page-content" class="page-content">
      <slot />
    </div>
  </main>
  <footer style="text-align: center">
    Powered by <a href="https://nuxt.com">NuxtJS</a>
  </footer>
</template>

<script setup lang="ts">
const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "🥹",
  "😅",
  "😂",
  "🤣",
  "🥲",
  "☺️",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "🥺",
  "😩",
  "😫",
  "😖",
  "😣",
  "☹️",
  "😕",
  "🙁",
  "😟",
  "😔",
  "😞",
  "😒",
  "😏",
  "🤩",
  "🥸",
  "😎",
  "🤓",
  "🧐",
  "🤨",
  "🤪",
  "😜",
  "😝",
  "😛",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "😳",
  "😶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤗",
  "🤔",
  "🫣",
  "🤭",
  "🫢",
  "🫡",
  "🤫",
  "🤥",
  "😶",
  "😐",
  "🫤",
  "😑",
  "😬",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😮‍💨",
  "😵",
  "😵",
  "🤐",
  "🥴",
  "🤢",
  "🤧",
];

const clicked = ref(false);
const currentEmoji = ref([emojis[0]]);

const key = ref(0);

const randomizeEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  currentEmoji.value = [emojis[randomIndex]];
  key.value = key.value - 1;
};

setInterval(() => {
  if (!clicked.value) {
    randomizeEmoji();
  }
}, 10000);
</script>

<style lang="scss">
main {
  max-width: 55rem;
  margin: auto;

  #page-content {
    padding: 2rem;
    margin: 5rem 0;
    position: relative;
  }

  .logo {
    text-align: center;
    position: relative;

    a {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      font-size: 3rem;
      user-select: none;
      cursor: pointer;
      text-decoration: none;
    }
  }
}
</style>
