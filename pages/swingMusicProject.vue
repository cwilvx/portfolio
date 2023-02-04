<template>
  <div class="swing-project-page">
    <NuxtLink to="/">🡄 Go back</NuxtLink>
    <h1>Swing music player 📁🎵</h1>
    <a href="#">View code on Github</a>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut rem
      suscipit, inventore facilis modi iste praesentium blanditiis consequatur
      odio harum. Reprehenderit ex illum iste voluptatum ea suscipit hic
      veritatis ipsum.
    </p>
    <div class="project-tags">
      <span v-for="tag in tags" :key="tag">■ {{ tag }}</span>
    </div>
    <nuxt-img src="/swing.png" alt="" />

    <!-- ######### -->
    <br /><br /><br />
    <h2>⭐Project Objective and Purpose</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      voluptatibus quasi reprehenderit iste consequatur sapiente asperiores
      accusantium incidunt vel necessitatibus cupiditate in sequi quas
      voluptatum, laudantium provident rerum dolores quidem.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      voluptatibus quasi reprehenderit iste consequatur sapiente asperiores
      accusantium incidunt vel necessitatibus cupiditate in sequi quas
      voluptatum, laudantium provident rerum dolores quidem.
    </p>
    <nuxt-img src="/swing.png" alt="" />

    <!-- ######### -->
    <br /><br /><br />
    <h2>🛠Web Stack and Explanation</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      voluptatibus quasi reprehenderit iste consequatur sapiente asperiores
      accusantium incidunt vel necessitatibus cupiditate in sequi quas
      voluptatum, laudantium provident rerum dolores quidem.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nesciunt
      accusamus molestias ut explicabo ducimus voluptatem enim, sint, quam sed
      neque? Perferendis enim debitis aspernatur, itaque eligendi unde hic at?
    </p>
    <nuxt-img src="/swing.png" alt="" />

    <!-- ######### -->
    <br /><br /><br />
    <h2>🏋Challenges</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      doloribus architecto exercitationem, inventore ipsa sunt? Corporis,
      ratione illum repellat consectetur nostrum cupiditate sint? Assumenda ipsa
      quaerat doloribus eaque illo quasi?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione
      inventore delectus voluptates, culpa, deleniti quos nam explicabo
      consequatur alias quod excepturi quidem provident eos tempore, vitae ipsa
      doloremque id.
    </p>
    <nuxt-img src="/swing.png" alt="" />
    <!-- ######### -->
    <br /><br /><br />
    <h2>😺Insights</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione
      inventore delectus voluptates, culpa, deleniti quos nam explicabo
      consequatur alias quod excepturi quidem provident eos tempore, vitae ipsa
      doloremque id.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
      aliquid obcaecati ad ipsam! Et natus consectetur debitis, placeat
      reprehenderit similique cumque non beatae praesentium in magnam, eligendi
      quibusdam voluptatibus?
    </p>
  </div>
</template>

<script setup lang="ts">
const tags = ["Self hosted", "Vue", "Pinia", "Python", "Flask", "Music"];
</script>

<style lang="scss">
.swing-project-page {
  img {
    width: 100%;
  }

  img:nth-child(even) {
    rotate: -1deg;
    margin-top: 1rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    border: solid 1px;
    padding: 1rem;
    border-radius: 0.5rem;
  }
}
</style>
