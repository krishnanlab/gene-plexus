import {
  AnchorHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import Tooltip from "@/components/Tooltip";
import classes from "./Link.module.css";

type Props = {
  /** url to link to, local or external */
  to: string;
  children: ReactNode;
  /** disable arrow icon for external links */
  noIcon?: boolean;
  tooltip?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

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
        {!noIcon && <FaExternalLinkAlt className={classes.icon} />}
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
