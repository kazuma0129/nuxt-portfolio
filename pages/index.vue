<template>
  <v-col :class="theme">
    <v-container>
      <v-card flat color="transparent" class="d-flex justify-center mt-10 mb-2">
        <h1 class="text-color" @click="swichTheme">@kazuma0129</h1>
      </v-card>
      <v-card flat color="transparent" class="d-flex justify-center mt-2 mb-5">
        <h4 class="text-color">Software Engineer, Tokyo, Japan</h4>
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
          <!-- <a class="text-color" :href="i.url" target="_blank">{{ i.name }}</a> -->
          <ExternalLink :href="i.url" :body="i.name" />
        </v-card>
      </v-card>
    </v-container>
  </v-col>
</template>

<script>
import About from '~/components/About'
import ExternalLink from '~/components/ExternalLink'
export default {
  components: {
    About,
    ExternalLink
  },
  data() {
    return {
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
  mounted() {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const userPrefersLight =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches

    if (userPrefersDark) {
      this.theme = 'dark'
    }
    if (userPrefersLight) {
      this.theme = 'light'
    }
  },
  methods: {
    swichTheme() {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          this.$vuetify.theme.dark = true
          break
        case 'dark':
          this.theme = 'light'
          this.$vuetify.theme.dark = false
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss">
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

  .text-color {
    color: #616161 !important;
    caret-color: #616161 !important;
  }
}

.dark {
  background: #313236; /* fallback for old browsers */
  /* background: -webkit-linear-gradient(260deg, #313236, #201c1c, #423835);
  background: linear-gradient(260deg, #313236, #201c1c, #423835); */

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }

  .text-color {
    color: #ffffff !important;
    caret-color: #ffffff !important;
  }
}
</style>
