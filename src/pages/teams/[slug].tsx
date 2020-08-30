import Header from "~/components/header"
import Layout from "~/components/layout"
import JumbotronTitle from "~/components/jumbotronTitle"
import TeamCard from "~/components/team-card"
import TwitterEmbed from "~/components/twitter-embed"
import dayjs from "dayjs"
import { TwitterShareButton, TwitterIcon } from "react-share"
import { PlayerCard } from "~/components/player-card"
import { Team, Member } from "~/types/type"
import { getTeamBySlug, getMemberByTeamID } from "~/lib/axios"
import { getTeamThumbnail } from "~/lib/utils"

const TeamMemberList = (props: any) => {
  const team: Team = props.team
  const members: Member[] = props.members

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
                  <h2 className="no-margin line-64px">{team.name}</h2>
                </div>
                <img className="thumbnail" src={getTeamThumbnail(team)}></img>
                <div
                  className="content"
                >
                  <h3 className="memberTitle">MEMBERS</h3>

                  <div className="grid grid-cols-3">
                    {members &&
                      members.map((member) => {
                        return <PlayerCard {...member} />
                      })
                    }
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

TeamMemberList.getInitialProps = async (context) => {
  // Team
  const { slug } = context.query
  const teamResponse = await getTeamBySlug(slug)

  let team: Team = null

  if (teamResponse.status === 200 && teamResponse) {
    team = teamResponse.data.contents[0]
  }
  // END


  // Members
  const teamID = team.id
  const membersResponse = await getMemberByTeamID(teamID)

  let members: Member[] = []

  if (membersResponse.status === 200 && membersResponse) {
    members = membersResponse.data.contents
  }
  // END

  const pageProps = { pageTitle: team.name }

  // console.log(team)
  return { members: members, team: team, ...pageProps }
}

export default TeamMemberList
