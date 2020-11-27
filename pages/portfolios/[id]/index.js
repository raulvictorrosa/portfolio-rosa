import { useGetUser } from 'actions/user'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import PortfolioApi from 'lib/api/portfolios'

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser()

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        title={portfolio.title}
        metaTitle={`${portfolio.title} - Raul Rosa`}
        metaDescription={portfolio.description}
      >
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  )
}

// This function is executed at the build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll()
  const portfolios = json.data

  // Get the paths we want pre-render based on portifolio ID
  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id }
    }
  })

  // fallback: false means that "not found pages" will be resolved into 404 page
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id)
  const portfolio = json.data
  return { props: { portfolio } }
}

export default Portfolio
