import { Component } from "react";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import BaseLayout from "../components/layouts/BaseLayout";

class Secret extends Component {
  static getInitialProps() {
    const superSecretValue = "Super Secret Value";

    return { superSecretValue };
  }

  render() {
    const { superSecretValue } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Secret Page</h1>
          <p>Secret Content Here</p>
          <h2>{superSecretValue}</h2>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
