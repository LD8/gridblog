<template>
  <Layout>
    <div>
      <h1>Blogs</h1>
      <ul>
        <li v-for="(blog, i) in blogs" :key="i">
          <g-link :to="blog.node.path" exact>
            <h4>{{ blog.node.title }}</h4>
          </g-link>
          <p>{{ blog.node.description }}</p>
          <p>
            <span>Created: {{ blog.node.createdAt }}</span>
          </p>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
	blogs: allBlog {
    edges {
      node {
        id
        title
        createdAt
        description
        address
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "Blogs",
  metaInfo: {
    title: "Blog Posts",
  },
  computed: {
    blogs() {
      return this.$page.blogs.edges;
    },
  },
};
</script>

<style>
</style>