import { useGetUser } from '@/actions/user'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import PortfolioApi from '@/lib/api/portfolios'
import { Col, Row } from 'reactstrap'
import PortfolioCard from '../../components/PortifolioCard'

const Portfolios = ({ portfolios }) => {
  const { data: dataU, loading: loadingU } = useGetUser()

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage className="portfolio-page" title="Portifolio">
        <Row>
          {portfolios.map((portfolio) => (
            <Col key={portfolio._id} md="4">
              <PortfolioCard portfolio={portfolio} />
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

// This function is called during the build time
// Improved performance of page
// It will create static page with dynamic data
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll()
  const portfolios = json.data
  return {
    props: {
      portfolios
    }
  }
}

export default Portfolios
