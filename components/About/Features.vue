<template>
  <!-- <v-card class="ma-5 text-color" color="transparent" flat> -->
  <div class="ma-5 text-color">
    <v-container>
      <v-row>
        <v-col align="start">
          <h2 class="text--darken-2">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-for="(i, key) in reverseFeatures" :key="key">
        <v-col align="start">
          <v-row>
            <v-col class="font-weight-thin"> {{ i.date }} {{ i.role }} </v-col>
            <v-col class="font-weight-thin">
              <!-- <a class="text-color" :href="i.url" target="_blank">
                {{ i.title }}</a
              > -->
              <ExternalLink :href="i.url" :body="i.title" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-card> -->
  </div>
</template>

<script>
import { features } from '../../constants'
import ExternalLink from '~/components/ExternalLink'
export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      title: 'Features',
      features
    }
  },
  computed: {
    reverseFeatures() {
      return this.features.slice().reverse()
    }
  }
}
</script>

<style lang="scss">
/* .feature {
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
