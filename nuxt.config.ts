// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/styles/index.scss"],
  modules: ["@nuxt/image-edge", "@nuxt/content", "@nuxthq/studio"],
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
    devServer: {
      watch: ["./content"],
    },
  },
  ssr: false,
  routeRules: {
    "/": { prerender: true },
    "/blog/**": { ssr: true },
  },
});
