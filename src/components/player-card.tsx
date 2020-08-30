import { useEffect, useState } from "react"
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js'
import Link from "next/link"
import { Member } from "~/types/type"
import { getMemberAvatar } from "~/lib/utils"

export const PlayerCard = (props: Member) => {
  const member = props
  const imageUrl = '/images/satonoya_elf_touka.png'
  const [size, setSize] = useState(0)

  useEffect(() => {
    // Match to grid width
    setSize(document.getElementById('card').clientWidth)
  }, [])

  const style = {
    width: size,
    height: size
  }

  const ProfileAvatar = () => {
    return (
      <img
        className="object-contain"
        src={getMemberAvatar(member)}
        style={style}
      />
    )
  }

  return (
    <Link href="/members/[player_name]" as={`/members/${member.player_name}`}>
      <div id="card" className="relative w-full h-full cursor-pointer player-card">
        <ProfileAvatar />
        <div
          className="absolute bottom-0 flex items-center justify-between w-full px-5 py-4"
          style={{ backgroundColor: 'rgba(45, 47, 52, 0.9)' }}
        >
          <span className="text-xl font-bold text-white">{member.nick_name}</span>
          <Icon
            path={mdiChevronRight}
            size={1}
            color="white"
          />
        </div>
      </div>
    </Link>
  )
}
