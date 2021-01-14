const request = require('../utils/request')

const getBlogList = () =>
  request({
    url: `/users/LD8/gists`,
  })

const getBlog = (id) =>
  request({
    url: `/gists/${id}`,
  })

module.exports = {
  getBlogList,
  getBlog,
}
