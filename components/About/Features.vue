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
      <v-row v-for="(i, key) in reverseFeatures" :key="key">
        <v-col align="start">
          <v-row>
            <v-col class="font-weight-thin"> {{ i.date }} {{ i.role }} </v-col>
            <v-col class="font-weight-thin">
              <ExternalLink :href="i.url" :body="i.title" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { features } from "../../constants";

const title = "Features";
const reverseFeatures = features.reverse();
</script>
