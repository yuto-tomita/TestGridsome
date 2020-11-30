<template>
  <Layout>
    {{ $page.metadata.siteName }}
    <br />
    <section class="posts">
      <PostList
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
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
        timeToRoad
        description
        date
        path
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
