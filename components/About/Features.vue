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
      <v-row v-for="(i, key) in reverseFeatures" :key="key">
        <v-col align="start" class="py-0 my-0">
          <v-row>
            <v-col class="font-weight-thin">
              {{ i.date }}
            </v-col>
            <v-col class="font-weight-thin feature">
              <a :href="i.url" target="_blank"> {{ i.featName }}</a>
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
      title: 'Features',
      features: [
        {
          date: 'Aug 2018',
          featName: 'ISHINOMAKI HACKATHON',
          url: 'http://itnav.jp/blog/ishinomakihack2018_day3/'
        },
        {
          date: 'Oct 2018',
          featName: 'Mshup Awards in Hakodate',
          url:
            'https://dstn.appresso.com/hc/ja/articles/360011963414-%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3-IoT-AI-by-Mashup-Awards-2018-%E5%8F%82%E5%8A%A0%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88-%E5%BE%8C%E7%B7%A8-'
        },
        {
          date: 'Dec 2018',
          featName: 'Mashup Awards, FESTA',
          url: 'http://blog.ktrips.net/ma2018/'
        },
        {
          date: 'May 2019',
          featName: 'SPAJAM SAPPORO',
          url: 'https://togetter.com/li/1227509'
        }
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

<style lang="scss">
.feature {
  a {
    position: relative;
    display: inline-block;
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
