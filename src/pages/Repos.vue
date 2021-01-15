<template>
  <Layout>
    <div>
      <h1>Repositories</h1>
      <ul>
        <g-link v-for="(r, i) in $page.repos.edges" :key="i" :to="r.node.path">
          <li>
            <h4>
              <span>{{ r.node.name }}</span>
            </h4>

            <p>{{ r.node.description }}</p>
            <p>
              <span>Created: {{ r.node.createdAt.slice(0, 10) }}</span>
            </p>
          </li>
        </g-link>
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