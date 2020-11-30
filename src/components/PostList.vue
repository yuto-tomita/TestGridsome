<template>
  <div class="post-list">
    <hr />
    <p class="date" v-html="post.date"></p>
    <h3 class="title" v-html="post.title"></h3>
    <p class="description" v-html="post.description"></p>
    <b>{{ post.timeToRead }} min read</b> &nbsp;
    <g-link :to="post.path" class="read">
      Read More
      <span class="visuallyhidden">about {{ post.title }}</span>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
</style>