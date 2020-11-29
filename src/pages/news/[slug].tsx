import Layout from '~/components/layout'

import dayjs from 'dayjs'
import TwitterEmbed from '~/components/twitter-embed'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import { getNewsBySlug } from '~/lib/axios'
import { News } from '~/types/type'

const Article = (props: News) => {
  const post = props
  const category: string[] = post.category ? post.category.replace(/\s/g, '').split(',') : ['カテゴリーなし']
  const imageUrl = post.thumbnail ? post.thumbnail.url : '/images/arz_gray_no_image.png'

  return (
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="article">
                <div className="title">
                  <span className="category">{category}</span>
                  <h2 className="no-margin line-64px">{post.title}</h2>
                </div>
                <div className="date">
                  <p>{dayjs(post.createdAt).format('YYYY.MM.DD')}</p>
                </div>
                <img className="thumbnail" src={imageUrl}></img>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                >
                </div>
                <div className="share">
                  <p>SHARE</p>
                  <TwitterShareButton title={post.title} url={'https://awakerapidzero.com/' + post.slug} related={['@ARZ_TEAM']}>
                    <TwitterIcon size={48} round={true} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
            <div className="col-1 mx-32px">
              <TwitterEmbed />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Article.getInitialProps = async (context) => {
  const { slug } = context.query
  const response = await getNewsBySlug(slug)
  let post = null

  if (response.status === 200 && response) {
    post = response.data.contents[0]
  }

  const pageProps = { pageTitle: post.title }

  //console.log(post)
  return { ...post, ...pageProps }
}

export default Article
