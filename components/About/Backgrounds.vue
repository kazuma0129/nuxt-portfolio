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
        <v-col align="start" class="font-weight-thin backgrounds">
          <p>I was born and raised in Aomori Prefecture, Japan.</p>
          <p>
            Graduate of
            <a
              class="text-color"
              href="https://www.fun.ac.jp/en"
              target="_blank"
            >
              Future University Hakodate.
            </a>
            Bachelor of System Information Sience.
          </p>
          <p>I'm currently working as a software Engineer in Tokyo, Japan.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
const title = "Backgrounds";
</script>

<style lang="scss">
.backgrounds {
  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  a::after {
    position: absolute;
    bottom: 0px;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background: #fff;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }
  a:hover::after {
    transform: scale(1, 1);
  }
}
</style>
