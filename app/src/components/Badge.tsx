import { ComponentProps } from "react";
import classNames from "classnames";
import classes from "./Badge.module.css";

type Props = {
  text: string;
} & ComponentProps<"span">;

const Badge = ({ text, className, ...props }: Props) => {
  return (
    <span className={classNames(classes.badge, className)} {...props}>
      {text.slice(0, 2)}
    </span>
  );
};

export default Badge;
