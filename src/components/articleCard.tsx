import Link from 'next/link'

type CardProp = {
  size: string
}

const ArticleCard: React.FC<CardProp> = props => {
  function attachClass(): string {
    let classNames: string[] = ['articleCard']
    if (props.size == 'small') {
      classNames.push('small')
    } else if (props.size == 'large') {
      classNames.push('large')
    }
    return classNames.join(' ')
  }

  return (
    <div className={attachClass()}>
      <Link href="/post/1"><a></a></Link>
      <div className="background-image"></div>
      <div className="content">
        <span className="category">お知らせ</span>
        <h3>新HPを公開しました</h3>
        <small className="date">2020.05.09</small>
      </div>
    </div>
  )
}
export default ArticleCard