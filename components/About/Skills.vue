<template>
  <div class="ma-5 text-color">
    <v-container>
      <v-row>
        <v-col align="start">
          <h2 class="text--darken-2">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-for="(i, key) in skills" :key="key" class="my-0">
        <v-col align="start">
          <v-row>
            <v-col class="font-weight-thin">
              {{ i.category }}
            </v-col>
          </v-row>
        </v-col>
        <v-col align="start">
          <v-row v-for="(j, jkey) in i.names" :key="jkey">
            <v-col class="my-0">
              {{ j }}{{ jkey === i.names.length - 1 ? "" : `,` }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const title = "Skills";
const skills = [
  {
    category: `Backend`,
    names: ["Node.js (TypeScript, JavaScript)", "Ruby on Rails"],
  },
  {
    category: `Frontend`,
    names: [`Nuxt.js`, `Vue.js`],
  },
  {
    category: `Others`,
    names: [
      "Microservices Architecture",
      "Audio Signal Processing",
      "AlexaSkill Development",
    ],
  },
];
</script>
