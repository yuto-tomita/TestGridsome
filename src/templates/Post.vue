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
    </Layout>
  </div>
</template>

<page-query>
query Post ($id: ID!) {
	post: post (id: $id) {
    id
		title
		path
    date (format: "YYYY/MM/DD")
    content
    timeToRead
	}
}
</page-query>
