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
          <Link className={slug === "home" ? "selected" : null} href="/">
            Home
          </Link>
          <Link className={slug === "login" ? "selected" : null} href="/login">
            Login
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
