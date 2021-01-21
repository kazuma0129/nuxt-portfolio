<template>
  <v-col :class="theme">
    <v-container>
      <v-card flat color="transparent" class="d-flex justify-center mt-10 mb-2">
        <h1 class="grey--text text--darken-2" @click="swichTheme">
          @kazuma0129
        </h1>
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
          class="mx-3 sns"
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
      dark: true,
      theme: 'light',
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
          url: `https://www.linkedin.com/in/kazuma-ohashi-29606b175`,
          icon: ``
        }
      ]
    }
  },
  methods: {
    swichTheme() {
      this.dark = !this.dark
      this.theme = this.dark ? 'dark' : 'light'
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

.light {
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    130deg,
    #c9d6ff,
    #e2e2e2,
    #ffe8df
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    130deg,
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

.dark {
  background: -webkit-linear-gradient(
    260deg,
    #2f5ae9,
    #ac2121,
    #853d20
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    260deg,
    #313236,
    #201c1c,
    #423835
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
