<template>
  <div class="navigation-container">
    <v-toolbar app dark height="64" clipped-left>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link style="color: inherit" to="/">Taylor Gratzer</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="item.link" v-for="item in mainItems" :key="item.title" flat>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" clipped left mobile-break-point="960" disable-resize-watcher class="elevation-2">
      <v-list class="pt-0">
        <template
          v-for="groupItem in groupItems">
          <!-- separator -->
          <v-divider v-if="groupItem.type === 'separator'" :key="groupItem.title"></v-divider>

          <!-- section header -->
          <v-list-tile
            v-if="groupItem.type === 'header'"
            :key="groupItem.title"
            nuxt>
            <v-list-tile-content class="list__tile__content--section">
              <v-list-tile-title>{{ groupItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <!-- single version -->
          <v-list-tile
            v-if="groupItem.type === 'single'"
            :key="groupItem.title"
            @click=";"
            :to="groupItem.link"
            :target="isExternal(groupItem.link) ? '_blank' : null"
            nuxt>
            <v-list-tile-action>
              <v-icon>{{ groupItem.action }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                {{ groupItem.title }}
                <v-icon v-if="isExternal(groupItem.link)" style="font-size: 1em">launch</v-icon>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <!-- group version -->
          <v-list-group
            v-if="groupItem.type === 'group'"
            :key="groupItem.title"
            v-model="groupItem.active"
            :prepend-icon="groupItem.action"
            no-action>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ groupItem.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in groupItem.items"
              :key="subItem.title"
              @click=";"
              :to="!isExternal(subItem.link) ? subItem.link : null"
              :href="isExternal(subItem.link) ? subItem.link : null"
              :target="isExternal(subItem.link) ? '_blank' : null"
              nuxt>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ subItem.title }}
                  <v-icon v-if="isExternal(subItem.link)" style="font-size: 1em">launch</v-icon>
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </template>
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

@media screen and (max-width: 959px) {
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
      groupItems: [
        {
          type: "single",
          title: "Home",
          link: "/",
          action: "home"
        },
        {
          type: "single",
          action: "work",
          title: "My Work",
          link: "/work"
        },
        {
          type: "single",
          title: "Contact",
          link: "/contact",
          action: "question_answer"
        },
        { type: "header", title: "Programming" },
        {
          type: "group",
          action: "build",
          title: "Tools",
          items: [
            { title: "My Daily Board", link: "https://dailyboard.azurewebsites.net/" },
          ]
        },
      ],
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
      drawer: false
    };
  },
  methods: {
    isLinkActive: function(link) {
      if (!process.client) {
        return false;
      }

      if (!link) {
        return false;
      }
      const match = $nuxt.$router.match(link);
      return match && $nuxt.$router.currentRoute.name === match.name;
    },
    isItemActive: function(item) {
      if (item.type === "single") {
        return this.isLinkActive(item.link);
      } else if (item.type === 'group') {
        return item.items.some(item => this.isLinkActive(item.link));
      } else {
        return false;
      }
    },
    isExternal: function(link) {
      return link && link.indexOf('://') != -1;
    }
  }
};
</script>