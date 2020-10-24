import JumbotronTitle from "~/components/jumbotronTitle"
import Header from "~/components/header"
import Layout from "~/components/layout"
import TeamCard from "~/components/team-card"
import TwitterEmbed from "~/components/twitter-embed"
import { Team } from "~/types/type"
import { getTeams } from "~/lib/axios"

const Teams = (props: any) => {
  const teams: Team[] = props.teams

  return ([
    <Header />,
    <Layout home={false}>
      <JumbotronTitle title="TEAMS" />
      <div className="wrapper">
        <div className="container">

          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-4">
              <div className="grid grid-cols-2 gap-4">
                {teams &&
                  teams.map((team) => {
                    return <TeamCard {...team} />
                  })
                }
              </div>
            </div>
            <div className="col-span-1">
              <TwitterEmbed />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  ])
}

Teams.getInitialProps = async () => {
  const pageProps = { pageTitle: 'Teams' }

  const response = await getTeams()
  let teams = null

  if (response.status === 200 && response) {
    teams = response.data.contents
  }

  // console.log(teams)

  return { teams: teams, ...pageProps }
}

export default Teams
