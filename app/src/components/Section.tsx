import { ComponentProps } from "react";
import classNames from "classnames";
import classes from "./Section.module.css";

type Props = {
  /** accent background color */
  fill?: boolean;
  /** contents fill full available screen width */
  full?: boolean;
} & ComponentProps<"section">;

/**
 * vertically stacked section. background color spans full width of screen, but
 * contents limited to readable width by default. alternating background
 * colors.
 */
const Section = ({ fill, full, className, ...props }: Props) => {
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
    />
  );
};

export default Section;
