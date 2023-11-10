import { cloneElement, JSX, ReactNode } from "react";
import { FaLink } from "react-icons/fa";
import { kebabCase } from "lodash";
import classes from "./Heading.module.css";

type Props = {
  /** "indent" level */
  level: 1 | 2 | 3 | 4;
  icon?: JSX.Element;
  /** manually set hash link instead of automatically from children text */
  hash?: string;
  children: ReactNode;
};

const Heading = ({ level, icon = <></>, hash, children }: Props) => {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  const id = hash || (typeof children === "string" ? kebabCase(children) : "");
  return (
    <Tag id={id}>
      {cloneElement(icon, { className: classes.icon })}
      {children}
      {id && (
        <a href={"#" + id} className={classes.anchor}>
          <FaLink />
        </a>
      )}
    </Tag>
  );
};

export default Heading;
