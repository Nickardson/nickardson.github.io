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
        :style="{'background-image': 'url(' + encodeURIComponent(project.image) + ')'}"
      ></div>
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
    };
  },
  props: [
    'project',
    'hideimage'
  ]
};
</script>
