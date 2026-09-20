import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,

  // Global page headers
  app: {
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
      }],
      script: process.env.NUXT_PUBLIC_GOOGLE_ADSENSE_ID ? [{
        async: true,
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NUXT_PUBLIC_GOOGLE_ADSENSE_ID}`,
        crossorigin: "anonymous",
      }] : [],
    },
  },

  css: ['~/assets/css/tailwind.css'],
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
    "nuxt-gtag"
  ],

  runtimeConfig: {
    public: {
      googleAdsenseId: process.env.NUXT_PUBLIC_GOOGLE_ADSENSE_ID || ''
    }
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
    enabled: Boolean(process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID)
  },

  fonts: {
    providers: {
      adobe: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      google: false,
      googleicons: false
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Kanji Clustering Analysis',
      short_name: '漢字凝集解析',
      lang: 'ja',
      start_url: '/',
      display: 'standalone',
      background_color: '#f9fafb',
      theme_color: '#111827',
      icons: [
        {
          src: '/icon.png',
          sizes: '500x500',
          type: 'image/png'
        }
      ]
    }
  },

  nitro: {
    routeRules: {
      '/kanji-clustering-api/**': {
        proxy: {
          to: 'https://kanji-clustering.herokuapp.com/**',
          headers: {
            'User-Agent': 'Nuxt-App'
          }
        }
      },
      '/sw.js': { headers: { 'Cache-Control': 's-maxage=0' } }
    }
  },

  devtools: { enabled: true },
})
