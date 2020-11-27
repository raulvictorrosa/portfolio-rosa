import { useGetUser } from 'actions/user'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import { formatDate } from 'helpers/functions'
import PortfolioApi from 'lib/api/portfolios'

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser()

  return (
    <BaseLayout user={dataU} loading={loadingU} navClass="transparent">
      <BasePage
        noWrapper
        indexPage
        metaTitle={`${portfolio.title} - Raul Rosa`}
        metaDescription={portfolio.description}
      >
        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              <h1 className="cover-heading">{portfolio.title}</h1>
              <p className="lead dates">
                {formatDate(portfolio.startDate)} -
                {formatDate(portfolio.endDate) || 'Present'}
              </p>
              <p className="lead info mb-0">
                {portfolio.jobTitle} | {portfolio.company} |{' '}
                {portfolio.location}
              </p>
              <p className="lead">{portfolio.description}</p>
              <p className="lead">
                <a
                  href={portfolio.companyWebSite}
                  target="_blank"
                  className="btn btn-lg btn-secondary"
                >
                  Visit Company
                </a>
              </p>
            </main>
          </div>
        </div>
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
