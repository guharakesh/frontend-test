require('dotenv').config()

module.exports = {
  serverRuntimeConfig: {
    YELP_API_KEY: process.env.YELP_API_KEY,
  },
}