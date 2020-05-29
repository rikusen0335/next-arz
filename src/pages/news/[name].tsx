import Header from '~/components/header'
import Layout from '~/components/layout'
import dayjs from 'dayjs'
import TwitterEmbed from '~/components/twitterEmbed'
import ArticleCard from '~/components/articleCard'

const Article = () => {
  const data = {
    title: '新しいHPを公開しました',
    category: 'お知らせ',
    date: new Date('2020-05-09T03:24:00'),
    content: 'うんちぶり'
  }

  return ([
    <Header />,
    <Layout home={false}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="article">
                <div className="title">
                  <h2 className="no-margin line-64px">{ data.title }</h2>
                </div>
                <div className="date">
                  <p>{ dayjs(data.date).format('YYYY.MM.DD') }</p>
                </div>
                <img src="/images/valorant.jpg"></img>
                <div className="content">
                  <p>{ data.content }</p>
                </div>
              </div>
            </div>
            <div className="col-1 mx-32px">
              <TwitterEmbed />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  ])
}

export default Article