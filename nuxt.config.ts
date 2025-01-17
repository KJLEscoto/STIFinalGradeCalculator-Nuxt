// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'KinWebb | Final Grade Calculator',
      meta: [
        {
          name: 'description', content: 'Website to calculate your final grades with predefined average formula.'
        }
      ],
      link: [
        {
          rel: 'shortcut icon', type: 'image/png', href: '/logo.png'
        }
      ]
    }
  }
})
