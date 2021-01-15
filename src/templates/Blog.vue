<template>
  <Layout>
    <div>
      <h1>{{ blog.title }}</h1>
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
  }
}
</page-query>

<script>
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
};
</script>

<style>
</style>