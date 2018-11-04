<template>
  <div>
    <section class="section-dark section-pad">
      <h1 class="header-title">
        Skills
      </h1>
    </section>

    <div class="container">
      <section class="section-pad-half">
        <h2>Technologies</h2>
        <p>
          Lorem ipsum dolor.
        </p>
      </section>

      <section class="section-pad">
        <h2>Languages</h2>
        <p>
          Lorem ipsum dolor.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="css">
input, textarea {
  font-size: 0.75rem;
  padding: 0.25em 0.75em;
  line-height: 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

textarea {
  width: 100%;
}

input:not([type="submit"]) {
  min-width: 50%;
}

label {
  font-size: 16px;
}
</style>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>
