import ArticleCard from "./article-card"

const NewsContainer = (props) => {
  const posts = props.post.contents

  return (
    <div className="bg">
      <div className="box">
        {
          posts.map((p, index) => {
            return (
              <div key={index} className={'a' + (index + 1)}>
                <ArticleCard
                  slug={p.slug}
                  title={p.title}
                  thumbnail={p.thumbnail}
                  category={p.category}
                  createdAt={p.createdAt}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewsContainer
