import { Component } from "react";
import BasePage from "../components/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

class Secret extends Component {
  renderSecretPage() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1>I am Secret Page</h1>
            <p>Secret Content Here</p>
          </BasePage>
        </BaseLayout>
      );
    } else {
      return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1>
              You are not authenticated. Please Login to access this page.
            </h1>
          </BasePage>
        </BaseLayout>
      );
    }
  }

  render() {
    return this.renderSecretPage();
  }
}

export default Secret;
