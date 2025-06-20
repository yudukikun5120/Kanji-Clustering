export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "漢字凝集解析｜類似の漢字をクラスタ解析で検索",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [{
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Detect similar kanji characters with k-means method.",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    }, ],
    script: [{
      async: true,
      src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENSE_ID}`,
      crossorigin: "anonymous",
    }, ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/vue-js-modal.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
    [
      '@nuxtjs/google-gtag', {
        id: process.env.GOOGLE_ANALYTICS_ID,
        debug: true
      }
    ]
  ],

  pwa: {
    manifest: {
      name: "Kanji Clustering Analysis",
      lang: "ja",
    },
    workbox: {
      dev: true,
    },
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/http", "@nuxtjs/toast", "nuxt-clipboard"],

  toast: {
    position: "bottom-right",
    theme: "outline",
  },

  clipboard: {
    autoSetContainer: true,
  },

  http: {
    proxy: true, // Can be also an object with default options
  },

  proxy: {
    "/kanji-clustering-api/": {
      target: "https://kanji-clustering.herokuapp.com",
      pathRewrite: {
        "^/kanji-clustering-api/": "/",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
