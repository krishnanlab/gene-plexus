import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import classNames from "classnames";
import Logo from "@/assets/logo.svg?react";
import Link from "@/components/Link";
import Tooltip from "@/components/Tooltip";
import classes from "./Header.module.css";

/** at top of every page */
const Header = () => {
  /** nav menu expanded/collapsed state */
  const [open, setOpen] = useState(false);

  return (
    <header className={classes.header}>
      {/* logo and text */}
      <div className={classes.title}>
        <Logo className={classes.logo} />
        <Link
          className={classNames(classes.link, classes["title-link"])}
          to="/"
        >
          {import.meta.env.VITE_TITLE}
        </Link>
      </div>

      {/* nav toggle */}
      <Tooltip content={open ? "Collapse menu" : "Expand menu"}>
        <button
          className={classes.toggle}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </Tooltip>

      {/* nav menu */}
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
