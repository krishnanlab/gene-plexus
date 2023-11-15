import { ComponentProps, ReactNode, useId } from "react";
import { FaAsterisk } from "react-icons/fa6";
import classNames from "classnames";
import Help from "@/components/Help";
import Tooltip from "@/components/Tooltip";
import classes from "./Textbox.module.css";

type InputProps = { multi?: false } & ComponentProps<"input">;
type TextareaProps = {
  /** multi-line input */
  multi: true;
} & ComponentProps<"textarea">;

type Props = {
  /** label text */
  label?: string;
  /** whether to layout label above, label to left, or no wrapping element */
  layout?: "vertical" | "none";
  /** tooltip content */
  tooltip?: ReactNode;
} & (InputProps | TextareaProps);

/** single or multi-line text input box */
const Textbox = ({
  label,
  layout = "vertical",
  multi,
  tooltip,
  ...props
}: Props) => {
  /** unique id to connect label and field */
  const id = useId();

  /** input field */
  const field = multi ? (
    <textarea
      id={id}
      className={classNames(classes.textarea, "shadow")}
      {...(props as TextareaProps)}
    />
  ) : (
    <input
      id={id}
      className={classNames(classes.input, "shadow")}
      {...(props as InputProps)}
    />
  );

  return (
    <div className={classes[layout]}>
      {/* if label */}
      {label && (
        <label htmlFor={id} className={classes.label}>
          {/* label text */}
          {label}

          {/* "required" icon */}
          {props.required && <FaAsterisk className={classes.required} />}

          {/* if label and tooltip, show help icon */}
          {tooltip && <Help tooltip={tooltip} className={classes.help} />}
        </label>
      )}

      {/* if no label but need to show tooltip, put tooltip around field instead */}
      {!label && tooltip ? <Tooltip content={tooltip}>{field}</Tooltip> : field}
    </div>
  );
};

export default Textbox;
