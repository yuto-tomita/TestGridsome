<template>
  <Layout>
    <br />
    <section class="posts">
      <v-layout class="d-flex justify-start flex-md-wrap" flat tile>
        <PostList
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          :post="edge.node"
          :status="`allArticlePage`"
          class="mt-5"
        />
        <!-- {{ $page.allPost.edges }} -->
      </v-layout>
    </section>
    <pagination
      v-if="$page.allPost.pageInfo.totalPages > 1"
      base="/all-article"
      :totalPages="$page.allPost.pageInfo.totalPages"
      :currentPage="$page.allPost.pageInfo.currentPage"
    />
  </Layout>
</template>

<script>
import PostList from "../components/PostList";
import pagination from "../components/pagination";
import { Pager } from "gridsome";
export default {
  components: {
    PostList,
    Pager,
    pagination,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<page-query>
query ($page: Int) {
  metadata {
    siteName
    siteDescription
  }
  allPost (sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate{
    totalCount
		pageInfo {
			totalPages
			currentPage
		}
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
.pager {
  display: inline-block;
  width: 100%;
  text-align: center;

  /* &__link {
		color: var(--link-color);
		text-align: center;
		text-decoration: none;
		padding: .5rem 1rem;

		&:hover:not(.active) {
			background-color: var(--bg-content-color);
			border-radius: 5px;
			color: var(--link-color);
		}
	} */
}
.pager a {
  width: 100px;
}
</style>

