const axios = require('axios')

const service = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 15000,
})

module.exports = service
