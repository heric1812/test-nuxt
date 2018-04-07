module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-nuxt-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    // base: '/',
    mode: 'hash'
  },
  /*
  ** Fallback para GitHub
  */
  generate: {
    fallback: true // if you want to use '404.html'
    // fallback: 'my-fallback/file.html' // if your hosting needs a custom location
  }
  /*
  ** Fallback para Firebase
  */
  // generate: {
  //   fallback: true, // if you want to use '404.html'
  //   fallback: {
  //     "hosting": {
  //       "public": "dist",
  //       "ignore": [
  //         "firebase.json",
  //         "**/.*",
  //         "**/node_modules/**"
  //       ],
  //       "rewrites": [
  //         {
  //           "source": "**",
  //           "destination": "/404.html"
  //         }
  //       ]
  //     }
  //   }
  // }
}
