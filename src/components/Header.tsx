import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <Link href="/"><img src="/images/arz_logo_tranparent_red.png"></img></Link>
      <ul>
        <li className="active"><Link href="/">HOME</Link></li>
        <li><Link href="/news">NEWS</Link></li>
        <li><Link href="/teams">TEAMS</Link></li>
      </ul>
    </header>
  )
}
