import { createPortfolio } from '@/actions/portfolios'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import PortfolioForm from '@/components/PortfolioForm'
import withAuth from '@/hoc/withAuth'
import { Col, Row } from 'reactstrap'

const PortfolioNew = ({ user, loading: userLoading }) => {
  const _createPortfolio = (data) => {
    createPortfolio(data)
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage className="portifolio-create-page" title="Create Portifolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={_createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioNew)('admin')
