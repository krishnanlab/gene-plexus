import { FaEnvelope, FaGithub, FaHome, FaTwitter } from "react-icons/fa";
import Link from "@/components/Link";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <Link to="">
          <FaHome />
        </Link>
        <Link to="">
          <FaEnvelope />
        </Link>
        <Link to="">
          <FaGithub />
        </Link>
        <Link to="">
          <FaTwitter />
        </Link>
      </div>

      <div>
        A project of the{" "}
        <Link to="https://www.thekrishnanlab.org/">Krishnan Lab</Link> &copy;
        2023
      </div>
    </footer>
  );
}

export default Footer;
