<template>
  <Layout>
    <div>
      <h1>{{ $page.repo.name }}</h1>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!){
	repo (id: $id) {
    name
    address
    description
    apiUrl
    createdAt
    pushedAt
    watchers
  }
}
</page-query>

<script>
export default {
  name: "Repo",
  metaInfo() {
    return {
      title: this.$page.repo.name,
    };
  },
  computed: {
    // repo() {
    //   return this.$page.repo;
    // },
  },
};
</script>

<style>
</style>