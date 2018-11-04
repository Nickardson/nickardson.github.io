<template>
  <v-card
    color="deep-purple darken-4"
    dark
  >
    <v-card-title class="title">
      <div>
        <div><strong>{{ project.name }}</strong></div>
        <div class="caption">{{project.time | dateFormat}}</div>
      </div>
    </v-card-title>
    <v-card-text class="white text--primary">
      <div
        class="image"
        v-if="!hideimage && project.image"
        v-show="ssr"
        :style="{'background-image': 'url(' + encodeURIComponent(project.image) + ')'}"
      ></div>
      <v-img
        v-if="!hideimage && project.image"
        v-show="!ssr"
        :src="project.image"
        max-height="600"
        contain
      ></v-img>

      <Badges
        v-if="project.badges"
        :badges="project.badges"
        class="project-badges"></Badges>
      <div
        v-if="project.description"
        v-html="project.description"
        class="project-description"></div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.image {
  min-height: 25vh;
  height: 500px;
  max-height: 800px;
  width: 100%;
  background-size: contain;
  background-position: center center;
}
</style>

<script>
import Badges from "~/components/Badges.vue";

export default {
  components: {
    Badges
  },
  filters: {
    dateFormat: function(value) {
      if (!value) {
        return "";
      }

      return value.join(" - ");
    }
  },
  data: () => {
    return {
      ssr: process.server
    };
  },
  props: [
    'project',
    'hideimage',
    'left',
    'right'
  ]
};
</script>
