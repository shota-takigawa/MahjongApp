<template>
  <div class="mt-12" xs5>
    <v-row>
      <v-row justify="space-around">
        <v-col cols="10" class="mt-12">
          <v-select :items="style" label="サンマ or ヨンマ" solo></v-select>
          <v-slider v-model="betMoney" label="掛け金" min="1" max="20" thumb-label="always"></v-slider>
          <v-slider v-model="flyingPrice" label="ハコ" min="1" max="20" thumb-label="always"></v-slider>
          <v-slider v-model="tip" label="チップ" min="1" max="10" thumb-label="always"></v-slider>
          <v-select :items="uma" label="馬" solo></v-select>
          <v-btn>設定保存</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      betMoney: 0,
      flyingPrice: 0,
      tip: 0,
      style: ["サンマ", "ヨンマ", "サンマ(4人)"],
      uma: ["15/5","20/0"]
    };
  }
};
</script>