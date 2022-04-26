<template>
  <v-card class="ma-5" color="transparent" flat>
    <v-container>
      <v-row>
        <v-col align="start">
          <h2 class="text-color text--darken-2">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-for="(i, key) in writings" :key="key">
        <v-col align="start" class="font-weight-thin feature">
          <a class="text-color" :href="i.url" target="_blank"> {{ i.title }}</a>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { writings } from "../../constants";

const title = "Writings";
</script>
