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
        <v-col align="start" class="font-weight-thin backgrounds">
          <p>
            I'm from Aomori Prefecture, Japan.
          </p>
          <p>
            Graduate of
            <a href="https://www.fun.ac.jp/en" target="_blank">
              Future University Hakodate.
            </a>
            Bachelor of System Information Sience.
          </p>
          <p>
            I'm currently working as a software engineer in Tokyo, Japan.
          </p>
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
      text: `I love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSSI love OSS`
    }
  }
}
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
    content: '';
    width: 100%;
    height: 1px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }
  a:hover::after {
    transform: scale(1, 1);
  }
}
</style>
