import Logo from "@/assets/logo.svg?react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Logo className={classes.logo} />
        <h1>{import.meta.env.VITE_TITLE}</h1>
      </div>
      <nav className={classes.nav}>
        <a className={classes.link} href="">
          New Analysis
        </a>
        <a className={classes.link} href="">
          Analyses
        </a>
        <a className={classes.link} href="">
          About
        </a>
      </nav>
    </header>
  );
}

export default Header;
