import Layout from "~/components/layout"
import ArticleCard from "~/components/article-card"
import TwitterEmbed from "~/components/twitter-embed"
import { getNews } from "~/lib/axios"
import JumbotronTitle from "~/components/jumbotronTitle"
import { GetStaticPaths } from "next"

const News = (props: { contents: any }) => {
  let newsList = props.contents

  return (
    <Layout>
      <JumbotronTitle title="NEWS" />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="justify-center col-4">
              <div className="row">
                {newsList.map((data, index) => {
                  return (
                    <div className="col" key={index}>
                      <ArticleCard {...data} />
                    </div>
                  )
                })}
                {!newsList[0] && (
                  <h3>まだ記事は投稿されていません。</h3>
                )}
              </div>
            </div>
            <div className="col-1">
              <TwitterEmbed />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

News.getInitialProps = async () => {
  const response = await getNews()
  let post = null

  if (response.status === 200 && response) {
    post = response.data
  }

  const pageProps = { pageTitle: 'News' }

  return { ...post, ...pageProps }
}

export default News
