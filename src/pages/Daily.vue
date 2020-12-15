<template>
  <Layout>
    <br />
    <section class="posts">
      <v-layout class="d-flex flex-row justify-center flex-wrap">
        <h1>日常系の記事をあげる予定</h1>
      </v-layout>
    </section>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const state = {};

    return { state };
  },
  metaInfo: {
    title: "yuto's",
  },
});
</script>
