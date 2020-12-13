<template>
  <div>
    <Layout>
      <br />
      <v-layout class="d-flex jusrify-start mb-4" style="flex-wrap: nowrap">
        <div style="min-width: 70%">
          <div class="post-title">
            <!-- <h1>{{ $page.post.title }}</h1> -->
            <BlogHeading :title="$page.post.title" />
            <p class="post-date mt-5">投稿日：{{ $page.post.date }}</p>
            <div class="tags-list">
              <small style="color: #666666">この記事についているタグ</small>
              <div class="d-flex">
                <BlogTags
                  v-for="(item, index) in $page.post.tags"
                  :key="index"
                  :tag="item.id"
                />
              </div>
            </div>
          </div>
          <br />
          <div class="post-content">
            <p v-html="$page.post.content"></p>
          </div>
          <g-link to="/all-article" class="link">
            &larr; トップ画面に戻る
          </g-link>
        </div>
        <div class="flex-item">
          <h3 style="text-align: center">筆者情報</h3>
          <SelfIntroduction />
          <h3 style="text-align: center">新着記事</h3>
          <!-- {{ $page.allPost.edges }} -->
          <div v-for="(item, index) in $page.allPost.edges" :key="index">
            <PostList :post="item" />
          </div>
        </div>
      </v-layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import BlogHeading from "../components/BlogParts/BlogHeading.vue";
import PostList from "../components/PostList.vue";
import BlogTags from "../components/BlogParts/BlogTags.vue";
import SelfIntroduction from "../components/BlogParts/SelfIntroduction.vue";
export default defineComponent({
  components: {
    BlogHeading,
    PostList,
    BlogTags,
    SelfIntroduction,
  },
});
</script>

<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    content
    img
    date (format: "YYYY-MM-DD")
    description
    tags {
      id
    }
  }

  allPost (sortBy: "date", order: DESC, limit: 5) {
    edges {
      node {
        title
      }
    }
  }
}
</page-query>
