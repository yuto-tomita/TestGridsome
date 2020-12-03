<template>
  <div>
    <Layout>
      <div>aaa</div>
    </Layout>
  </div>
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
