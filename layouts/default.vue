<template>
  <div class="flex-container-wrapper">
    <div class="main-body">
      <Navbar></Navbar>

      <main class="main-content">
        <nuxt/>
      </main>

      <Footer></Footer>
    </div>
  </div>
</template>

<style>
/* Base */

@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700');
@import url('https://fonts.googleapis.com/css?family=Lato');

html {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 19px;
  line-height: 26px;

  -moz-osx-font-smoothing: grayscale;

  background-color: #FCFCFC;
  color: #404040;
}

body {
  /* min-height: 100vh; */
  overflow-y: scroll;
}

.flex-container-wrapper {
  display: flex;
  flex-direction: column;
}

.main-body {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.main-content {
  z-index: 1;
  flex-grow: 1;
  overflow-y: auto;
}

/* Body Content */

.container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", serif;
  color: #132733;
}

h2, h3, h4, h5, h6 {
  font-weight: normal;
}

.title, .subtitle {
  text-align: center;
}

.title {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 48px;
  margin-top: 0.5em;
}

.subtitle {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 36px;
}

/* Separation */
section, hr.separator {
  margin-bottom: 40px;
}

hr {
  display: block;
  box-sizing: content-box;
  background: #E5E5E5;
  height: 2px;
  border: 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  margin: 0 10vw 0 10vw;
}

@media screen and (max-width: 1000px) {
  /* body { */
  .footer {
    margin-bottom: 50px;
  }
  .navigation-container {
    z-index: 999;
    position: fixed;
    right: 0;
    left: 0;
    border-radius: 0;
    bottom: 0;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

/* Abbreviation */

abbr[title] {
  font-variant: normal;
  border: none;
  text-decoration: none;
}

abbr[title]:after
{
  content: " (" attr(title) ")";
  text-decoration: none;
}

@media screen and (min-width: 1025px)
{
  abbr[title] {
    border-bottom: 1px dotted gray;
  }

  abbr[title]:after
  {
    content: "";
  }
}

/* a */
a {
  color: #3E3CBE;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>