<template>
  <Layout>
    <h1>英語学習関連の記事をあげる予定</h1>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
  metaInfo: {
    title: "About us",
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    function increment(): void {
      state.count++;
    }
    return {
      state,
      increment,
    };
  },
});
</script>
