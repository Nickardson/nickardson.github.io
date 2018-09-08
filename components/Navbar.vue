<template>
  <div class="navigation-container">
    <nav class="navigation">
      <nuxt-link to="/" class="logo-link">Taylor Gratzer</nuxt-link>
      <nuxt-link to="/" class="nav-link">Intro</nuxt-link>
      <nuxt-link to="/work" class="nav-link">Work</nuxt-link>
      <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
    </nav>

    <div class="navigation-flair-container">
      <svg class="navigation-flair" width="183" height="73" viewBox="0 0 183 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.5 73L0 0H149L158 25L26.5 73Z" transform="translate(0.5)" fill="#EB5757"/>
        <path d="M17 47.5L0 0H148L17 47.5Z" transform="translate(35)" fill="#F2994A"/>
      </svg>
    </div>
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
  color: #FFFFFF;

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
  margin: 0 .4em 0 .4em;
  padding: 0 5px 0 5px;
  /* keep the bottom border size constantly the same */
  border-top: 3px solid transparent;
}

a.nav-link:hover {
  color: #FAFAFA;
}

a.nav-link.nuxt-link-exact-active {
  font-weight: bold;
  font-style: normal;
  border-top: 3px solid #A4A2F0;
}

</style>
