<template>
  <div class="home mt-12">
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12>
          <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
        </v-flex>

        <v-flex mb-8>
          <h2 class="display-1 font-weight-bold mb-3">Welcome to Mahjong</h2>
          <p
            class="subheading font-weight-regular"
          >This app for calculated score and manage history of your playing mahjong.</p>
        </v-flex>

        <v-flex mb-5 xs12>
          <h2 class="headline font-weight-bold mb-8">Menu</h2>

          <v-layout justify-center>
            <v-btn class="subheading mx-3" target="_blank" @click="goToPlay()">対局開始</v-btn>

            <v-btn class="subheading mx-3" target="_blank" @click="goToConfig()">対局設定</v-btn>

            <v-btn class="subheading mx-3" target="_blank" @click="goToHistory()">対局履歴</v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    goToPlay() {
      this.$router.push("/play");
    },
    goToHistory() {
      this.$router.push("/history");
    },
    goToConfig() {
      this.$router.push("/config");
    }
  }
};
</script>
