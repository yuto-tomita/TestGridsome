<template>
  <v-card class="mx-auto" :style="status ? 'width: 30%' : ''">
    <!-- {{ status }} -->
    <g-image
      height="200px"
      width="300px"
      src="../../content/posts/img/HelloWorld.png"
    ></g-image>
    <v-card-title><p v-html="post.title"></p></v-card-title>
    <v-card-subtitle class="pb-0">
      <p v-html="post.description"></p>
      <p class="grey--text">この記事は約{{ post.timeToRead }}分で読めます</p>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange" text :to="post.path">
        <g-link :to="post.path"></g-link> 記事を読む
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  props: ["post", "status"],
};
</script>

<style>
</style>