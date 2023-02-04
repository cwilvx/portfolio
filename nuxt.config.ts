// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/styles/index.scss"],
  modules: ["@nuxt/image-edge"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Mungai's Porfolio",
      meta: [
        {
          name: "Mungai Njoroge's Portfolio site",
          content: "A not so responsive site powered by Rough.js and Nuxt3",
        },
      ],
    },
  },
});
