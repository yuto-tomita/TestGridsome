<template>
  <Layout>
    <br />
    <section class="posts">
      <v-layout class="d-flex justify-start flex-md-wrap" flat tile>
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

<script>
import PostList from "../components/PostList";
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        description
        date (format: "YYYY-MM-DD")
        path
        img
        timeToRead
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

