<template>
  <Layout>
    <div>
      <h1>Repositories</h1>
      <ul>
        <li v-for="(r, i) in $page.repos.edges" :key="i">
          <g-link :to="r.node.path">
            <h4>
              <span>{{ r.node.name }}</span>
            </h4>
          </g-link>

          <p>{{ r.node.description }}</p>
          <p>
            <span>Created: {{ r.node.createdAt.slice(0, 10) }}</span>
          </p>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  repos: allRepo {
    edges {
      node {
        id
        name
        path
        address
        description
        apiUrl
        createdAt
        pushedAt
        watchers
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "Repos",
  metaInfo: {
    title: "Repositories",
  },
};
</script>

<style>
</style>