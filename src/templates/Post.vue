<template>
  <div>
    <Layout>
      <br />
      <g-link to="/" class="link">&larr; Go Back</g-link>
      <div class="post-title">
        <h1>{{ $page.post.title }}</h1>
        <p class="post-date">
          {{ $page.post.date }}
          {{ $page.post.timeToRead }}
          {{ $page.post.totalCount }}
          {{ $page.post.id }}
        </p>
      </div>
      <div class="post-content">
        <p v-html="$page.post.content"></p>
      </div>
      {{ $page }}
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({});
</script>

<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    content
    img
    description
    tags {
      id
    }
  }
}
</page-query>
