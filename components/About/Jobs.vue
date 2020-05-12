<template>
  <v-card class="ma-5" color="transparent" flat>
    <v-container>
      <v-row>
        <v-col align="start">
          <h2 class="grey--text text--darken-2">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-for="(i, key) in reverseJobs" :key="key">
        <v-col align="start" class="py-0 my-0">
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
export default {
  data() {
    return {
      title: 'Careers',
      jobs: [
        {
          date: 'Aug 2018, A week',
          corpName: 'Diamond Head Co.,Ltd.',
          url: 'https://diamondhead.jp/'
        },
        {
          date: 'Aug 2018, 4 days',
          corpName: 'NIFTY Corporation',
          url: 'https://www.nifty.co.jp/'
        },
        {
          date: 'Sep 2018, 2 weeks',
          corpName: 'TIME INTERMEDIA, Inc.',
          url: 'https://www.timedia.co.jp/'
        },
        {
          date: 'Sep 2019, A month',
          corpName: 'CyberAgent, Inc.',
          url: 'https://www.cyberagent.co.jp/'
        },
        {
          date: 'Apr 2020, Now',
          corpName: 'CyberAgent, Inc.',
          url: 'https://www.cyberagent.co.jp/'
        }
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
