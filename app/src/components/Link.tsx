import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import classNames from "classnames";
import Tooltip from "@/components/Tooltip";
import classes from "./Link.module.css";

type Props = {
  /** url to link to, local or external */
  to: string;
  children: ReactNode;
  /** disable arrow icon for external links */
  noIcon?: boolean;
  tooltip?: ReactNode;
} & ComponentPropsWithoutRef<"a">;

/** link to internal route or external url */
const Link = forwardRef(
  (
    { to, children, noIcon, tooltip, ...props }: Props,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    /** whether link is external (some other site) or internal (within router) */
    const external = to.startsWith("http");

    const element = external ? (
      <a ref={ref} href={to} target={external ? "_blank" : ""} {...props}>
        {children}
        {!noIcon && (
          <FaArrowUpRightFromSquare
            className={classNames(classes.icon, "inline-icon")}
          />
        )}
      </a>
    ) : (
      <RouterLink ref={ref} to={to} {...props}>
        {children}
      </RouterLink>
    );

    return <Tooltip content={tooltip}>{element}</Tooltip>;
  },
);

export default Link;
