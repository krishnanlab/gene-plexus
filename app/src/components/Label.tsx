import { ComponentProps, Fragment, ReactElement, ReactNode } from "react";
import { FaAsterisk } from "react-icons/fa6";
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
  /** input/control to be associated with label */
  children: ReactElement;
} & ComponentProps<"label">;

const labelProps = ["label", "layout", "tooltip", "required"] as const;

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
  children,
  ...props
}: Props) => {
  /** if no label but need to show tooltip, put tooltip around children instead */
  if (!label && tooltip)
    children = <Tooltip content={tooltip}>{children}</Tooltip>;

  /** no container if layout none */
  const Container = layout === "none" ? Fragment : "div";
  const containerProps =
    layout === "none" ? {} : { className: classes[layout] };

  return (
    <Container {...containerProps}>
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
    </Container>
  );
};

export default Label;
