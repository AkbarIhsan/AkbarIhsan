// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css:[
    'aos/dist/aos.css',
  ],
  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' }
  ],
  app:{
    head:{
      title: 'Portofolio AkbarIhsan',
      link: [
        {rel: 'icon', type: 'image/png', href: '/logo.png'}
      ]
    }
  },
})