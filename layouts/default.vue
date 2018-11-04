<template>
  <v-app class="main-body">
    <Navbar></Navbar>
    <main class="main-content">
      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
        <Footer></Footer>
      </v-content>
    </main>
  </v-app>
</template>

<style>
/* Base */

@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700");
@import url("https://fonts.googleapis.com/css?family=Lato");

html {
  font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 26px;

  -moz-osx-font-smoothing: grayscale;

  background-color: #fcfcfc;
  color: #404040;
}

body {
  /* min-height: 100vh; */
  /* overflow-y: scroll; */
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

*,
*:before,
*:after {
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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
  color: #132733;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

.header-title,
.subtitle {
  text-align: center;
}

.header-title {
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
section,
hr.separator {
  margin-bottom: 40px;
}

hr:not(.v-divider) {
  display: block;
  box-sizing: content-box;
  background: #e5e5e5;
  height: 2px;
  border: 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  margin: 0 10vw 0 10vw;
}

@media screen and (max-width: 959px) {
  .navigation-container {
    z-index: 999;
    position: fixed;
    right: 0;
    left: 0;
    border-radius: 0;
    top: 0;
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

abbr[title]:after {
  content: " (" attr(title) ")";
  text-decoration: none;
}

@media screen and (min-width: 1025px) {
  abbr[title] {
    border-bottom: 1px dotted gray;
  }

  abbr[title]:after {
    content: "";
  }
}

/* a */
a {
  color: #3e3cbe;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* navbars */
aside a {
  color: inherit;
}
aside a:hover {
  text-decoration: none;
}

.list__tile__content--section {
  text-transform: uppercase;
  opacity: .8;
  font-size: .9em;
  justify-content: flex-end;
}

/* print */
@media print {
  hr.separator {
    display: none;
  }

  .print-page-before {
    float: none;
    display: block;
    break-before: page;
  }
}
</style>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>