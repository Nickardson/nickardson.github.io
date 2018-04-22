<template>
  <div class="flex-container-wrapper">
    <div class="main-body">
      <nav class="navigation top-navigation section-dark">
        <nuxt-link to="/">Intro</nuxt-link>
        <div class="navigation-separator">/</div>
        <nuxt-link to="/work">Work</nuxt-link>
        <div class="navigation-separator">/</div>
        <nuxt-link to="/skills">Skills</nuxt-link>
        <div class="navigation-separator">/</div>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </nav>

      <main class="main-content">
        <nuxt/>
      </main>

      <footer class="end-footer">
        <div class="navigation bottom-navigation">
          <a href="https://github.com/Nickardson" title="Github" target="_blank">GitHub</a>
          <div class="navigation-separator">&bull;</div>
          <a href="https://www.linkedin.com/in/taylor-g-9bb43896/" title="LinkedIn" target="_blank">LinkedIn</a>

          <div class="navigation-separator">&bull;</div>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
/* Base */

@import url('https://fonts.googleapis.com/css?family=Cormorant+Infant:700');
@import url('https://fonts.googleapis.com/css?family=Lato');

html {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 22px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f3f5f6;
  color: #35495e;
}

body {
  min-height: 100vh;
  overflow-y: scroll;
}

.flex-container-wrapper {
  display: flex;
  flex-direction: column;
}

.main-body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.main-content {
  flex-grow: 1;
}

/* Navigation */

a {
  text-decoration: none;
  color: #1565C0;
}

a:hover {
  margin-bottom: -2px;
  border-bottom: 2px solid;
}

.subtle-link {
  color: inherit;
  border-bottom: 1px solid;
}

.navigation-separator {
  display: inline-block;
  margin: 0 1em 0 1em;
}

.navigation-separator {
  color: #afbdcb;
}

.section-dark .navigation-separator {
  color: #5b748b;
}

@media screen and (max-width: 600px) {
  .navigation-separator {
    display: none;
  }

  .navigation {
    display: flex;
    justify-content: space-around;
  }

  .navigation > a {
    margin: 0.25em;
  }

  .top-navigation {
    padding-top: 0.75em;
    padding-bottom: 1.5em;
  }

  .bottom-navigation {
    flex-grow: 1;
    justify-content: space-around;
  }
}

.top-navigation {
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
}

.top-navigation > a {
  color: #CFD8DC;
}

.top-navigation > a:hover {
  color: #FAFAFA;
}

.top-navigation > a.nuxt-link-exact-active {
  color: #90CAF9;
  font-weight: bold;
  font-style: normal;
  margin-bottom: -2px;
  border-bottom: 2px solid;
}

/* Body Content */

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Cormorant Infant", "Georgia", serif;
  font-weight: 700;
}

h1 {
  font-size: 72px;
}

h2 {
  font-size: 36px;
}

.title, .subtitle {
  text-align: center;
  display: block;
  -webkit-font-smoothing: antialiased;
}

.title {
  font-size: 72px;
  color: #35495e;
  margin-bottom: 0.5em;
  letter-spacing: -1px;
}

.section-dark {
  background: #35495e;
  color: #FFFFFF;
}

.section-dark .title {
  color: #FFFFFF;
}

.section-dark .subtitle {
  color: #CFD8DC;
}

.section-pad {
  padding-top: 2em;
  padding-bottom: 2em;
}

/* Footer */

.end-footer {
  padding: 1em 0 1em 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid #CFD8DC;
}

/* Interaction */

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 2px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 2px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.icon, .icon > svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
}

</style>
