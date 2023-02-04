<template>
  <br><br><br>
  <h2>My other skills</h2>
  <p>
    Apart from building interfaces with plain HTML, CSS and Javascript, I also
    know how to do the following:
  </p>
  <ul>
    <li>Building web user intefaces with VueJS</li>
    <li>The above, but with React</li>
    <li>Using Typescript to write better Javascript</li>
    <li>Building backend APIs with Python</li>
    <li>
      <span id="finding-code" style="margin-right: -1.3rem"
        >Finding &nbsp;&nbsp;&nbsp;&nbsp;</span
      >
      the right code to copy from stack overflow (ahem ... 🤫)
    </li>
    <li>Playing a Guitar 🤥</li>
  </ul>
</template>

<script setup lang="ts">
import { annotate } from "rough-notation";

onMounted(() => {
  const findingCode = document.getElementById("finding-code") as HTMLElement;
  const annotation = annotate(findingCode, {
    type: "circle",
    color: "chocolate",
  });

  setTimeout(() => {
    annotation.show();
  }, 7000);
});
</script>