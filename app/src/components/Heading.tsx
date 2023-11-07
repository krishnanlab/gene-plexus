import { JSX, ReactNode } from "react";
import { FaLink } from "react-icons/fa";
import { kebabCase } from "lodash";
import classes from "./Heading.module.css";

type Props = {
  /** manually set hash link instead of automatically from children text */
  hash?: string;
  /** "indent" level */
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
};

function Heading({ hash, level, children }: Props) {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  const id = hash || (typeof children === "string" ? kebabCase(children) : "");
  return (
    <Tag id={id}>
      {children}
      {id && (
        <a href={"#" + id} className={classes.anchor}>
          <FaLink />
        </a>
      )}
    </Tag>
  );
}

export default Heading;
