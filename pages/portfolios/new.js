import { useCreatePortfolio } from 'actions/portfolios'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import PortfolioForm from 'components/PortfolioForm'
import Redirect from 'components/shared/Redirect'
import withAuth from 'hoc/withAuth'
import { Col, Row } from 'reactstrap'

const PortfolioNew = ({ user, loading: userLoading }) => {
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio()

  if (data) {
    return <Redirect to={'/portfolios'} />
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage className="portifolio-create-page" title="Create Portifolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioNew)('admin')
