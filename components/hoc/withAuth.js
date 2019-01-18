import React from "react";
import BasePage from "../BasePage";
import BaseLayout from "../layouts/BaseLayout";

export default function(Component) {
  return class withAtuh extends React.Component {
    static async getInitialProps(args) {
      const pageProps =
        (await Component.getInitialProps) && Component.getInitialProps(args);

      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth;
      if (isAuthenticated) {
        return <Component {...this.props} />;
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
      return this.renderProtectedPage();
    }
  };
}
