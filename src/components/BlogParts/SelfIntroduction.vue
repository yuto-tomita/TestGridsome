<template>
  <!-- <v-card> -->
  <div class="mt-3">
    <div style="text-align: center">
      <v-avatar size="62">
        <g-image src="../../assets/images/self.jpeg"></g-image>
      </v-avatar>
      <h4>ゆうと</h4>
    </div>
    <div class="d-flex justify-center">
      <g-link to="https://twitter.com/qualidea04">
        <v-fa
          class="mt-3 sns-icon"
          color="#1DA1F2"
          :icon="['fab', 'twitter']"
        ></v-fa>
      </g-link>
      <g-link to="https://github.com/yuto-tomita">
        <v-fa
          class="ml-7 mt-3 sns-icon"
          color="#211F1F"
          :icon="['fab', 'github']"
        ></v-fa>
      </g-link>
    </div>
    <v-card-text>
      21歳のフロントエンドエンジニアです。 現在お仕事でVue.jsを書いています。
      仕事やプライベートで得た知見をブログを通じ発信していくつもりです！<br />
      このブログはGridsomeというJAMStackフレームワークのライブラリで作成しています。
    </v-card-text>
  </div>
  <!-- </v-card> -->
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.sns-icon:hover {
  opacity: 0.8;
}
</style>