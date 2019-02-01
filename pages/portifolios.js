import axios from "axios";
import { Component, Fragment } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import BasePage from "../components/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

class Portifolio extends Component {
  static async getInitialProps() {
    let posts = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data.splice(0, 10);
    } catch (error) {
      console.error(error);
    }

    return { posts };
  }

  renderPosts(posts) {
    return posts.map((post, index) => (
      <Col md="4">
        <Fragment key={index}>
          <span>
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">
                Some Position {index}
              </CardHeader>
              <CardBody>
                <p className="portfolio-card-city"> Some Location {index} </p>
                <CardTitle className="portfolio-card-title">
                  Some Company {index}
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Some Description {index}
                </CardText>
                <div className="readMore"> </div>
              </CardBody>
            </Card>
          </span>
        </Fragment>
      </Col>
    ));
  }

  render() {
    const { posts } = this.props;
    // console.log(this.props);
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portifolio">
          <Row>{this.renderPosts(posts)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portifolio;
