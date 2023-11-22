import { ComponentProps, ReactElement, ReactNode } from "react";
import { FaAsterisk } from "react-icons/fa6";
import classNames from "classnames";
import { pick } from "lodash";
import Help from "@/components/Help";
import Tooltip from "@/components/Tooltip";
import classes from "./Label.module.css";

type Props = {
  /** label content */
  label?: ReactNode;
  /** whether to put label above, to left, or have no wrapping element at all */
  layout?: "horizontal" | "vertical" | "none";
  /** tooltip content */
  tooltip?: ReactNode;
  /** required field */
  required?: boolean;
  /** class on label */
  className?: string;
  /** input/control to be associated with label */
  children: ReactElement;
} & ComponentProps<"label">;

const labelProps = [
  "label",
  "layout",
  "tooltip",
  "required",
  "className",
  "style",
] as const;

export type LabelProps = Pick<Props, (typeof labelProps)[number]>;

/** forward specific props to label component */
export const forwardLabelProps = (props: { [key: PropertyKey]: unknown }) =>
  pick<LabelProps>(props, labelProps);

/**
 * adds layout, label, help, etc. to input component. for use in other
 * components, not directly.
 */
const Label = ({
  label,
  layout = "vertical",
  tooltip,
  required,
  className,
  style,
  children,
  ...props
}: Props) => {
  /** if no label but need to show tooltip, put tooltip around children instead */
  if (!label && tooltip)
    children = <Tooltip content={tooltip}>{children}</Tooltip>;

  return (
    <div className={classNames(classes[layout], className)} style={style}>
      {label && (
        <label {...props} className={classes.label}>
          {/* label */}
          {label}

          {/* required icon */}
          {required && <FaAsterisk className={classes.required} />}

          {/* help icon */}
          {tooltip && <Help tooltip={tooltip} className={classes.help} />}
        </label>
      )}

      {children}
    </div>
  );
};

export default Label;
