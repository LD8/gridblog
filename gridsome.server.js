// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const repoApis = require('./src/api/repo.js')
const blogApis = require('./src/api/blog.js')
// const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collectionRepos = addCollection('Repo')
    const { data: repoData } = await repoApis.getRepoList()
    // const { data } = await axios.get('https://api.github.com/users/ld8/repos')
    // console.log('axios data!!! ', data)
    for (const d of repoData) {
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

    function getObjsFirstKey(fileObj) {
      return Object.keys(fileObj)[0]
    }

    const collectionBlog = addCollection('Blog')
    const { data: blogData } = await blogApis.getBlogList()
    for (const b of blogData) {
      const { id, files, created_at, description, html_url } = b
      // const { raw_url } = files[fileKey]
      const {
        data: { files: contentFile },
      } = await blogApis.getBlog(id)
      collectionBlog.addNode({
        id,
        title: getObjsFirstKey(files),
        createdAt: created_at,
        description,
        content: contentFile[getObjsFirstKey(contentFile)].content,
        address: html_url,
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
