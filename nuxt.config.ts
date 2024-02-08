// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@vueuse/motion/nuxt"
  ],
  colorMode: {
    preference: "light",
  },
  i18n: {
    locales: [
      /* "en", "it", "de" */
      {
        code: "en",
        iso: "en-US",
        isCatchallLocale: true,
        name: "English",
      },
      {
        code: "it",
        iso: "it-IT",
        name: "Italiano",
      },
      {
        code: "de",
        iso: "de-DE",
        name: "Deutsch",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "jamflow_i18n_redirected",
      redirectOn: "root", // recommended
      alwaysRedirect: true,
    },
  },
  app: {
    rootTag: "div",
    rootId: "_JAMflow",
    pageTransition: {
      name: "page",
      mode: "out-in"
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in"
    },
  },
  extends: ["@nuxt/ui-pro"],
  css: ['~/assets/css/tailwind.css'],
});
