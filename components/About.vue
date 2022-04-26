<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(c, key) in Components"
        :key="key"
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        align="center"
      >
        <component :is="c" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const Components = [
  "AboutBackgrounds",
  "AboutInterests",
  "AboutWritings",
  "AboutQualifications",
  "AboutCareers",
  "AboutSkills",
  "AboutFeatures",
].map((n) => resolveComponent(n));
</script>
