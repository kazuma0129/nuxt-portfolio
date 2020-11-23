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
      <v-row v-for="(i, key) in skills" :key="key">
        <v-col align="start" class="py-0 my-0">
          <v-row>
            <v-col class="font-weight-thin">
              {{ i.category }}
            </v-col>
          </v-row>
        </v-col>
        <v-col align="start">
          <v-row v-for="(j, jkey) in i.names" :key="jkey">
            <v-col class="py-0 my-0">
              {{ j }}{{ jkey === i.names.length - 1 ? '' : `,` }}
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
      title: 'Skills',
      skills: [
        {
          category: `Langueages`,
          names: [`JavaScript`, `TypeScript`, `Python`, `Ruby`]
        },
        {
          category: `Frameworks`,
          names: [`Ruby on Rails`, `Express`, `Nuxt.js`, `Vue.js`]
        },
        { category: `DBs`, names: [`MongoDB`, `Firestore`, `MySQL`] },
        {
          category: `Others`,
          names: [
            `Alexa Skill Development`,
            `Audio Signal Processing`,
            `Audio Streaming`
          ]
        }
      ]
    }
  }
}
</script>
