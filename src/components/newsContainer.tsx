import ArticleCard from "./articleCard"

const NewsContainer = () => {
  const newsL = { title: '新HPを公開しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'large' }
  const newsS = { title: '新HPを公開しました', category: 'お知らせ', date: new Date('2020-05-09T03:24:00'), size: 'small' }

  return (
    <div className="bg">
      <div className="box">
        <div className="Art1">
          <ArticleCard {...newsL} />
        </div>
        <div className="Art2">
          <ArticleCard {...newsS} />
        </div>
        <div className="Art3">
          <ArticleCard {...newsS} />
        </div>
        <div className="Art4">
          <ArticleCard {...newsS} />
        </div>
        <div className="Art5">
          <ArticleCard {...newsS} />
        </div>
        <div className="Art6">
          <ArticleCard {...newsL} />
        </div>
      </div>
    </div>
  )
}

export default NewsContainer