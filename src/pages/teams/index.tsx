import JumbotronTitle from "~/components/jumbotronTitle"
import Header from "~/components/header"
import Layout from "~/components/layout"
import TeamCard from "~/components/teamCard"
import TwitterEmbed from "~/components/twitterEmbed"

const Teams = () => {
  const data = {
    slug: 'apex-legends',
    title: 'Apex Legends部門'
  }
  return ([
    <Header />,
    <Layout home={false}>
      <JumbotronTitle title="TEAMS" />
      <section>
        <div className="container">
          
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-4">
              <div className="grid grid-cols-2 gap-4">
                <TeamCard {...data} />
                <TeamCard {...data} />
                <TeamCard {...data} />
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

Teams.getInitialProps = async () => {
  const pageProps = { pageTitle: 'Teams' }
  return pageProps
}

export default Teams