import Link from 'next/link'
import dayjs from 'dayjs'

type CardProp = {
  slug: string
  title: string
  thumbnail?: {
    url: string
  }
  category?: string
  createdAt: Date
  updatedAt?: Date
  size?: string
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

  const category: string[] = props.category ? props.category.replace(/\s/g, '').split(',') : ['カテゴリーなし']
  const imageUrl = props.thumbnail ? props.thumbnail.url : '/images/arz_gray_no_image.png'

  return (
    <div className={attachClass()}>
      <Link href="/news/[slug]" as={`/news/${props.slug}`}><a></a></Link>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="content">
        {category.map((cat, index) => {
          return (<span key={index} className="category">{cat}</span>)
        })}
        <h3>{props.title}</h3>
        <small className="date">{dayjs(props.createdAt).format('YYYY.MM.DD')}</small>
      </div>
    </div>
  )
}
export default ArticleCard
