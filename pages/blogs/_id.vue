<template>
  <v-col>
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          {{ post.title }}
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-0 pt-0">
      <v-row justify="center">
        <v-col cols="8" class="mt-0 pt-0">
          <v-row>
            <v-col>
              <v-row justify="start" class="ma-0">
                {{ post.date }}
              </v-row>
            </v-col>
            <v-col>
              <v-row justify="end" class="ma-0">
                {{ post.author }}
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <span v-html="post.content" />
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>
import { firestore } from '~/plugins/firebase'

export default {
  data() {
    return {
      post: {}
    }
  },
  async mounted() {
    const { id, author, title, content, date } = await firestore
      // this.post = await firestore
      .collection('fl_content')
      .doc(this.$route.params.id)
      .get()
      .then((doc) => {
        return doc.data()
      })
    this.post = { id, author, title, content, date }
  }
}
</script>
