<template>
  <div class="navigation-container">
    <v-toolbar dark height="64">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" />
      <v-toolbar-title>Taylor Gratzer</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="item.link" v-for="item in mainItems" :key="item.title" flat>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" left temporary fixed app>
      <v-list>
        <v-list-tile v-for="item in items"
            :key="item.title"
            @click=";"
            :to="item.link"
            nuxt>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.navigation {
  position: relative;
  z-index: 1000;

  background: #132733;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  min-height: 50px;
  padding-left: 20px;
}

/* the container marks the bottom of the nav, but should take up no space */
.navigation-flair-container {
  position: relative;
  z-index: 0;
}

.navigation-flair {
  position: absolute;
  left: 1em;
  top: 0px;
  float: left;
}

.navigation > a {
  color: #ffffff;

  display: inline-block;
  height: 100%;
  vertical-align: middle;
  line-height: 50px;
  text-decoration: none;
}

.logo-link {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 24px;
  margin-right: 1.8em;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 1000px) {
  a.logo-link {
    display: none;
  }

  /* .navigation-flair-container {
    height: 4px;
    background: linear-gradient(90deg, #EB5757 0%, #F2994A 100%);
  } */

  .navigation-flair {
    display: none;
  }
}

a.nav-link {
  margin: 0 0.4em 0 0.4em;
  padding: 0 5px 0 5px;
  /* keep the bottom border size constantly the same */
  border-top: 3px solid transparent;
}

a.nav-link:hover {
  color: #fafafa;
}

a.nav-link.nuxt-link-exact-active {
  font-weight: bold;
  font-style: normal;
  border-top: 3px solid #a4a2f0;
}
</style>

<script>
export default {
  data() {
    return {
      mainItems: [
        {
          title: "Intro",
          link: "/"
        },
        {
          title: "Work",
          link: "/work"
        },
        {
          title: "Contact",
          link: "/contact"
        }
      ],
      items: [
        {
          title: "Intro",
          link: "/",
          icon: "home"
        },
        {
          title: "Work",
          link: "/work",
          icon: "work"
        },
        {
          title: "Contact",
          link: "/contact",
          icon: "question_answer"
        }
      ],
      drawer: false
    };
  }
};
</script>