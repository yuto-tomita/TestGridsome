<template>
  <!-- <div class="post-list">
    <p class="date" v-html="post.date"></p>
    <h3 class="title" v-html="post.title"></h3>
    <p class="description" v-html="post.description"></p>
    <b>{{ post.timeToRead }} min read</b> &nbsp;
    <g-link :to="post.path" class="read">
      Read More
      <span class="visuallyhidden">about {{ post.title }}</span>
    </g-link>
  </div> -->
  <v-card class="mx-auto" max-width="400">
    <!-- <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img> -->
    <v-card-title><p v-html="post.title"></p></v-card-title>
    <v-card-subtitle class="pb-0">
      <p v-html="post.description"></p>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> Share </v-btn>

      <v-btn color="orange" text> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  props: ["post"],
};
</script>

<style>
</style>