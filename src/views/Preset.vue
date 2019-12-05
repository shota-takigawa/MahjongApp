<template>
  <div class="about">
    <v-form class="mt-12">
      <v-container>
        <v-row>
          <v-col cols="24" sm="6">
            <v-text-field v-model="first" label="First Player" filled></v-text-field>
          </v-col>

          <v-col cols="24" sm="6">
            <v-text-field v-model="last" label="Second Player" filled></v-text-field>
          </v-col>

          <v-col cols="24" sm="6">
            <v-text-field v-model="last" label="Third Player" filled></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn color="primary" dark @click="goPlay()">GoPlay!!</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  methods: {
    goPlay() {
      this.$router.push("/play");
      //対局開始への遷移、configのstoreへの保管
    }
  }
}
</script>