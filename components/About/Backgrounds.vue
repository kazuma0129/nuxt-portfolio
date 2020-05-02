<template>
  <v-card class="ma-5" color="transparent" flat>
    <v-row>
      <v-col align="start">
        <h2 class="grey--text text--darken-2">{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="start">
        <p class="font-weight-thin">
          {{ text }}
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: 'Backgrounds',
      text: `I love OSS`
    }
  }
}
</script>
