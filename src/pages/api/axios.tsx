import axios from "axios";

const url = 'https://arz-test.microcms.io/api/v1/'

export const getNewsList = async () => {
  const response = await axios.get(url + 'blog', {
    headers: { "X-API-KEY": process.env.API_KEY },
    params: {
      limit: 6
    }
  })
  
  return response
}

export const getFullNewsList = async () => {
  const response = await axios.get(url + 'blog', {
    headers: { "X-API-KEY": process.env.API_KEY },
    params: {
      limit: 10
    }
  })
  
  return response
}

export const getPost = async (slug) => {
  const response = await axios.get(url + 'blog', {
    headers: { "X-API-KEY": process.env.API_KEY },
    params: {
      filters: `slug[equals]${slug}`
    }
  })
  
  return response
}