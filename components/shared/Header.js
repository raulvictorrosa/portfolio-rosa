import Link from "next/link";
import { Component } from "react";
import "../../styles/main.scss";

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <p>{title}</p>
        {this.props.children}
        <p className="customClass">I am styled P elemtent</p>
        <p className="customClassFromFile">I am styled P elemtent</p>
        <Link href="/">
          <a style={{ fontSize: "20px" }}>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portifolios">
          <a>Portifolio</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <style jsx="true">{`
          a {
            font-size: 20px;
          }
          .customClass {
            color: red;
          }
        `}</style>
      </>
    );
  }
}

export default Header;
