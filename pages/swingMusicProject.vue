<template>
  <div class="swing-project-page">
    <NuxtLink to="/">🡄 Go back</NuxtLink>
    <section>
      <h1>Swing music library manager 📁🎵</h1>
      <a href="https://github.com/geoffrey45/swingmusic">View code on Github</a>
      <p>
        Swing music is a beautiful and blazingly-fast self-hosted music player
        and library manager based on the client-server architecture.
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
    <figcaption>Artist page banner showing Bob Dylan</figcaption>

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
      <h2>🛠️Web Stack and Explanation</h2>
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
    <h2>🪨Challenges</h2>
    <p>
      The main challenge in general was coming up with a simple, cool and
      intuitive UI. Understanding colors and spacing was rocket science to me at
      first. I overcame this challenge by taking a few "UI design for
      developers" 101s at YouTube university. Looking at other people's UI
      designs at Dribbble also helped me improve my UI design skills.
    </p>
    <p>
      Most of the other challenges (like 90%) I faced were
      <u>optimization</u> problems. For example, reading tags from music files
      is a very slow and CPU intensive task, I had to find a way to optimize it.
      I used multiprocessing to spawn multiple processes to read tags from music
      files. This reduced the time taken to read tags from music files by a huge
      margin.
    </p>
    <p>
      I had zero experience with CSS before this project. I had to learn CSS
      from scratch and apply it to this project. Using CSS grids to structure
      the UI was hectic. Maintaining a responsive design was also a challenge.
      Learning CSS layouts in depth helped me understand how the browser works
      and how to build a responsive design.
    </p>
    <nuxt-img
      src="/swing/4.png"
      format="webp"
      alt="Album page banner showing an album by Bob Dylan"
    />
    <figcaption>Album page banner showing an album by Bob Dylan</figcaption>
    <!-- ######### -->
    <br /><br />
    <h2>💡Insights</h2>
    <p>
      Taking on this project has helped me learn a lot of things about software
      development and life in general.
    </p>
    <p>
      When I started this project, I had no idea how to build a web app. I had
      very little Javascript and Python knowledge. I had to learn UI design,
      Git, Typescript, CSS, Vue3, SQL, APIs, Testing, Pinia, multiprocessing,
      and more from scratch.
    </p>
    <p>
      Taking on a project this big can be very overwhelming and can take ages.
    </p>
    <p>
      I have been working on this project since December 2021. I made the first
      release on January 2023. The time difference between the first commit and
      the first release is 1 year and 640 commits on the main branch. I have
      spent sleepless nights and weekends working on this project and I almost
      ditched it when everything was breaking. The only thing that kept me going
      ... was my passion for using software to solve problems.
    </p>
    <p>THE END</p>
    <br />
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
    scale: 0.9;
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
