import Layout from "~/components/layout"
import Header from "~/components/header"
import ArticleCard from "~/components/articleCard"
import TwitterEmbed from "~/components/twitterEmbed"
import { getNewsList } from "~/pages/api/axios"
import { useState, useEffect } from "react"

const Test = () => {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    const fetchNewsList = async () => {
      const response = await getNewsList()

      if (response.isSuccess === true && response) {
        setNewsList(response.data)
        console.log(newsList)
      }
    }
    fetchNewsList()
  }, [])

  return ([
    <div>
      { newsList.map((data, index) => {
        return (
          <div className="col-1" key={index}>
            <ArticleCard {...data} />
          </div>
        )
      }) }
    </div>
  ])
}

export default Test