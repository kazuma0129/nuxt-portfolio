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
      <v-row v-for="(i, key) in contents" :key="key">
        <v-col align="start" class="font-weight-thin feature">
          <a :href="i.url" target="_blank"> {{ i.title }}</a>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: 'Writings',
      contents: [
        {
          title: 'AWS研修を終えて',
          url: 'https://cam-inc.co.jp/p/techblog/432843405245023035'
        },
        {
          title:
            'Firestoreのエラー "Converting circular structure to JSON Firebase"',
          url: 'https://qiita.com/kazuma0129/items/fa0a67ebd54034339466'
        }
      ]
    }
  }
}
</script>
