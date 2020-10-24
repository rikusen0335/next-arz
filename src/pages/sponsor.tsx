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
                  <h2 className="no-margin line-64px">スポンサー様について</h2>
                </div>
                <div
                  className="mt-8 content"
                >
                  <p>
                    AwakeRapid:Zeroは現在スポンサー募集を行っておりません。<br />
                    理由としましてはチーム発足から1年経ちますが大きな実績はあまりない次第です。<br />
                    チームの目標としましては "公式大会での常勝化" 、 "Vtuber参画によるe-Sports文化のさらなる発展" を目指して活動をしていく所存でございます。<br />
                    <br />
                    我々は隈なくスポンサーを募集するチームというより<br />
                    応援していただける企業様と親密な関係を築き上げていきたいと思っております。<br />
                    我々のチームのはさらに磨きをあげて実績や成果を得ることが出来た際には企業様のニーズに合わせたプランを構築し、展開させていただければなと存じます。<br />
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

export default About
