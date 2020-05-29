require('dotenv').config({ path: '.env.local'})
//console.info(`APIKEY is ${process.env.API_KEY}`)

module.exports = {
  experimental: {
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  env: {
    API_KEY: process.env.API_KEY
  }
}