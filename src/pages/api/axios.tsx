import axios from "axios";

const url = 'https://rikusen-test.microcms.io/api/v1/'

export const getNewsList = async () => {
  try {
    const response = await axios.get(url + 'blog', {
      headers: { "X-API-KEY": process.env.API_KEY }
    })
    return { isSuccess: true, data: response.data, error: null };
  } catch (error) {
    return { isSuccess: false, data: null, error };
  }
}