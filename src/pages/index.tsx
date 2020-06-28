import Header from '~/components/header'
import Layout from '~/components/layout'
import Sponser from '~/components/sponser'
import IndexTitle from '~/components/indexTitle'
import NewsContainer from '~/components/newsContainer'
import Link from 'next/link'

import React from 'react';
import Swiper from 'react-id-swiper';

import { getNewsList } from "~/pages/api/axios"

const Home = (props) => {
  const sponsers = [
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' },
    { website: 'https://devmia.net', logo: '/images/satonoya_elf_touka.png' }
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
    <Header />,
    <Layout home>
      <div className="main">
        {sponsers[0] && (
          <section id="sponser">
            <div className="container">
              <IndexTitle title="SPONSERS" />

              <Swiper {...swiperParams}>
                { sponsers.map((data) => {
                  return (
                    <div>
                      <Sponser {...data} />
                    </div>
                  )
                }) }
              </Swiper>
            </div>
          </section>
        )}

        <section id="news">
          <div className="container">
            <IndexTitle title="NEWS" />
            <NewsContainer post={props} />
            <div className="readMore">
              <Link href="/news"><a>READ MORE</a></Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  ])
}

Home.getInitialProps = async () => {
  const response = await getNewsList()
  let post = null

  if (response.status === 200 && response) {
    post = response.data
  }

  const pageProps = { pageTitle: 'Home' }

  return { ...post, ...pageProps }
}

export default Home