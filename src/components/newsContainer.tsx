import ArticleCard from "./articleCard"

const NewsContainer = () => {
  return (
    <div className="bg">
      <div className="box">
        <div className="Art1">
          <ArticleCard size="large" />
        </div>
        <div className="Art2">
          <ArticleCard size="small" />
        </div>
        <div className="Art3">
          <ArticleCard size="small" />
        </div>
        <div className="Art4">
          <ArticleCard size="small" />
        </div>
        <div className="Art5">
          <ArticleCard size="small" />
        </div>
        <div className="Art6">
          <ArticleCard size="large" />
        </div>
      </div>
    </div>
  )
}

export default NewsContainer