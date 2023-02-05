<template>
  <div class="swing-project-page">
    <NuxtLink to="/">🡄 Go back</NuxtLink>
    <section>
      <h1>Swing music library manager 📁🎵</h1>
      <a href="https://github.com/geoffrey45/swingmusic">View code on Github</a>
      <p>
        Swing music is a self-hosted music player and library manager built with
        both visual coolness and functionality in mind. It is based on the
        client-server architecture.
      </p>
    </section>
    <div class="project-tags">
      <span
        v-for="tag in [
          'Music',
          'Self hosted',
          'Vue3',
          'Pinia',
          'Python',
          'Flask',
          'SQLite',
          '2021 - Present',
        ]"
        :key="tag"
        >■ {{ tag }}</span
      >
    </div>

    <nuxt-img
      src="/swing/1.png"
      format="webp"
      alt="Artist page banner showing Bob Dylan"
    />
    <figcaption>
      Artist page banner showing Bob Dylan
    </figcaption>

    <!-- ######### -->
    <br /><br />
    <section>
      <h2>⭐Project Objective and Purpose</h2>
      <p>
        I love music and I have a huge collection of music that I have collected
        over the years. I found it very hard to find and play the music that I
        wanted to listen to. The available music players were either too basic
        or too complicated. None of them was visually appealing to me either. I
        also needed smart playlists that would be generated based on my
        listening habits. Smart mixes based on a particular artist, album, genre
        were also on top of my list.
      </p>
      <p>
        Finding all these features in one app was very hard and using multiple
        apps for different features was not something I was willing to do.
      </p>
      <p>
        Combining all these features into one app was the main objective of this
        project. All the features of a typical music player, smart mixes and
        playlists based on my listening activity combined with a cool and easy
        to use interface was the main thing that I was going for.
      </p>
      <nuxt-img
        src="/swing/2.png"
        format="webp"
        alt="Section in artist page showing albums by Bob Dylan"
      />
      <figcaption>
        Section in artist page showing albums by Bob Dylan
      </figcaption>
    </section>

    <!-- ######### -->
    <br /><br />
    <section>
      <h2>🛠Web Stack and Explanation</h2>
      <p>The main stack of this project is Python, Flask, and Vue 3.</p>
      <p>
        This project has 2 parts, the backend and the frontend. The backend is
        written in Python. I decided to use Python because it was the language I
        was most comfortable with. I also wanted to learn more about Python and
        Flask.
      </p>
      <p>
        The frontend is written in Vue 3. I decided to use Vue 3 because it is a
        very performant framework and is easy to pickup as a web dev newbie.
      </p>
      <nuxt-img
        src="/swing/3.png"
        format="webp"
        alt="Section in artist page showing top tracks by Bob Dylan"
      />
      <figcaption>
        Section in artist page showing top tracks by Bob Dylan
      </figcaption>
    </section>
    <!-- ######### -->
    <br /><br />
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
    <nuxt-img src="/swing/4.png" format="webp" alt="Album page banner showing an album by Bob Dylan" />
    <figcaption>Album page banner showing an album by Bob Dylan</figcaption>
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
    <NuxtLink to="/">🡄 Go back</NuxtLink>
  </div>
</template>

<style lang="scss">
.swing-project-page {
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  figcaption {
    text-align: center;
    font-style: italic;
    scale: .9;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    border: solid;
    padding: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
