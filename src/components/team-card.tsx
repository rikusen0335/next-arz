import Link from "next/link"
import Image from 'next/image'
import { Team } from "~/types/type"

const TeamCard = (props: Team) => {
  const team = props
  const imageUrl = props.thumbnail ? props.thumbnail.url : '/images/arz_gray_no_image.png'

  return (
    <Link href="/teams/[slug]" as={`/teams/${team.slug}`}><a>
      <div className="teamCard">
        <img className="background-image" src={imageUrl} />
        <div className="content">
          <p className="name">{team.name}</p>
        </div>
      </div>
    </a></Link>
  )
}

export default TeamCard
