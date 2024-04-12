// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
  
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  
  })
  
  
  // Original:
  
  /* 
  
  export default defineNuxtConfig({
    devtools: { enabled: true }
  })
  
  */