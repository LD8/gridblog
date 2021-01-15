<template>
  <Layout>
    <div>
      <h1>Repositories</h1>
      <ul>
        <li v-for="(r, i) in $page.repos.edges" :key="i">
          <g-link :to="r.node.path">
            <span>{{ r.node.name }}</span>
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
* {
  box-sizing: border-box;
}
h1,
h2,
h3 {
  color: rgb(50, 50, 50);
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
li {
  position: relative;
  list-style: none;
  background-color: rgb(250, 250, 250);
  box-shadow: 0 0 8px rgb(215, 215, 215);
  border-radius: 3px;
  margin: 10px;
  padding: 10px 15px;
  min-height: 100px;
  min-width: 200px;
  transition: 0.3s all ease-in-out;
}
li:hover {
  transform: scale(1.05);
}
p span {
  font-size: 12px;
}
button {
  margin: 20px 0;
}
</style>