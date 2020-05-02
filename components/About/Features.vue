<template>
  <v-card class="ma-5" color="transparent" flat>
    <v-row>
      <v-col align="start">
        <h2 class="grey--text text--darken-2">{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row v-for="(i, key) in reverseFeatures" :key="key">
      <v-col align="start" class="py-0 my-0">
        <p class="font-weight-thin">
          {{ i.date }}
        </p>
      </v-col>
      <v-col align="start" class="py-0 my-0">
        <p class="font-weight-thin">
          {{ i.corpName }}
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: 'Features',
      features: [
        { date: 'Aug 2018', corpName: 'ISHINOMAKI HACKATHON' },
        { date: 'Oct 2018', corpName: 'Mshup Awards in Hakodate' },
        { date: 'Dec 2018', corpName: 'Mashup Awards, FESTA' },
        { date: 'May 2019', corpName: 'SPAJAM SAPPORO' }
      ]
    }
  },
  computed: {
    reverseFeatures() {
      return this.features.slice().reverse()
    }
  }
}
</script>
