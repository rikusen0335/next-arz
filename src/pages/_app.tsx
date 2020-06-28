import '~/styles/global.scss'
import 'swiper/swiper.scss'
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  const metaTitle = `${pageProps.pageTitle} | ${process.env.SITE_NAME}`
  const SEO = {
    title: metaTitle,
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      url: process.env.SITE_URL,
      site_name: metaTitle,
    },
    twitter: {
      handle: '@ARZ_TEAM',
      site: process.env.SITE_URL,
      cardType: 'summary_large_image',
    },
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
