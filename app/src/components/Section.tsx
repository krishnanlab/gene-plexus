import { ReactNode } from "react";
import classNames from "classnames";
import classes from "./Section.module.css";

type Props = {
  /** accent background fill */
  fill?: boolean;
  children: ReactNode;
};

function Section({ fill, children }: Props) {
  return (
    <section className={classNames(classes.section, { [classes.fill]: fill })}>
      {children}
    </section>
  );
}

export default Section;
