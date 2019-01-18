import { Component } from "react";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import BaseLayout from "../components/layouts/BaseLayout";

class About extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
          <h1>I am About Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(About);
