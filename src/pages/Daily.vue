<template>
  <Layout>
    <br />
    <section class="posts">
      <v-layout class="d-flex flex-row justify-center flex-wrap">
        <PostList
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          :post="edge.node"
          class="mt-5"
        />
        <!-- {{ $page.allPost.edges }} -->
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
});
</script>
