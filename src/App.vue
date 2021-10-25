<template>
  <div id="app">
    <catalog-legend></catalog-legend>
    <reference></reference>
    <logo></logo>
    <catalog></catalog>
  </div>
</template>

<script>
import { Catalog, CatalogLegend, Logo, Reference } from "./components";

export default {
  name: "App",
  components: {
    Catalog,
    CatalogLegend,
    Logo,
    Reference,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f7f7f7;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>
