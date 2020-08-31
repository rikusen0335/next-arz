import Link from "next/link"
import { Team } from "~/types/type"

const TeamCard = (props: Team) => {
  const team = props
  const imageUrl = props.thumbnail ? props.thumbnail.url : '/images/arz_gray_no_image.png'

  return (
    <div className="teamCard">
      <Link href="/teams/[slug]" as={`/teams/${team.slug}`}><a></a></Link>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="content">
        <p className="name">{team.name}</p>
      </div>
    </div>
  )
}

export default TeamCard
