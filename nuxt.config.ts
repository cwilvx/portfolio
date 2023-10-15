// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/styles/index.scss"],
  modules: ["@nuxt/image-edge", "@nuxt/content", "@nuxtjs/google-fonts"],
  app: {
    head: {
      charset: "utf-16",
      title: "Mungai",
      meta: [
        {
          name: "Mungai Njoroge",
          content: "Read about Mungai Njoroge's work",
        },
      ],
    },
  },
  content: {},
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      preload: true,
    },
  },
});
