// const nodeExternals = require('webpack-node-externals')
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Taylor Gratzer | Central Florida',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      }
    ],
    htmlAttrs: {
      lang: 'en-US',
    },
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#B3E5FC' },
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
      // if (process.server) {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [/^vuetify/]
      //     })
      //   ]
      // }
    },

    // transpile: [/^vuetify/],
    // plugins: [
    //   new VuetifyLoaderPlugin()
    // ],
  },

  generate: {
    fallback: true
  },

  build: {
    extractCSS: true
  },

  plugins: ['~/plugins/vuetify'],
  /*
  ** Load Vuetify CSS globally
  */
  css: ['~/assets/app.styl']
}
