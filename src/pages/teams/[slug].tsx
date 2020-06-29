import Header from "~/components/header"
import Layout from "~/components/layout"
import JumbotronTitle from "~/components/jumbotronTitle"
import TeamCard from "~/components/teamCard"
import TwitterEmbed from "~/components/twitterEmbed"
import dayjs from "dayjs"
import { TwitterShareButton, TwitterIcon } from "react-share"

const TeamMember = (props: any) => {
  const data = {
    slug: 'apex-legends',
    title: 'Apex Legends部門'
  }

  const post = props
  const category: string[] = post.category ? post.category.replace(/\s/g, '').split(',') : ['カテゴリーなし']
  const imageUrl = post.thumbnail ? post.thumbnail.url : '/images/arz_gray_no_image.png'

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
                  <span className="category">{category}</span>
                  <h2 className="no-margin line-64px">{post.title}</h2>
                </div>
                <div className="date">
                  <p>{dayjs(post.createdAt).format('YYYY.MM.DD')}</p>
                </div>
                <img src={imageUrl}></img>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                >
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