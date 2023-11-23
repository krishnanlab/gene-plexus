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

type Base = {
  /** icon to show next to text */
  icon?: ReactElement;
  /** look */
  design?: "normal" | "accent" | "critical";
};

type Content =
  /** require text and/or tooltip for accessibility */
  { text: string; tooltip?: ReactNode } | { text?: string; tooltip: ReactNode };

/** <a> or <RouterLink> */
type Link = Omit<ComponentProps<typeof Link>, "children">;
/** <button> */
type _Button = Omit<ComponentProps<"button">, "children">;

type Props = Base & Content & (Link | _Button);

/**
 * looks like a button and either goes somewhere (<a>) or does something
 * (<button>)
 */
const Button = forwardRef(
  (
    { text, icon, design = "normal", tooltip, ...props }: Props,
    ref: ForwardedRef<unknown>,
  ) => {
    /** contents of main element */
    const children = (
      <>
        {text}
        {icon && cloneElement(icon, { className: "icon" })}
      </>
    );

    /** class name string */
    const className = classNames(classes.button, classes[design], {
      [classes.square!]: !text && !!icon,
    });

    if ("to" in props)
      return (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={className}
          tooltip={tooltip}
          {...(props as Link)}
        >
          {children}
        </Link>
      );
    else
      return (
        <Tooltip content={tooltip}>
          <button
            ref={ref as ForwardedRef<HTMLButtonElement>}
            className={className}
            type="button"
            {...(props as _Button)}
          >
            {children}
          </button>
        </Tooltip>
      );
  },
);

export default Button;
