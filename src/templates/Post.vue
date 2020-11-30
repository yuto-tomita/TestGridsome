<template>
  <div>
    <Layout>
      <br />
      <g-link to="/" class="link">&larr; Go Back</g-link>
      <div class="post-title">
        <h1>{{ $page.post.title }}</h1>
        <p class="post-date">
          {{ $page.post.date }} |
          {{ $page.post.timeToRead }}
          min read
        </p>
      </div>
      <div class="post-content">
        <p v-html="$page.post.content"></p>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query Post ($path: String!) {
	post: post (path: $path) {
		id
		title
		timeToRoad
		description
		date
		path
	}
}
</page-query>
