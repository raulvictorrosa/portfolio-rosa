import { Component } from "react";
import { Col, Row } from "reactstrap";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import BaseLayout from "../components/layouts/BaseLayout";
import PortifolioCreateForm from "../components/portifolios/PortifolioCreateForm";

class PortifolioNew extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portifolio-create-page"
          title="Create new Portifolio"
        >
          <Row>
            <Col md="6">
              <PortifolioCreateForm />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(PortifolioNew);
