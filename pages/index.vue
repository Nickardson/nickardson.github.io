<template>
  <div>
    <section class="container container-circuit">
      <div>
        <!-- <app-logo/> -->
        <h1 class="title">
          Taylor Gratzer
        </h1>
        <h2 class="subtitle">
          Full-Stack Dev and Robotics Aficionado
        </h2>
        <div class="links">
          <a href="https://github.com/Nickardson" title="Github" target="_blank">
            <i class="icon">
              <svg>
                <use xlink:href="/assets/icons.min.svg#icon-github"></use>
              </svg>
            </i>
          </a>

          <a href="https://www.linkedin.com/in/taylor-g-9bb43896/" title="LinkedIn" target="_blank">
            <i class="icon">
              <svg>
                <use xlink:href="/assets/icons.min.svg#icon-linkedin"></use>
              </svg>
            </i>
          </a>
        </div>
      </div>
      <a href="#contact" class="down-chevron"><img src="~/assets/chevron-down.svg"/></a>
    </section>


    <section id="contact" class="container container-dark">
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
  position: relative;
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
  padding-bottom: 15px;
}

.links a {
  display: inline-block;
  padding: 0.25em;
  margin: 0.5em;
}

.links .icon {
  font-size: 5rem;
}

.links .icon:hover {
  opacity: 0.8;
}

.down-chevron {
  /* TODO: determine compatibility */
  position: fixed;
  bottom: 1em;
}

.down-chevron > img {
  width: 2em;
  height: 2em;
}

.down-chevron:hover {
  opacity: 0.5;
}

/* You're already needing to scroll at this point */
@media screen and (max-height: 400px) {
  .down-chevron {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .title {
    font-size: 60px;
  }

  .subtitle {
    font-size: 24px;
  }
}
</style>
