import { FaEnvelope, FaGithub, FaHouse, FaTwitter } from "react-icons/fa6";
import classNames from "classnames";
import Link from "@/components/Link";
import classes from "./Footer.module.css";

/** at bottom of every page */
const Footer = () => {
  return (
    <footer className={classNames(classes.footer, "flex-col", "gap-sm")}>
      <div className={classNames(classes.icons, "flex-row", "gap-xs")}>
        <Link to="" tooltip="Krishnan Lab website">
          <FaHouse />
        </Link>
        <Link to="" tooltip="Email us">
          <FaEnvelope />
        </Link>
        <Link to="" tooltip="GitHub">
          <FaGithub />
        </Link>
        <Link to="" tooltip="Twitter">
          <FaTwitter />
        </Link>
      </div>

      <div>
        A project of the{" "}
        <Link to="https://www.thekrishnanlab.org/" noIcon={true}>
          Krishnan Lab
        </Link>{" "}
        &copy; 2023
      </div>
    </footer>
  );
};

export default Footer;
