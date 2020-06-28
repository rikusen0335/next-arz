import JumbotronTitle from "~/components/jumbotronTitle"
import Header from "~/components/header"
import Layout from "~/components/layout"
import TeamCard from "~/components/teamCard"

const Teams = () => {
  return ([
    <Header />,
    <Layout home={false}>
      <JumbotronTitle title="TEAMS" />
      <section>
        <div className="container">
          <TeamCard />
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