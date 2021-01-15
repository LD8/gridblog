<template>
  <Layout>
    <div>
      <h1>{{ blog.title }}</h1>
      <div v-html="mdToHtml(blog.content)"></div>
      <button @click="$router.back()">Go Back</button>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blog (id: $id) {
    title
    createdAt
    description
    address
    content
  }
}
</page-query>

<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default {
  name: "Blog",
  // this must be a function in order to access the query result
  metaInfo() {
    return {
      title: this.$page.blog.title,
    };
  },
  computed: {
    blog() {
      return this.$page.blog;
    },
  },
  methods: {
    mdToHtml(mdContent) {
      return md.render(mdContent);
    },
  },
};
</script>

<style>
</style>