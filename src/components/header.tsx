import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <Link href="/"><img src="/images/arz_logo_tranparent_red.png"></img></Link>
      <ul>
        <li>
          <Link href="/"><a>HOME</a></Link>
        </li>
        <li>
          <Link href="/news"><a>NEWS</a></Link>
        </li>
        <li>
          <Link href="/teams"><a>TEAMS</a></Link>
        </li>
        <li>
          <Link href="/about"><a>ABOUT</a></Link>
        </li>
        <li>
          <Link href="/history"><a>HISTORY</a></Link>
        </li>
      </ul>
    </header>
  )
}
