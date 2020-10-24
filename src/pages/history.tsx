import Header from '~/components/header'
import Layout from '~/components/layout'

import TwitterEmbed from '~/components/twitter-embed'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import dayjs from 'dayjs'
import { getHistories } from '~/lib/axios'
import { HistoryType } from '~/types/type'

const History = ({ contents }) => {
  return ([
    <Header />,
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="article">
                <div className="title">
                  <h2 className="no-margin line-64px">活動経歴</h2>
                </div>
                <div
                  className="mt-8 content"
                >
                  <ul>
                    {contents.map((data: HistoryType, index: number) => {
                      return (
                        <li className="p-2 my-8 ml-4 border-section">
                          <p className="ml-4">
                            <span className="text-xl">{data.event}</span>
                          </p>
                          <p className="ml-8">
                            <span className="text-xs font-bold color-primary">DATE</span>
                            <span className="m-3 text-2xl font-bold">{dayjs(data.date).format('YYYY.MM.DD')}</span>
                            <span className="text-xs font-bold color-primary">RESULTS</span>
                            <span className="m-3 text-xl font-bold">{data.participation}</span>
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="share">
                  <p>SHARE</p>
                  <TwitterShareButton title="ABOUT" url={'https://awakerapidzero.com/history'} related={['@ARZ_TEAM']}>
                    <TwitterIcon size={48} round={true} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
            <div className="col-1 mx-32px">
              <TwitterEmbed />
            </div>
          </div>
        </div>
      </div>
    </Layout >
  ])
}

History.getInitialProps = async () => {
  const response = await getHistories()
  let data = null

  if (response.status === 200 && response) {
    data = response.data
  }

  const pageProps = { pageTitle: 'History' }

  return { ...data, ...pageProps }
}

export default History;
