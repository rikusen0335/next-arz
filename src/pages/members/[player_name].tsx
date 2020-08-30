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
        <section>
          <div className="container">

            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-4">
                <div className="flex items-center w-full mb-16 member-introduction">
                  <div className="mr-8">
                    <img
                      className="object-scale-down rounded-full"
                      src={getMemberAvatar(member)}
                      style={{
                        width: 256,
                        height: 256
                      }}
                    />
                  </div>
                  <div className="flex-row">
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
                      {member.stream_at &&
                        <a href={member.stream_at}>
                          <img className="w-12 mx-2" src="/images/twitch.png" />
                        </a>
                      }
                    </p>
                  </div>
                </div>

                <IntroductionSelection
                  title="Introduction"
                  description={member.description}
                />
                <IntroductionSelection
                  title="Comment"
                  description={member.comment}
                />
                <IntroductionSelection
                  title="Detail"
                  description={member.favorite_character}
                />

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
        </section>
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
