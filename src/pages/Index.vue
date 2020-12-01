<template>
  <Layout>
    <br />
    <section class="posts">
      <PostList
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
      {{ $page.allPost.edges }}
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
        category
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
