<template>
  <v-card class="ma-5" color="transparent" flat>
    <v-row>
      <v-col align="start">
        <h2 class="grey--text text--darken-2">{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row v-for="(i, key) in reverseItems" :key="key">
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
      title: 'Qualifications',
      qualifications: [
        {
          date: 'Nov 2013',
          corpName: 'Information Technology Passport Examination'
        },
        {
          date: 'Nov 2017',
          corpName: 'Fundamental Information Technology Engineer Examination'
        },
        {
          date: 'Dec 2018',
          corpName: 'Applied Information Technology Engineer Examination'
        }
      ]
    }
  },
  computed: {
    reverseItems() {
      return this.qualifications.slice().reverse()
    }
  }
}
</script>
