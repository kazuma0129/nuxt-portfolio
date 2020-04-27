<template>
  <v-col>
    <v-container>
      <v-carousel
        hide-delimiters
        delimiter-icon="stop"
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-layout>
          </template>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container>
      <v-container>
        <v-card flat color="transparent">
          <v-card-title>
            <div class="black--text">
              <v-container>
                <span>所属</span>
              </v-container>
            </div>
            <v-spacer></v-spacer>
            <div class="grey--text text--darken-1">
              <v-layout row>
                <span>2016/04 ~ </span>
                <v-spacer></v-spacer>
                <span>公立はこだて未来大学</span>
              </v-layout>
              <v-layout row>
                <span>2016/04 ~ </span>
                <v-spacer></v-spacer>
                <span>サッカー部（現部長）</span>
              </v-layout>
              <v-layout row>
                <span>2018/10 ~ </span>
                <v-spacer></v-spacer>
                <span>高度ICT演習 はこだてSweets</span>
              </v-layout>
              <v-layout row>
                <span>2019/04 ~ </span>
                <v-spacer></v-spacer>
                <span>Interaction Media Lab</span>
              </v-layout>
              <v-layout row>
                <span>2020/04 ~ </span>
                <v-spacer></v-spacer>
                <span>株式会社サイバーエージェント</span>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
      </v-container>

      <v-divider></v-divider>

      <v-container>
        <v-card flat color="transparent">
          <v-card-title>
            <div class="black--text">
              <v-container>
                <span>スキルセット</span>
              </v-container>
            </div>
            <v-spacer></v-spacer>
            <div class="grey--text text--darken-1">
              <v-layout row>
                <span>言語 - </span>
                <v-spacer></v-spacer>
                <span>Ruby, Python, JavaScript, Swift</span>
              </v-layout>
              <v-layout row> </v-layout>
              <v-layout row>
                <span>バックエンド - </span>
                <v-spacer></v-spacer>
                <span>Ruby on Rails, Node.js</span>
              </v-layout>
              <v-layout row>
                <span>フロントエンド - </span>
                <v-spacer></v-spacer>
                <span>Vue.js</span>
              </v-layout>
              <v-layout row>
                <span>ネイティブアプリ - </span>
                <v-spacer></v-spacer>
                <span>iOS, flutter</span>
              </v-layout>
              <v-layout row>
                <span>デザイン - </span>
                <v-spacer></v-spacer>
                <span>Photoshop, Illustrator, XD</span>
              </v-layout>
              <v-layout row>
                <span>その他 - </span>
                <v-spacer></v-spacer>
                <span>Alexa Skill, Google Assistant</span>
              </v-layout>
              <v-layout row>
                <span>クラウド - </span>
                <v-spacer></v-spacer>
                <span>GCP, AWS</span>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
      </v-container>

      <v-divider></v-divider>

      <v-container>
        <v-card flat color="transparent">
          <v-card-title>
            <div class="black--text">
              <v-container>
                <span>資格など</span>
              </v-container>
            </div>
            <v-spacer></v-spacer>
            <div class="grey--text text--darken-1">
              <v-layout row>
                <span>2013/11 - </span>
                <v-spacer></v-spacer>
                <span>ITパスポート 合格</span>
              </v-layout>
              <v-layout row>
                <span>2016/03 - </span>
                <v-spacer></v-spacer>
                <span>普通自動車運転免許 取得</span>
              </v-layout>
              <v-layout row>
                <span>2017/11 - </span>
                <v-spacer></v-spacer>
                <span>基本情報記述者試験 合格</span>
              </v-layout>
              <v-layout row>
                <span>2018/04 - </span>
                <v-spacer></v-spacer>
                <span>中型二輪自動車運転免許 取得</span>
              </v-layout>
              <v-layout row>
                <span>2018/12 - </span>
                <v-spacer></v-spacer>
                <span>応用情報技術者試験 合格</span>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
      </v-container>

      <v-divider></v-divider>

      <v-container>
        <v-card flat color="transparent">
          <v-card-title>
            <div class="black--text">
              <v-container>
                <span>趣味</span>
              </v-container>
            </div>
            <v-spacer></v-spacer>
            <div class="grey--text text--darken-1">
              <span>ツーリング, 服飾, 海外ドラマ, 旅行</span>
              <br />
            </div>
          </v-card-title>
        </v-card>
      </v-container>

      <v-divider></v-divider>
    </v-container>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-site-1d580.appspot.com/o/46191485651_760dd148a5_o.jpg?alt=media&token=d0ded812-672b-4461-9e85-15b2b6261fa5'
        },
        {
          src:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-site-1d580.appspot.com/o/smp.png?alt=media&token=3e27774e-8ee0-4a34-90b8-8f98ecc04fa6'
        },
        {
          src:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-site-1d580.appspot.com/o/_DSC0142.jpg?alt=media&token=f15957a8-6c52-425b-a1e7-4c729420b5a8'
        },
        {
          src:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-site-1d580.appspot.com/o/IMG_1666.JPG?alt=media&token=f45e2a5b-642d-408f-9849-6318ba9090c3'
        }
      ]
    }
  }
}
</script>
