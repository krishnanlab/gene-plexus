import { ReactNode } from "react";
import classNames from "classnames";
import classes from "./Section.module.css";

type Props = {
  /** accent background fill */
  fill?: boolean;
  /** full screen width */
  full?: boolean;
  children: ReactNode;
};

const Section = ({ fill, full, children }: Props) => {
  return (
    <section
      className={classNames(
        classes.section,
        {
          [classes.fill!]: fill,
          [classes.full!]: full,
        },
        "flex-col gap-lg",
      )}
    >
      {children}
    </section>
  );
};

export default Section;
