<template>
  <div>
    <v-app>
      <v-container>
        <v-app-bar color="accent" app dark>
          <v-toolbar-title class="ml-10 font-weight-bold text-h4">
            ~mynote~
          </v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
          <template v-slot:extension>
            <v-tabs v-model="state.tab" align-with-title class="ml-16">
              <v-tab key="tab-all" to="/all-article">全ての記事</v-tab>
              <v-tab key="tab-teck" to="/">技術系記事</v-tab>
              <v-tab key="tab-english" to="/about">英語学習</v-tab>
              <v-tab key="tab-daily" to="/daily">日常</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-main>
          <slot />
        </v-main>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const state = reactive({
      tab: "",
      tabs: ["技術系", "英語学習", "日常"],
    });

    return {
      state,
    };
  },
});
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
</style>
