<template>
  <div>
    <section>
      <h2 class="subtitle">Full-stack Developer &amp; <span class="break-lg">FIRST Robotics Alumni</span></h2>
    </section>

    <section id="brief-intro">
      <DevAspects v-on:aspect="aspectChanged"></DevAspects>
    </section>

    <hr style="margin-bottom: 2em">

    <section id="about">
      <AspectDetails v-bind:aspect="selectedAspect"></AspectDetails>
    </section>

    <!-- TODO: give attribution or get rid of the icons -->
    <!-- <Icons8Attribution/> -->
  </div>
</template>

<style scoped lang="css">
@media screen and (min-width: 999px) {
  .break-lg {
    display: block;
  }
}

</style>

<script>
import Icons8Attribution from "~/components/Icons8Attribution.vue";
import DevAspects from "~/components/DevAspects.vue";
import AspectDetails from "~/components/AspectDetails.vue";

export default {
  components: {
    Icons8Attribution,
    DevAspects,
    AspectDetails
  },
  data: () => {
    return {
      selectedAspect: 'development'
    };
  },
  methods: {
    aspectChanged: function (aspectId) {
      this.selectedAspect = aspectId;
    }
  }
};
</script>
