<template>
  <Layout>
    <br />
    <section class="posts">
      <v-layout class="d-flex justify-center flex-wrap">
        <PostList
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
          class="mt-5"
        />
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
  tag (id: "teck") {
  	title
    belongsTo {
      totalCount
      edges {
        node {
          ...on Post {
            id
            title
            description
            date (format: "YYYY-MM-DD")
            path
            timeToRead
          }
        }
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
