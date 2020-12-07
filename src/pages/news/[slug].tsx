import Layout from '~/components/layout'

import dayjs from 'dayjs'
import TwitterEmbed from '~/components/twitter-embed'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import { getNews, getNewsBySlug } from '~/lib/axios'
import { News } from '~/types/type'
import { GetStaticPaths, GetStaticProps } from 'next'

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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getNews();

  const paths = response.data.contents.map((item: News) => `/news/${item.slug}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // ファイル名の[slug].tsxに対応
  const slug = params.slug as string
  const response = await getNewsBySlug(slug)

  let post = null

  if (response.status === 200 && response) {
    post = response.data.contents[0]
  }

  const pageProps = { pageTitle: post.title }

  //console.log(post)
  return { props: { ...post, ...pageProps } }
}

export default Article
