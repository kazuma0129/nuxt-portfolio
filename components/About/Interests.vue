<template>
  <v-card class="ma-5 text-color" color="transparent" flat>
    <v-container>
      <v-row>
        <v-col align="start">
          <h2 class="text--darken-2">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col align="start">
          <span class="font-weight-thin">
            {{ text }}
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
const title = "Interests";
const text = "Motorcycle, Netflix, Comedy, Ramen, ONSEN";
</script>
