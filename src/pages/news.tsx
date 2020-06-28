import Layout from "~/components/layout"
import Header from "~/components/header"
import ArticleCard from "~/components/articleCard"
import TwitterEmbed from "~/components/twitterEmbed"
import { getFullNewsList } from "~/pages/api/axios"
import { useState, useEffect } from "react"
import JumbotronTitle from "~/components/jumbotronTitle"

const News = props => {
  let newsList = props.contents
  console.log(newsList)

  return ([
    <Header />,
    <Layout home={false}>
      <JumbotronTitle title="NEWS" />
      { newsList[0] ? (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-4 justify-center">
                <div className="row">
                  { newsList.map((data, index) => {
                    return (
                      <div className="col" key={index}>
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

News.getInitialProps = async () => {
  const response = await getFullNewsList()
  let post = null

  if (response.status === 200 && response) {
    post = response.data
  }

  const pageProps = { pageTitle: 'News' }

  return { ...post, ...pageProps }
}

export default News