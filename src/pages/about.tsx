import Header from '~/components/header'
import Layout from '~/components/layout'

import TwitterEmbed from '~/components/twitter-embed'
import { TwitterShareButton, TwitterIcon } from 'react-share'

const About = () => {
  return ([
    <Header />,
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="article">
                <div className="title">
                  <h2 className="no-margin line-64px">ABOUT</h2>
                </div>
                <div
                  className="mt-8 content"
                >
                  <p>
                    現在のe-Sportsの認知度は国内で41.1％と言われています。<br />
                    プロ野球やサッカーに対して決して自慢のできる高い数字ではありませんが、2018年の新語・流行語大賞ノミネート30語が発表され、<br />
                     "e-Sports" という単語がメディアに取り上げられることも１つの理由で急速に上がってきております。<br />
                    <br />
                    我々の AwakeRapid: Zero は2019年7月25日に設立をいたしました。<br />
                    名前の由来は "知名度ゼロの状態から急速に観衆を揺さぶる" という意味を込めております。<br />
                    <br />
                    そして頭にはMedia e-Sports Teamとついております理由につきましては、<br />
                    そう遠くない未来にテレビでもe-Sportsの試合が野球やサッカーと同じように見れるようになる時代が来ると思い時代に先駆け、<br />
                    将来的にはメディアの露出をメインに活動していくことを目標にしております。<br />
                    <br />
                    どうか皆様のご声援をよろしくお願い致します。
                  </p>
                </div>
                <div className="share">
                  <p>SHARE</p>
                  <TwitterShareButton title="ABOUT" url={'https://awakerapidzero.com/about'} related={['@ARZ_TEAM']}>
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
    </Layout>
  ])
}

About.getInitialProps = async () => {
  const pageProps = { pageTitle: 'About' }

  return { ...pageProps }
}

export default About
