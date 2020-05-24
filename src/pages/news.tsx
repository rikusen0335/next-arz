import Layout from "~/components/layout"
import Header from "~/components/header"
import ArticleCard from "~/components/articleCard"
import TwitterEmbed from "~/components/twitterSidebar"

const News = () => {
  const news = [
    { title: '新HPを公開しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '情報を公開しました', category: '秘密', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '情報を公開しました', category: '秘密', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '情報を公開しました', category: '秘密', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: 'hoge', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '新規メンバーが参入しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
  ]

  return ([
    <Header />,
    <Layout home={false}>
      { news[0] ? (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="row">
                  { news.map((data, index) => {
                    return (
                      <div className="col-1" key={index}>
                        <ArticleCard {...data} />
                      </div>
                    )
                  })}
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