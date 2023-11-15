import {
  cloneElement,
  ComponentProps,
  ReactElement,
  ReactNode,
  useRef,
} from "react";
import { FaLink } from "react-icons/fa6";
import reactToText from "react-to-text";
import classNames from "classnames";
import { kebabCase } from "lodash";
import Badge from "@/components/Badge";
import classes from "./Heading.module.css";

type Props = {
  /** "indent" level */
  level: 1 | 2 | 3 | 4;
  /** icon element or intials to show in badge */
  icon?: ReactElement | string;
  /** manually set anchor link instead of automatically from children text */
  anchor?: string;
  children: ReactNode;
} & ComponentProps<"h1" | "h2" | "h3" | "h4">;

/**
 * demarcates a new section/level of content. only use one level 1 per page.
 * don't skip levels. don't use levels below 4.
 */
const Heading = ({
  level,
  icon = <></>,
  anchor,
  children,
  ...props
}: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);

  /** heading tag */
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;

  /** url-compatible, "slugified" id */
  const id = kebabCase(anchor ?? reactToText(children));

  /** icon or badge */
  const iconElement =
    typeof icon === "string" ? (
      <Badge text={icon} className={classes.badge} />
    ) : (
      cloneElement(icon, {
        className: classNames(classes.icon, "inline-icon"),
      })
    );

  return (
    <Tag id={id} ref={ref} {...props}>
      {iconElement}

      {/* content */}
      {children}

      {/* link to section */}
      {id && (
        <a href={"#" + id} className={classes.anchor} aria-label="Heading link">
          <FaLink className="inline-icon" />
        </a>
      )}
    </Tag>
  );
};

export default Heading;
