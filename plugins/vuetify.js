import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'

// You can also specify those components you are going to use for "a la carte" build:
// https://github.com/vuetifyjs/nuxt/blob/master/template/plugins/vuetify.js
// https://github.com/vuetifyjs/a-la-carte/blob/master/template/src/main.js

import Vuetify from 'vuetify/lib'

Vue.use(Vuetify, {
  theme: {
    primary: colors.deepPurple.darken4, // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.darken2,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
