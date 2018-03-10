<template>
  <div>
    <section class="container container-circuit">
      <div>
        <app-logo/>
        <h1 class="title">
          Taylor Gratzer
        </h1>
        <h2 class="subtitle">
          Full-Stack Dev and Robotics Aficionado
        </h2>
        <div class="links">
          <a href="https://github.com/Nickardson" class="button--grey" title="Github" target="_blank">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/taylor-g-9bb43896/" class="button--grey" title="LinkedIn" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <section class="container container-dark">
      <nuxt-link
        to="/contact">
        <i class="icon">
          <svg>
            <use xlink:href="/assets/icons.min.svg#icon-e-mail"></use>
          </svg>
        </i>
      </nuxt-link>

      <!-- <Icons8Attribution/> -->
    </section>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import Icons8Attribution from "~/components/Icons8Attribution.vue";

export default {
  components: {
    AppLogo,
    Icons8Attribution
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container-circuit {
  background-image: url("~/assets/circuit-tree.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.container-dark {
  background: #35495e;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.icon {
  font-size: 5em;
}

</style>
