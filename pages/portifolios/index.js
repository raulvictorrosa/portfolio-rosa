import { useGetUser } from '@/actions/user'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import PortfolioApi from '@/lib/api/portfolios'
import { Fragment } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row
} from 'reactstrap'

const Portfolios = ({ portfolios }) => {
  const { data: dataU, loading: loadingU } = useGetUser()

  const renderPortfolios = (portfolios) =>
    portfolios.map((portfolio) => (
      <Col md="4" key={portfolio._id}>
        <Fragment key={portfolio._id}>
          <span>
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">
                Some Position
              </CardHeader>
              <CardBody>
                <p className="portfolio-card-city">Some Location</p>
                <CardTitle className="portfolio-card-title">
                  Some Company
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Some Description
                </CardText>
                <div className="readMore"> </div>
              </CardBody>
            </Card>
          </span>
        </Fragment>
      </Col>
    ))

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage className="portfolio-page" title="Portifolio">
        <Row>
          {/* {loading === true && <p>Loading data...</p>}
          {error && <div className="alert alert-danger">{error.message}</div>} */}
          {portfolios && renderPortfolios(portfolios)}
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
