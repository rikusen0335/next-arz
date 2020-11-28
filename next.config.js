//console.info(`APIKEY is ${process.env.API_KEY}`)
const axios = require('axios');

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    SITE_URL: process.env.SITE_URL,
    SITE_NAME: process.env.SITE_NAME,
    SITE_DESC: process.env.SITE_DESC,
  },

  images: {
    domains: ['images.microcms-assets.io'],
  },

  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/news': { page: '/news' },
      '/teams': { page: '/teams' },
      '/about': { page: '/about' },
      '/history': { page: '/history' },
      '/sponsor': { page: '/sponsor' },
    };

    const news = async () => {
      const response = await axios.get(process.env.API_URL + 'news', {
        headers: { "X-API-KEY": process.env.API_KEY },
        params: {
          limit: 99
        }
      })
      return response.data.contents
    };

    const teams = async () => {
      const response = await axios.get(process.env.API_URL + 'team', {
        headers: { "X-API-KEY": process.env.API_KEY },
        params: {
          limit: 99
        }
      })
      return response.data.contents
    };

    const members = async () => {
      const response = await axios.get(process.env.API_URL + 'member', {
        headers: { "X-API-KEY": process.env.API_KEY },
        params: {
          limit: 99
        }
      })
      return response.data.contents
    };

    await news()
      .then(item => {
        item.map(post => {
          paths[`/news/${post.slug}`] = { page: '/news/[slug]', query: { slug: post.slug } }
        });
      })

    await teams()
      .then(item => {
        item.map(team => {
          paths[`/teams/${team.slug}`] = { page: '/teams/[slug]', query: { slug: team.slug } }
        });
      })

    await members()
      .then(item => {
        item.map(member => {
          paths[`/members/${member.player_name}`] = { page: '/members/[player_name]', query: { player_name: member.player_name } }
        });
      })

    return paths;
  }
}
