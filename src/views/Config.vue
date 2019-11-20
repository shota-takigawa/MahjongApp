<template>
  <div class="mt-12" xs5>
    <v-row>
      <v-row justify="space-around">
        <v-col cols="10" class="mt-12">
          <v-select :items="style" v-model="config.style" label="サンマ or ヨンマ" solo></v-select>
          <v-slider v-model="config.betMoney" label="掛け金" min="1" max="20" thumb-label="always"></v-slider>
          <v-slider v-model="config.flyingPrice" label="ハコ値" min="1" max="20" thumb-label="always"></v-slider>
          <v-slider v-model="config.tip" label="チップ" min="1" max="10" thumb-label="always"></v-slider>
          <v-select :items="uma" v-model="config.uma" label="馬" solo></v-select>
          <v-btn @click="checkConfig()">設定保存</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: ["サンマ", "ヨンマ", "サンマ(4人)"],
      uma: ["15/5", "20/0"],
      config: []
    };
  },
  methods: {
    checkConfig() {}
  }
};
</script>