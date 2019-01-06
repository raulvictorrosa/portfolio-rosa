import axios from "axios";
import { withRouter } from "next/router";
import { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class Portifolio extends Component {
  static async getInitialProps({ query }) {
    const portifolioId = query.id;
    let portifolio = {};
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${portifolioId}`
      );
      portifolio = res.data;
    } catch (error) {
      console.error(error);
    }
    return { portifolio };
  }

  render() {
    const { portifolio } = this.props;

    return (
      <BaseLayout>
        <h1>{portifolio.title}</h1>
        <p>{portifolio.body}</p>
        <p>{portifolio.id}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portifolio);
