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
