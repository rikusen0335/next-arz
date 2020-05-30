import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterEmbed = () => {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="ARZ_TEAM"
      theme="dark"
      options={{height: 600}}
    />
  )
}

export default TwitterEmbed