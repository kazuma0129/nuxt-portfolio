<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" align="center">
        <Backgrounds />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" align="center">
        <Interests />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" align="center">
        <Writings />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" align="center">
        <Features />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" align="center">
        <Skills />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" align="center">
        <Jobs />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" align="center">
        <Qualifications />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Backgrounds from '~/components/About/Backgrounds'
import Features from '~/components/About/Features'
import Interests from '~/components/About/Interests'
import Writings from '~/components/About/Writings'
import Skills from '~/components/About/Skills'
import Jobs from '~/components/About/Jobs'
import Qualifications from '~/components/About/Qualifications'

export default {
  components: {
    Backgrounds,
    Features,
    Interests,
    Writings,
    Skills,
    Jobs,
    Qualifications
  }
}
</script>
