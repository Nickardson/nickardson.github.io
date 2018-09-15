<template>
  <div class="aspect-details">
    <AboutDevelopment v-if="shouldShowAspect('development')"></AboutDevelopment>
    <!-- <AboutDesign v-if="shouldShowAspect('design')"></AboutDesign>
    <AboutDevops v-if="shouldShowAspect('devops')"></AboutDevops> -->
  </div>
</template>

<!-- not scoped -->
<style>
.aspect-details h3 {
  margin-bottom: 0.5em;
}

.half-n-half {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.half-n-half > * {
  margin: 1em;
  flex-grow: 1;
  flex-basis: 0;
}

@media screen and (max-width: 1000px) {
  .half-n-half > * {
    flex-basis: 100%;
  }
}

@media screen and (min-width: 1201px) {
  .half-n-half {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>

<script>
import AboutDesign from "~/components/AboutDesign.vue";
import AboutDevelopment from "~/components/AboutDevelopment.vue";
import AboutDevops from "~/components/AboutDevops.vue";

export default {
  components: {
    AboutDesign,
    AboutDevelopment,
    AboutDevops
  },
  data: () => {
    return {
      hasScripting: false
    };
  },
  props: [
    'aspect'
  ],
  methods: {
    shouldShowAspect: function (aspectId) {
      return !this.hasScripting || this.aspect === aspectId;
    }
  },
  mounted: function() {
    // hide the non-selected aspects when the client has JS
    this.$nextTick(() => {
      console.log('mounted', process, process.client);
      if (process.client) {
        this.hasScripting = true;
      }
    });
  }
};
</script>
