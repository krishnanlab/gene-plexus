import { ComponentProps, ReactNode } from "react";
import classNames from "classnames";
import classes from "./Section.module.css";

type Props = {
  /** accent background fill */
  fill?: boolean;
  /** full screen width */
  full?: boolean;
  children: ReactNode;
} & ComponentProps<"section">;

const Section = ({ fill, full, className, children, ...props }: Props) => {
  return (
    <section
      className={classNames(
        classes.section,
        className,
        {
          [classes.fill!]: fill,
          [classes.full!]: full,
        },
        "flex-col gap-lg",
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
