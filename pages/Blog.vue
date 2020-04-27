<template>
  <v-container fluid>
    <v-layout column align-center wrap>
      <v-flex xs12>
        <v-container fluid>
          <v-card flat color="transparent">
            <v-card-title
              primary-title
              class="justify-center display-1 font-weight-thin grey--text text--darken-2"
            >
              <span align-center jusify-center>My works</span>
            </v-card-title>
          </v-card>
        </v-container>
      </v-flex>

      <v-flex xs12>
        <v-container v-for="post in posts" :key="post.id" fluid>
          <v-card
            max-width="400"
            min-width="200"
            color="transparent"
            class="mx-auto font-weight-thin grey--text"
            align-center
            hover
          >
            <v-card-title align-center>
              <v-container>
                <div class="text-truncate">
                  <span class="headline grey--text text--darken-1 text-md-left">
                    {{ post.title }}
                  </span>
                  <br />
                  <v-divider></v-divider>
                  <span class="grey--text text--darken-2">
                    {{ post.date.slice(0, 10) }}
                  </span>
                  <br />
                  <br />
                  <span class="grey--text text--darken-2">
                    {{ post.content }}
                  </span>
                </div>
              </v-container>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :to="{ name: 'blogdist', params: { id: post.id } }"
                flat
                dark
                color="grey"
              >
                続きを読む
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
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
