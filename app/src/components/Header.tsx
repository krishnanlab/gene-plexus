import Logo from "@/assets/logo.svg?react";
import Link from "@/components/Link";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Logo className={classes.logo} />
        <Link className={classes.link} to="/">
          <h1>{import.meta.env.VITE_TITLE}</h1>
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
}

export default Header;
