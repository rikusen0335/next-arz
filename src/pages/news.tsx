import Layout from "~/components/layout"
import Header from "~/components/header"

const News = () => {
  const news = [
    { title: '新HPを公開しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '情報を公開しました', category: '秘密', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: 'hoge', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
    { title: '新規メンバーが参入しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'medium' },
  ]

  return ([
    <Header />,
    <Layout home={false}>
      <div className="row">
        { news[0] ? (
          <h2>TEST</h2>
        ) : (
          <h3>記事が見つかりませんでした。</h3>
        )}
        <div className="column"></div>
      </div>
    </Layout>
  ])
}

export default News