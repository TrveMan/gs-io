<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'styles/typography.scss';
  @import 'styles/colors.scss';
body {
  @extend %gs-typo__reg;
  background: $gs-color__dark-blue;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  color: $gs-color__white;

}
</style>
