import Link from "next/link"

type PropType = {
  slug: string
  title: string
  thumbnail?: {
    url: string
  }
}

const TeamCard = (props: PropType) => {
  const imageUrl = props.thumbnail ? props.thumbnail.url : '/images/arz_gray_no_image.png'

  return (
    <div className="teamCard">
      <Link href="/teams/[slug]" as={`/teams/${props.slug}`}><a></a></Link>
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="content">
        <p>{ props.title }</p>
      </div>
    </div>
  )
}

export default TeamCard