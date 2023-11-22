import { ReactElement, ReactNode } from "react";
import { FaAsterisk } from "react-icons/fa6";
import Help from "@/components/Help";
import Tooltip from "@/components/Tooltip";
import classes from "./Field.module.css";

type Props = {
  /** id to connect label and input */
  id: string;
  /** label content */
  label?: ReactNode;
  /** whether to put label above, to left, or have no wrapping element at all */
  layout?: "horizontal" | "vertical" | "none";
  /** tooltip content */
  tooltip?: ReactNode;
  /** required field */
  required?: boolean;
  children: ReactElement;
};

/** adds label and help text to wrapped input component. do not use directly. */
const Field = ({
  id,
  label,
  layout = "vertical",
  tooltip,
  required,
  children,
}: Props) => {
  return (
    <div className={classes[layout]}>
      {/* if label */}
      {label && (
        <label htmlFor={id} className={classes.label}>
          {/* label */}
          {label}

          {/* "required" icon */}
          {required && <FaAsterisk className={classes.required} />}

          {/* if label and tooltip, show help icon */}
          {tooltip && <Help tooltip={tooltip} className={classes.help} />}
        </label>
      )}

      {/* if no label but need to show tooltip, put tooltip around child instead */}
      {!label && tooltip ? (
        <Tooltip content={tooltip}>{children}</Tooltip>
      ) : (
        children
      )}
    </div>
  );
};

export default Field;
