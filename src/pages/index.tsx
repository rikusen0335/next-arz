import Header from '~/components/header'
import Layout from '~/components/layout'
import Sponser from '~/components/sponser'
import IndexTitle from '~/components/indexTitle'
import NewsContainer from '~/components/newsContainer'
import Link from 'next/link'

import React from 'react';
import Swiper from 'react-id-swiper';

const Home = () => {
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
      <div>
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
            <NewsContainer />
            <div className="readMore">
              <Link href="/news"><a>READ MORE</a></Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  ])
}

export default Home