import Link from "@/components/Link";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <span>
        A project of the{" "}
        <Link to="https://www.thekrishnanlab.org/">Krishnan Lab</Link> &copy;
        2023
      </span>
    </footer>
  );
}

export default Footer;
