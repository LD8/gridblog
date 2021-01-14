// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const repoApis = require('./src/api/repo.js')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collectionRepos = addCollection('Repo')
    const { data } = await repoApis.getRepoList()

    for (const d of data) {
      collectionRepos.addNode({
        id: d.id,
        name: d.name,
        address: d.html_url,
        description: d.description,
        apiUrl: d.url,
        createdAt: d.created_at,
        pushedAt: d.pushed_at,
        watchers: d.watchers,
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
