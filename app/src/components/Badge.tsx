import classNames from "classnames";
import classes from "./Badge.module.css";

type Props = {
  /** few chars of text */
  text: string;
  /** class on badge */
  className?: string;
};

/**
 * small circle with a few chars of text. for use in other components, not
 * directly.
 */
const Badge = ({ text, className }: Props) => {
  return (
    <span className={classNames(classes.badge, className)}>
      {text.slice(0, 2)}
    </span>
  );
};

export default Badge;
