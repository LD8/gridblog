<template>
  <Layout>
    <div>
      <h1>{{ repo.name }}</h1>
      <div>
        <h3>{{ repo.description }}</h3>
        <p>
          <span>Created: {{ repo.createdAt }}</span
          ><br />
          <span>Latest Push: {{ repo.pushedAt }}</span
          ><br />
          <span>Watchers: {{ repo.watchers }}</span>
        </p>
      </div>
      <div>
        <a :href="repo.apiUrl">Visit Repo</a>
      </div>
      <button @click="$router.back()">Go Back</button>
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
  // this must be a function in order to access the query result
  metaInfo() {
    return {
      title: this.$page.repo.name,
    };
  },
  computed: {
    repo() {
      return this.$page.repo;
    },
  },
};
</script>

<style>
</style>