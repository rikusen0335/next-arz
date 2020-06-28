import '~/styles/global.scss'
import 'swiper/swiper.scss'
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  const metaTitle = `${pageProps.pageTitle} | ${process.env.SITE_NAME}`
  const metaDescription = process.env.SITE_DESC
  const metaUrl = process.env.SITE_URL

  const SEO = {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      url: metaUrl,
      site_name: metaTitle,
    },
    twitter: {
      handle: '@ARZ_TEAM',
      site: metaUrl,
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
