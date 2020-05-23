import Link from 'next/link'
import dayjs from 'dayjs'

type CardProp = {
  title: string
  category?: string
  date: Date
  size: string
}

const ArticleCard: React.FC<CardProp> = props => {
  function attachClass(): string {
    let classNames: string[] = ['articleCard']
    if (props.size == 'small') {
      classNames.push('small')
    } else if (props.size == 'medium') {
      classNames.push('medium')
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
        <small className="date">{ dayjs(props.date).format('YYYY.MM.DD') }</small>
      </div>
    </div>
  )
}
export default ArticleCard