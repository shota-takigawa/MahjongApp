<template>
  <div class="mt-12" xs5>
    <v-row>
      <v-row justify="space-around">
        <v-col cols="10" class="mt-12">
          <v-select
            :items="style"
            v-model="config.style"
            label="サンマ or ヨンマ"
            solo
          ></v-select>
          <v-slider
            v-model="config.betMoney"
            label="掛け金"
            min="1"
            max="20"
            thumb-label="always"
          ></v-slider>
          <v-slider
            v-model="config.flyingPrice"
            label="ハコ値"
            min="1"
            max="20"
            thumb-label="always"
          ></v-slider>
          <v-slider
            v-model="config.tip"
            label="チップ"
            min="1"
            max="10"
            thumb-label="always"
          ></v-slider>
          <v-select
            :items="uma"
            v-model="configUma.uma"
            @click="setUma()"
            label="馬"
            solo
          ></v-select>
          <v-row justify="center">
            <v-btn color="primary" dark @click.stop="dialog = true">
              設定保存
            </v-btn>

            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="headline"
                  >この設定を登録しますか</v-card-title
                >

                <v-card-text>
                  テストのため、設定の保存はできません。すぐできるようにします。
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="green darken-1" text @click="dialog = false">
                    キャンセル
                  </v-btn>

                  <v-btn color="green darken-1" text @click="goPlay()">
                    保存
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
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
      uma: ["15/5", "20/0", "0"],
      config: [],
      //style,tip,betMoney,flyingPrice,oneUma,twoUma
      configUma: [],
      dialog: false,
      oneUma: 0,
      twoUma: 0
    };
  },
  methods: {
    setConfig() {
      if (this.configUma.uma == "15/5") {
        this.config.oneUma = 15;
        this.config.twoUma = 5;
      } else if (this.configUma.uma == "20/0") {
        this.config.oneUma = 20;
        this.config.twoUma = 0;
      } else {
        this.config.oneUma = 0;
        this.config.twoUma = 0;
      }
    },
    goPlay() {
      this.dialog = false;
      this.$router.push("/play");
      //対局開始への遷移、configのstoreへの保管
    }
  }
};
</script>
