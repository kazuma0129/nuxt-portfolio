<template>
  <v-card class="ma-5 text-color" color="transparent" flat>
    <v-container>
      <v-row>
        <v-col align="start">
          <h2 class="text--darken-2">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-for="(i, key) in reverseCareers" :key="key">
        <v-col align="start" class="">
          <v-row>
            <v-col class="font-weight-thin">
              {{ i.date }}
            </v-col>
            <v-col class="font-weight-thin job">
              <a :href="i.url" target="_blank"> {{ i.corpName }}</a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { careers } from '../../constants'
export default {
  data() {
    return {
      title: 'Careers',
      careers
    }
  },
  computed: {
    reverseCareers() {
      return this.careers.slice().reverse()
    }
  }
}
</script>

<style lang="scss">
.job {
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
}
</style>
