import axios from "axios";
import { Component } from "react";
import BasePage from "../components/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";

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
      <li key={index}>
        <Link route={`/portifolio/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  }

  render() {
    const { posts } = this.props;
    // console.log(this.props);
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Portifolio Page</h1>
          <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portifolio;
