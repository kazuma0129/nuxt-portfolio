<template>
  <v-app dark>
    <v-content>
      <!-- <AppHeader />
      <transition mode="out-in">
        <nuxt />
      </transition> -->
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
// import AppHeader from '~/components/AppHeader'
export default {
  components: {
    // AppHeader
  },
  data() {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    310deg,
    #c9d6ff,
    #e2e2e2,
    #ffe8df
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    310deg,
    #c9d6ff,
    #e2e2e2,
    #ffe8df
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  a {
    color: #333;
  }
}
</style>
