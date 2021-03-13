<template>
  <div class="ma-5 text-color">
    <v-container>
      <v-row>
        <v-col align="start">
          <h2 class="text-color text--darken-2">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-for="(i, key) in reverseItems" :key="key">
        <v-col align="start" class="">
          <v-row>
            <v-col class="font-weight-thin">
              {{ i.date }}
            </v-col>
            <v-col class="font-weight-thin job">
              <ExternalLink :href="i.url" :body="i.name" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { qualifications } from '../../constants'
import ExternalLink from '~/components/ExternalLink'
export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      title: 'Qualifications',
      qualifications
    }
  },
  computed: {
    reverseItems() {
      return this.qualifications.slice().reverse()
    }
  }
}
</script>

<style lang="scss">
/* .qual {
  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  a::after {
    position: absolute;
    bottom: 0px;
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
} */
</style>
