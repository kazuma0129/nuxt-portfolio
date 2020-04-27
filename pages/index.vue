<template>
  <v-container>
    <v-col>
      <v-row align="center" justify="center" class="my-10">
        <h2
          class="justify-center display-1 font-weight-thin grey--text text--darken-2"
        >
          @kazuma0129
        </h2>
      </v-row>

      <v-row v-for="(i, key) in links" :key="key" justify="center" class="my-2">
        <a :href="i.url" target="_blank">{{ i.name }}</a>
      </v-row>

      <v-row align="center" justify="center" class="my-10">
        <About />
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import About from '~/components/About'
export default {
  components: {
    About
  },
  data() {
    return {
      links: [
        {
          name: 'GitHub',
          url: `https://github.com/kazuma0129`,
          icon: `mdi-github-circle`
        },
        {
          name: 'twitter',
          url: `https://twitter.com/kazuma_0129`,
          icon: `mdi-twitter`
        },
        {
          name: 'Facebook',
          url: `https://www.facebook.com/profile.php?id=100005368476501`,
          icon: `mdi-facebook`
        },
        {
          name: 'Instagram',
          url: `https://www.instagram.com/kazuma_129/`,
          icon: `mdi-instagram`
        }
      ]
    }
  }
}
</script>

<style lang="sass"></style>
