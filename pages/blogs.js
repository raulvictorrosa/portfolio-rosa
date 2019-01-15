import { Component } from "react";
import BasePage from "../components/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

class Blogs extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Blogs Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blogs;
