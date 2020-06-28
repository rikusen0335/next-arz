import Header from "~/components/header"
import Layout from "~/components/layout"
import JumbotronTitle from "~/components/jumbotronTitle"

const TeamMember = () => {
  const data = {
    slug: 'apex-legends',
    title: 'Apex Legends部門'
  }
  return ([
    <Header />,
    <Layout home={false}>
      <JumbotronTitle title="TEAMS" />
      <section>
        <div className="container">
        </div>
      </section>
    </Layout>
  ])
}

TeamMember.getInitialProps = async (context) => {
  const { slug } = context.query

  const pageProps = { pageTitle: slug }

  //console.log(post)
  return {...pageProps }
}

export default TeamMember