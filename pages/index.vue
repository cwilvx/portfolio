<template>
  <div class="banner rounded">
    <div>
      <h1>Hi 👋</h1>
      <h2>I'm <span id="name">Mungai</span></h2>
      <h3>I work with <span id="javascript">Javascript</span> and friends</h3>
    </div>
    <!-- <span>this is me</span> -->
    <canvas id="avatarCanvas"> </canvas>
    <!-- <img src="https://picsum.photos/200" alt="" /> -->
  </div>
  <img class="hr" src="hr.png" />
  <Projects />
  <img class="hr" src="hr.png" />
</template>

<script setup lang="ts">
//@ts-ignore
import rough from "roughjs/bundled/rough.esm";
import { annotate } from "rough-notation";

onMounted(() => {
  const canvas = document.getElementById("avatarCanvas") as HTMLCanvasElement;
  canvas.width = 200;
  canvas.height = 200;

  const rc = rough.canvas(canvas);

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const img_src = "cat.jpg";
  const imgElem = new Image();
  imgElem.src = img_src;

  imgElem.onload = () => {
    rc.rectangle(5, 5, 150, 150, {
      roughness: 1.5,
      fillStyle: "cross-hatch",
      fill: "brown",
      stroke: "black",
      strokeWidth: 6,
    });
    ctx.drawImage(imgElem, 5, 5, 145, 145);
  };

  const name = document.getElementById("name") as HTMLElement;
  const annotation = annotate(name, {
    type: "box",
    color: "red",
  });
  annotation.show();

  const javascript = document.getElementById("javascript") as HTMLElement;
  const annotation2 = annotate(javascript, {
    type: "highlight",
    color: "orange",
  });

  setTimeout(() => {
    annotation2.show();
  }, 1000);
});
</script>

<style lang="scss">
.hr {
  width: 100%;
  pointer-events: none;
  margin: 1rem 0;
}
.banner {
  display: grid;
  grid-template-columns: 1fr max-content;
  padding: 3rem 0;
  align-items: center;
  position: relative;

  img {
    height: 9.5rem;
    width: 9.5rem;
    border-radius: 50%;
    object-fit: cover;
    // border: solid 0.25rem white;
    position: absolute;
    display: none;

    right: 0.25rem;
    top: 4rem;
  }

  //   span {
  //     position: absolute;
  //     right: 15rem;
  //     top: 3rem;
  //   }
}
</style>
