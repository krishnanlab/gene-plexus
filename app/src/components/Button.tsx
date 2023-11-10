import { ButtonHTMLAttributes, ComponentProps, JSX } from "react";
import classNames from "classnames";
import Link from "@/components/Link";
import classes from "./Button.module.css";

type LinkProps = ComponentProps<typeof Link>;
type ButtonProps = {
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  text?: string;
  icon?: JSX.Element;
  design?: "normal" | "accent" | "critical";
} & (Omit<LinkProps, "children"> | Omit<ButtonProps, "children">);

const Button = ({ text, icon, design = "normal", ...props }: Props) => {
  const children = (
    <>
      {text}
      {icon}
    </>
  );

  const square = !text && !!icon;

  if (props.onClick)
    return (
      <button
        className={classNames([
          classes.button,
          classes[design],
          { [classes.square]: square },
        ])}
        {...(props as ButtonProps)}
      >
        {children}
      </button>
    );
  else
    return (
      <Link
        className={classNames([
          classes.button,
          classes[design],
          { [classes.square]: square },
        ])}
        {...(props as LinkProps)}
      >
        {children}
      </Link>
    );
};

export default Button;
