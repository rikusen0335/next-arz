import Layout from "~/components/layout"
import Header from "~/components/header"
import ArticleCard from "~/components/articleCard"
import TwitterEmbed from "~/components/twitterEmbed"
import { getNewsList } from "~/pages/api/axios"
import { useState, useEffect } from "react"

const News = () => {
  const [loading, setLoading] = useState(true)
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    const fetchNewsList = async () => {
      const response = await getNewsList()

      if (response.isSuccess === true && response) {
        setLoading(false)
        setNewsList(response.data.contents)
        console.log(newsList)
      }
    }
    fetchNewsList()
  }, [])

  const news = [
    { title: '新HPを公開しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '情報を公開しました', category: '秘密', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '情報を公開しました', category: '秘密', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '情報を公開しました', category: '秘密', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: 'hoge', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '新規メンバーが参入しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
  ]

  if (loading) {
    return 'Loading...'
  }

  return ([
    <Header />,
    <Layout home={false}>
      { newsList[0] ? (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-4 justify-center">
                <div className="row">
                  { newsList.map((data, index) => {
                    return (
                      <div className="col-1" key={index}>
                        <ArticleCard {...data} />
                      </div>
                    )
                  }) }
                </div>
              </div>
              <div className="col-1">
                <TwitterEmbed />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h3>記事が見つかりませんでした。</h3>
      )}
    </Layout>
  ])
}

export default News