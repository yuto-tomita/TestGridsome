<template>
  <Layout>
    <h1>About us</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
    </p>
    <button @click="increment">count up {{ state.count }}</button>
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
