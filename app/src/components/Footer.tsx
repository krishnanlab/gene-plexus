import { FaEnvelope, FaGithub, FaHome, FaTwitter } from "react-icons/fa";
import Link from "@/components/Link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <Link to="" tooltip="Krishnan Lab website">
          <FaHome />
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
