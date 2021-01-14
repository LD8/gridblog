const request = require('../utils/request')

const getRepoList = () =>
  request({
    url: `/users/LD8/repos`,
  })

const getRepo = (name) =>
  request({
    url: `/repos/LD8/${name}`,
  })

module.exports = {
  getRepoList,
  getRepo,
}
