import axios from "axios";

const url = process.env.API_URL
const apiKey = process.env.API_KEY

/*
 * News
 */

const news = 'news'

export const getNewsLimited = async () => {
  const response = await axios.get(url + news, {
    headers: { "X-API-KEY": apiKey },
    params: {
      limit: 6
    }
  })

  return response
}

// TODO: そのうちページネーションを作るとかように改造しないと
export const getNews = async () => {
  const response = await axios.get(url + news, {
    headers: { "X-API-KEY": apiKey },
    params: {
      limit: 99
    }
  })

  return response
}

export const getNewsBySlug = async (slug: string) => {
  const response = await axios.get(url + news, {
    headers: { "X-API-KEY": apiKey },
    params: {
      filters: `slug[equals]${slug}`
    }
  })

  return response
}


/*
 * Teams
 */

const teams = 'team'

export const getTeams = async () => {
  const response = await axios.get(url + teams, {
    headers: { "X-API-KEY": apiKey },
    params: {
      limit: 99
    }
  })

  return response
}

export const getTeamBySlug = async (slug: string) => {
  const response = await axios.get(url + teams, {
    headers: { "X-API-KEY": apiKey },
    params: {
      filters: `slug[equals]${slug}`
    }
  })

  return response
}


/*
 * Members
 */

const members = 'member'

export const getMembers = async () => {
  const response = await axios.get(url + members, {
    headers: { "X-API-KEY": apiKey },
    params: {
      limit: 99
    }
  })

  return response
}

export const getMemberByTeamID = async (teamID: string) => {
  const response = await axios.get(url + members, {
    headers: { "X-API-KEY": apiKey },
    params: {
      filters: `team[equals]${teamID}`,
      limit: 99
    }
  })

  return response
}


export const getMemberByName = async (slug: string) => {
  const response = await axios.get(url + members, {
    headers: { "X-API-KEY": apiKey },
    params: {
      filters: `player_name[equals]${slug}`
    }
  })

  return response
}


/*
 * History
 */

const history = 'history'

export const getHistories = async () => {
  const response = await axios.get(url + history, {
    headers: { "X-API-KEY": apiKey },
    params: {
      limit: 99,
      orders: 'date'
    }
  })

  return response
}
