import nodeExternals from 'webpack-node-externals'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Taylor Gratzer | Central Florida',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
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
  loading: {
    color: '#B3E5FC'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],

    extractCSS: true,

    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    },

  },

  generate: {
    fallback: true
  },

  plugins: ['~/plugins/vuetify'],
  /*
   ** Load Vuetify CSS globally
   */
  css: ['~assets/app.styl']
}
