import Header from '~/components/header'
import Layout from '~/components/layout'
import Sponser from '~/components/sponser'
import IndexTitle from '~/components/index-title'
import NewsContainer from '~/components/news-container'
import Link from 'next/link'

import React from 'react';
import Swiper from 'react-id-swiper';

import { getNewsLimited } from "~/lib/axios"

const Home = (props) => {
  const sponsers = [
  ]

  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 8,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  }

  return ([
    <Header key={0} />,
    <Layout key={1} home>
      <div className="main">
        {sponsers[0] && (
          <div className="wrapper" id="sponser">
            <div className="container">
              <IndexTitle title="SPONSERS" />

              <Swiper {...swiperParams}>
                {sponsers.map((data, index) => {
                  return (
                    <div key={index}>
                      <Sponser {...data} />
                    </div>
                  )
                })}
              </Swiper>
            </div>
          </div>
        )}

        <div className="wrapper" id="news">
          <div className="container">
            <IndexTitle title="NEWS" />
            <NewsContainer post={props} />
            <div className="readMore">
              <Link href="/news"><a>READ MORE</a></Link>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  ])
}

Home.getInitialProps = async () => {
  const response = await getNewsLimited()
  let post = null

  if (response.status === 200 && response) {
    post = response.data
  }

  const pageProps = { pageTitle: 'Home' }

  return { ...post, ...pageProps }
}

export default Home
