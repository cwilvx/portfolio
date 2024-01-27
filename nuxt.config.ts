// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/styles/index.scss"],
  modules: ["@nuxt/content"],
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
  spaLoadingTemplate: false,
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: "github-light"
      // OR
      // theme: {
      //   // Default theme (same as single string)
      //   default: 'github-light',
      //   // Theme used if `html.dark`
      //   dark: 'github-dark',
      //   // Theme used if `html.sepia`
      //   sepia: 'monokai'
      // }
    }
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
    devServer: {
      watch: ["./content"],
    },
  },
  // experimental: {
  //   payloadExtraction: false,
  // },
  // ssr: false,
  // routeRules: {
  //   "/": { prerender: true },
  //   "/blog/**": { ssr: true },
  // },
});
