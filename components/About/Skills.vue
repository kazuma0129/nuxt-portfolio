<template>
  <v-card class="ma-5" color="transparent" flat>
    <v-row>
      <v-col align="start">
        <h2 class="grey--text text--darken-2">{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row v-for="(i, key) in skills" :key="key">
      <v-col align="start" class="py-0 my-0">
        <p class="font-weight-thin">
          {{ i.category }}
        </p>
      </v-col>
      <v-col align="start" class="py-1 my-0">
        <v-row v-for="(j, jkey) in i.names" :key="jkey">
          <p class="font-weight-thin py-0 my-0">
            {{ j }}
          </p>
        </v-row>
      </v-col>
    </v-row>
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
          names: [`JavaScript`, `Node.js`, `Python`, `Ruby`]
        },
        {
          category: `Frameworks`,
          names: [`Ruby on Rails`, `Express`, `Nuxt.js`, `Vue.js`]
        },
        { category: `DBs`, names: [`MongoDB`, `Firestore`, `MySQL`] },
        { category: `CI/CD`, names: [`Cloud Build`, `App Engine`, `Circle CI`] }
      ]
    }
  }
}
</script>
