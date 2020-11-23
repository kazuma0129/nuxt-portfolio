<template>
  <v-col>
    <v-container>
      <v-card flat color="transparent" class="d-flex justify-center mt-10 mb-2">
        <h1 class="grey--text text--darken-2">Blog</h1>
      </v-card>
    </v-container>

    <v-container>
      <v-col align="center" class="mt-10">
        <v-col
          v-for="(post, key) in posts"
          :key="key"
          align="start"
          xs="12"
          sm="10"
          md="8"
          lg="8"
          xl="8"
          class="my-3"
        >
          <v-card
            :to="{ name: 'blogs-id', params: { id: post.id } }"
            color="transparent"
            flat
            hover
            nuxt
          >
            <v-card-title class="">
              {{ post.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ post.date.slice(0, 10) }}
            </v-card-subtitle>

            <v-card-text class="text-truncate">
              {{ post.content }}
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :to="{ name: 'blogs-id', params: { id: post.id } }"
                nuxt
                text
              >
                more
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-col>
    </v-container>
  </v-col>
</template>

<script>
import { firestore } from '~/plugins/firebase'

export default {
  name: 'Posts',
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    this.posts = await firestore
      .collection('fl_content')
      .orderBy('date', 'desc')
      .get()
      .then((snap) => {
        const array = []
        snap.forEach((doc) => {
          array.push(doc.data())
        })
        return array
      })
  }
}
</script>
