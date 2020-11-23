import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import Masthead from 'components/shared/Masthead'
import { Col, Row } from 'reactstrap'
import { withAuth } from 'utils/auth0'

const Dashboard = ({ user, loading }) => {
  return (
    <BaseLayout navClass="transparent" user={user} loading={false}>
      <Masthead imagePath="/images/home-bg.jpg" />
      <BasePage className="dashboard-page blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export const getServerSideProps = withAuth()('admin')

export default Dashboard
