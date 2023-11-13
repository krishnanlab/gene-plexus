import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classNames from "classnames";
import Logo from "@/assets/logo.svg?react";
import Button from "@/components/Button";
import Link from "@/components/Link";
import classes from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

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

      <Button
        className={classes.toggle}
        icon={open ? <FaTimes /> : <FaBars />}
        onClick={() => setOpen(!open)}
        tooltip={open ? "Collapse menu" : "Expand menu"}
        aria-expanded={open}
        aria-controls="nav"
      />

      <nav id="nav" className={classes.nav} data-open={open}>
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
