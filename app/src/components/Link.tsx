import {
  AnchorHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef(
  ({ to, children, ...props }: Props, ref: ForwardedRef<HTMLAnchorElement>) => {
    const external = to.startsWith("http");

    if (external)
      return (
        <a ref={ref} href={to} target={external ? "_blank" : ""} {...props}>
          {children}
        </a>
      );
    else
      return (
        <RouterLink ref={ref} to={to} {...props}>
          {children}
        </RouterLink>
      );
  },
);

export default Link;
