import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import { Col, Row } from 'reactstrap'

const Cv = () => (
  <BaseLayout>
    <BasePage metaTitle="My experiences - Raul Rosa">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <iframe
            style={{ width: '100%', height: '800px' }}
            src="/Raul Rosa.pdf"
          />
        </Col>
      </Row>
    </BasePage>
  </BaseLayout>
)

export default Cv
