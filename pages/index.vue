<template>
  <div>
    <section id="home">
      <h1 class="title">
        Taylor Gratzer
      </h1>
    </section>

    <section>
      <h2 class="subtitle">Full-stack Developer &amp; <span class="break-lg">FIRST Robotics Alumni</span></h2>
    </section>

    <section id="brief-intro">
      <DevAspects></DevAspects>
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
// import AppLogo from "~/components/AppLogo.vue";
import Icons8Attribution from "~/components/Icons8Attribution.vue";
import DevAspects from "~/components/DevAspects.vue";

export default {
  components: {
    // AppLogo,
    Icons8Attribution,
    DevAspects
  }
};
</script>
