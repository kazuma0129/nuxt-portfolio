<template>
  <v-card class="ma-5" color="transparent" flat>
    <v-row>
      <v-col align="start">
        <h2 class="grey--text text--darken-2">{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row v-for="(i, key) in reverseJobs" :key="key">
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
      title: 'jobs',
      jobs: [
        { date: 'Aug 2018, 2 weeks', corpName: 'Diamond Head Co.,Ltd.' },
        { date: 'Aug 2018, 4 days', corpName: 'NIFTY Corporation' },
        { date: 'Sep 2018, 2 weeks', corpName: 'TIMEINTERMEDIA, Inc.' },
        { date: 'Sep 2019, A monts', corpName: 'CyberAgent, Inc.' },
        { date: 'Apr 2020, Now', corpName: 'CyberAgent, Inc.' }
      ]
    }
  },
  computed: {
    reverseJobs() {
      return this.jobs.slice().reverse()
    }
  }
}
</script>
