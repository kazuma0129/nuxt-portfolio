<template>
  <v-container>
    <v-row justify="center" align="center">
      <router-link grey--text text--darken-2 to="/" class="mx-2">
        Home
      </router-link>
      <router-link grey--text text--darken-2 to="/blog" class="mx-2">
        Blog
      </router-link>
    </v-row>
  </v-container>
</template>

<style>
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  background: yellow;
  border-radius: 5px;
  color: red;
  font-variant: italic;
}
</style>
