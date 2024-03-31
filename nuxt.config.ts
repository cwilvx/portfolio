// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
