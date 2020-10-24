import Header from "~/components/header"
import Layout from "~/components/layout"
import JumbotronTitle from "~/components/jumbotronTitle"
import TwitterEmbed from "~/components/twitter-embed"
import { TwitterShareButton, TwitterIcon } from "react-share"
import { IntroductionSelection } from "~/components/introduction-section"
import { getMemberByName } from "~/lib/axios"

import { Member } from '~/types/type'
import { getMemberAvatar } from "~/lib/utils"

const TeamMember = (props: Member) => {
  const member = props

  return (
    <div>
      <Header />
      <Layout home={false}>
        <JumbotronTitle title="TEAMS" />
        <div className="wrapper">
          <div className="container">

            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-4">
                <div className="flex items-center w-full mx-auto mb-16 member-introduction">
                  <div className="flex-row mx-auto">
                    <p className="mb-3 text-2xl font-bold">{member.team.name}</p>
                    <p
                      className="px-3 mb-4 text-4xl font-bold"
                      style={{ backgroundColor: '#1F2023' }}
                    >
                      {member.player_name}
                      <span className="text-2xl">&nbsp;({member.nick_name})</span>
                    </p>
                    <p className="flex items-center mb-3">
                      {member.twitter_id &&
                        <a href={'https://twitter.com/' + member.twitter_id}>
                          <img className="w-12 mx-2" src="/images/twitter.png" />
                        </a>
                      }
                      {member.twitch_id &&
                        <a href={'https://twitch.tv/' + member.twitch_id}>
                          <img className="w-12 mx-2" src="/images/twitch.png" />
                        </a>
                      }
                      {member.youtube_url &&
                        <a href={member.youtube_url}>
                          <img className="w-12 mx-2" src="/images/youtube.png" />
                        </a>
                      }
                    </p>
                  </div>
                </div>

                {member.introduction && (
                  <IntroductionSelection
                    title="Introduction"
                    description={member.introduction}
                  />
                )}
                {member.comment && (
                  <IntroductionSelection
                    title="Comment"
                    description={member.comment}
                  />
                )}
                {member.description && (
                  <IntroductionSelection
                    title="Detail"
                    description={member.description}
                  />
                )}

                <div className="mt-16 share">
                  <p>SHARE</p>
                  <TwitterShareButton title={member.nick_name} url={'https://awakerapidzero.com/members/' + member.player_name} related={['@ARZ_TEAM']}>
                    <TwitterIcon size={48} round={true} />
                  </TwitterShareButton>
                </div>
              </div>

              <div className="col-span-1">
                <TwitterEmbed />
              </div>
            </div>

          </div>
        </div>
      </Layout>
    </div>
  )
}

TeamMember.getInitialProps = async (context) => {
  const { player_name } = context.query
  const response = await getMemberByName(player_name)
  let member = null

  if (response.status === 200 && response) {
    member = response.data.contents[0]
  }

  //console.log(member)

  const pageProps = { pageTitle: member.nick_name }

  return { ...member, ...pageProps }
}

export default TeamMember
