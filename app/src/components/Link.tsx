import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ to, children, ...props }: Props) => {
  const external = to.startsWith("http");

  if (external)
    return (
      <a href={to} target={external ? "_blank" : ""} {...props}>
        {children}
      </a>
    );
  else
    return (
      <RouterLink to={to} {...props}>
        {children}
      </RouterLink>
    );
};

export default Link;
