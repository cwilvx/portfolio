<template>
  <div class="swing-project-page">
    <section>
      <div
        class="title"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <h2>Project: Swing Music</h2>
        <div>
          <a
            class="btn btn-primary"
            href="https://swingmusic.vercel.app"
            target="_blank"
            >Website</a
          >

          &ThickSpace;
          <a
            class="btn btn-primary"
            href="https://github.com/cwilvx/swingmusic"
            target="_blank"
            >GitHub</a
          >
        </div>
      </div>
      <div>
        Swing music is a beautiful and "blazingly-fast" music player with a
        beautiful browser-based client. Base on the the client-server
        architecture, Swing Music is written with Python, Typescript and Vue.
      </div>
    </section>
    <br /><br />
    <picture>
      <img
        src="/head.png"
        format="webp"
        alt="Section in artist page showing albums by Bob Dylan"
      />
    </picture>
    <br /><br />
    <section>
      <h3>Project Objective and Purpose</h3>
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
      <picture>
        <img
          src="/1.png"
          format="webp"
          alt="Section in artist page showing albums by Bob Dylan"
        />
      </picture>
    </section>

    <!-- ######### -->
    <section>
      <h3>Web Stack and Explanation</h3>
      <p>
        The main stack of this project is Python3, Flask, Vue 3 and Typescript.
      </p>
      <p>
        This project has 2 parts, the server and the client. The server is
        written in Python. I decided to use Python because it was the language I
        was most comfortable with. I also wanted to learn more about Python and
        Flask.
      </p>
      <p>
        The client is written in Vue 3. I decided to use Vue 3 because it is a
        very performant framework and is easy to pickup as a web dev newbie.
      </p>
      <picture>
        <img
          src="/2.png"
          format="webp"
          alt="Section in artist page showing albums by Bob Dylan"
        />
      </picture>
    </section>
    <!-- ######### -->
    <h3>Challenges</h3>
    <p>
      The main challenge in general was coming up with a simple, cool and
      intuitive UI. Understanding colors and spacing was rocket science to me at
      first. I overcame this challenge by taking a few "UI design for
      developers" 101s at YouTube university. Looking at other people's UI
      designs at Dribbble also helped me improve my UI design skills.
    </p>
    The
    <a href="https://www.refactoringui.com/" target="_blank">Refactoring UI</a>
    book by Adam Wathan & Steve Schoger was a game changer for me. It helped me
    understand more about color, spacing, typography and other UI design
    concepts.
    <p>
      Most of the other challenges (like 90% of them) I faced were optimization
      problems. For example, reading tags from music files is a very slow and
      CPU intensive task, I had to find a way to optimize it. I used
      multiprocessing to spawn multiple threads to read tags from music files.
      This reduced the time taken to read tags from music files by a huge
      margin.
    </p>
    <p>
      I had zero experience with CSS before this project. I had to learn CSS
      from scratch and apply it to this project. Using CSS grids to create the
      layout was hectic. Maintaining a responsive design was also a challenge.
      Learning CSS layouts in depth helped me understand how the browser works
      and how to build a responsive design. The
      <a href="https://www.joshwcomeau.com/css/understanding-layout-algorithms/"
        >Understanding Layout Algrothims</a
      >
      article by Josh Comeau was very helpful in understanding CSS layouts.
    </p>
    <picture>
      <img
        src="/3.png"
        format="webp"
        alt="Section in artist page showing albums by Troye Sivan"
      />
    </picture>
    <h3>Insights</h3>
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
      Taking on a passionate project can be very overwhelming and can take ages
      to develop.
    </p>
    <p>
      I have been working on this project since December 2021. I made the first
      release on January 2023. The time difference between the first commit and
      the first release is 1 year and 640 commits on the main branch. I have
      spent sleepless nights and weekends working on this project and I almost
      ditched it when everything was breaking.
    </p>
    <p>
      It can be very scary to put your work out there for the world to see. It's
      like having a baby, but you don't want to show anyone because you fear
      everyone will think your baby is fat instead of beautiful and adorable.
      You can overcome by telling yourself that you have nothing to loose. If
      people like it, good. If they don't, good. You learn from the feedback. Of
      course some people will say something like "this is the most gen-alpha
      bullshit I've ever seen", don't take them to heart. They are just
      expressing their opinion. You can't please everyone.
    </p>
    <picture>
      <img
        src="/5.png"
        format="webp"
        alt="Section in artist page showing albums by Bob Dylan"
      />
    </picture>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Swing Music | Mungai",
  meta: [
    { name: "description", content: "Read about the Swing Music project" },
  ],
});
</script>
<style lang="scss">
.swing-project-page {
  .title {
    margin-bottom: 1rem;

    h2 {
      margin: 0;
      border-bottom: none;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start !important;

      h2 {
        margin-bottom: 1rem;
      }
    }
  }

  img {
    width: 100%;
    object-fit: cover;
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
