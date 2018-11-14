<template>
  <div id="app">
    <!--router-view is a station label for the routes in router.js-->
    <router-view/>
  </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
    "default",
    (
        primary: #8b4513,
        accent: #fffaf0
    )
);
@import "~vue-material/dist/theme/all";
</style>
<script>
export default {}
</script>
