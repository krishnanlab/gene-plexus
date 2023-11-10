import classNames from "classnames";
import Logo from "@/assets/logo.svg?react";
import Link from "@/components/Link";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Logo className={classes.logo} />
        <Link
          className={classNames([classes.link, classes["title-link"]])}
          to="/"
        >
          {import.meta.env.VITE_TITLE}
        </Link>
      </div>
      <nav className={classes.nav}>
        <Link className={classes.link} to="/new-analysis">
          New Analysis
        </Link>
        <Link className={classes.link} to="/analyses">
          Analyses
        </Link>
        <Link className={classes.link} to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
