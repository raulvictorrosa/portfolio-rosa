import { useGetUser } from '@/actions/user'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import PortfolioApi from '@/lib/api/portfolios'
import { useRouter } from 'next/router'
import { Col, Row } from 'reactstrap'
import PortfolioCard from '../../components/PortfolioCard'

const Portfolios = ({ portfolios }) => {
  const router = useRouter()
  const { data: dataU, loading: loadingU } = useGetUser()

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage title="Portfolios" className="portfolio-page">
        <Row>
          {portfolios.map((portfolio) => (
            <Col
              key={portfolio._id}
              md="4"
              onClick={() => {
                router.push('/portfolios/[id]', `portfolios/${portfolio._id}`)
              }}
            >
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
