import Header from "~/components/header"
import Layout from "~/components/layout"
import JumbotronTitle from "~/components/jumbotronTitle"
import TeamCard from "~/components/teamCard"
import TwitterEmbed from "~/components/twitterEmbed"
import dayjs from "dayjs"
import { TwitterShareButton, TwitterIcon } from "react-share"
import { PlayerCard } from "~/components/playerCard"

const TeamMember = (props: any) => {

  // const post = props
  const post = {
    slug: 'apex-legends',
    title: 'Apex Legends部門'
  }
  // const imageUrl = post.thumbnail ? post.thumbnail.url : '/images/arz_gray_no_image.png'
  const imageUrl = '/images/arz_gray_no_image.png'

  return ([
    <Header />,
    <Layout home={false}>
      <JumbotronTitle title="TEAMS" />
      <section>
        <div className="container">

          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-4">
              <div className="article">
                <div className="title">
                  <h2 className="no-margin line-64px">{post.title}</h2>
                </div>
                <img src={imageUrl}></img>
                <div
                  className="content"
                >
                  <h3 className="memberTitle">MEMBERS</h3>

                  <div className="grid grid-cols-3">
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <TwitterEmbed />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  ])
}

TeamMember.getInitialProps = async (context) => {
  const { slug } = context.query

  const pageProps = { pageTitle: slug }

  //console.log(post)
  return { ...pageProps }
}

export default TeamMember