import Link from 'next/link'
import dayjs from 'dayjs'

type CardProp = {
  title: string
  category?: string
  createdAt: Date
  updatedAt?: Date
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
  const category = props.category ? props.category.replace(/\s/g, '').split(',') : ['カテゴリーなし']
  const date = props.updatedAt ? props.updatedAt : props.createdAt

  return (
    <div className={attachClass()}>
      <Link href="/news/hello-world"><a></a></Link>
      <div className="background-image"></div>
      <div className="content">
        { category.map(cat => {
          return(<span className="category">{ cat }</span>)
        })}
        <h3>{ props.title }</h3>
        <small className="date">{ dayjs(date).format('YYYY.MM.DD') }</small>
      </div>
    </div>
  )
}
export default ArticleCard