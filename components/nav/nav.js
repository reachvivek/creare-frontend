import React from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <img
            className="page-header-img"
            src="/assets/logo.png"
            alt="my image"
          ></img>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            index
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            page-two
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            page-three
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
