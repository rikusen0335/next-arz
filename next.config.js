//console.info(`APIKEY is ${process.env.API_KEY}`)

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    SITE_URL: process.env.SITE_URL,
    SITE_NAME: process.env.SITE_NAME,
    SITE_DESC: process.env.SITE_DESC,
  }
}