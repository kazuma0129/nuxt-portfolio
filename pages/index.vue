<template>
  <v-col>
    <v-container>
      <v-card flat color="transparent" class="d-flex justify-center mt-10 mb-2">
        <h1 class="grey--text text--darken-2">@kazuma0129</h1>
      </v-card>
      <v-card flat color="transparent" class="d-flex justify-center mt-2 mb-5">
        <h4 class="grey--text text--darken-2">
          Software Engineer, Tokyo, Japan
        </h4>
      </v-card>
    </v-container>

    <v-container>
      <v-row align="center" justify="center" class="my-10">
        <About />
      </v-row>
    </v-container>

    <v-container>
      <v-card
        flat
        color="transparent"
        class="d-flex justify-center mt-10 mb-10"
      >
        <v-card
          v-for="(i, key) in links"
          :key="key"
          flat
          color="transparent"
          class=" mx-3 sns"
        >
          <a :href="i.url" target="_blank">{{ i.name }}</a>
        </v-card>
      </v-card>
    </v-container>
  </v-col>
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
          name: 'Twitter',
          url: `https://twitter.com/kazuma_0129`,
          icon: `mdi-twitter`
        },
        {
          name: 'Facebook',
          url: `https://www.facebook.com/profile.php?id=100005368476501`,
          icon: `mdi-facebook`
        },
        {
          name: `LinkedIn`,
          url: `https://www.linkedin.com/in/一真-大橋-29606b175`,
          icon: ``
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.sns {
  a {
    text-decoration: none;
  }
  a::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }
  a:hover::after {
    transform: scale(1, 1);
  }
}
</style>
