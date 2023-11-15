import {
  cloneElement,
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
} from "react";
import classNames from "classnames";
import Link from "@/components/Link";
import Tooltip from "@/components/Tooltip";
import classes from "./Button.module.css";

type LinkProps = Omit<ComponentProps<typeof Link>, "children">;
type ButtonProps = Omit<ComponentProps<"button">, "children">;

type CustomProps =
  /** require text and/or tooltip, for accessibility */
  (
    | { text: string; tooltip?: ReactNode }
    | { text?: string; tooltip: ReactNode }
  ) & {
    icon?: ReactElement;
    design?: "normal" | "accent" | "critical";
  };

type Props = CustomProps & (LinkProps | ButtonProps);

/**
 * looks like a button and either goes somewhere (anchor) or does something
 * (button)
 */
const Button = forwardRef(
  (
    { text, icon, design = "normal", tooltip, ...props }: Props,
    ref: ForwardedRef<unknown>,
  ) => {
    const children = (
      <>
        {text}
        {icon && cloneElement(icon, { className: "icon" })}
      </>
    );

    const className = classNames(classes.button, classes[design], {
      [classes.square!]: !text && !!icon,
    });

    const element =
      "to" in props ? (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={className}
          {...(props as LinkProps)}
        >
          {children}
        </Link>
      ) : (
        <button
          ref={ref as ForwardedRef<HTMLButtonElement>}
          className={className}
          {...(props as ButtonProps)}
        >
          {children}
        </button>
      );

    return <Tooltip content={tooltip}>{element}</Tooltip>;
  },
);

export default Button;
