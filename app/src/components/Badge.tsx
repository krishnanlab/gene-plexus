import classNames from "classnames";
import classes from "./Badge.module.css";

type Props = {
  text: string;
  className?: string;
};

/** small circle with a few chars of text */
const Badge = ({ text, className }: Props) => {
  return (
    <span className={classNames(classes.badge, className)}>
      {text.slice(0, 2)}
    </span>
  );
};

export default Badge;
