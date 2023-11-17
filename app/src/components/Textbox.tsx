import { ComponentProps, ReactElement, ReactNode, useId } from "react";
import { FaAsterisk, FaXmark } from "react-icons/fa6";
import classNames from "classnames";
import Help from "@/components/Help";
import Tooltip from "@/components/Tooltip";
import { useLocal } from "@/util/hooks";
import classes from "./Textbox.module.css";

type InputProps = { multi?: false } & Omit<
  ComponentProps<"input">,
  "value" | "onChange"
>;
type TextareaProps = {
  /** multi-line input */
  multi: true;
} & Omit<ComponentProps<"textarea">, "value" | "onChange">;

type Props = {
  /** label content */
  label?: ReactNode;
  /** whether to put label above, to left, or have no wrapping element at all */
  layout?: "horizontal" | "vertical" | "none";
  /** tooltip content */
  tooltip?: ReactNode;
  /** hint icon to show on side or clear button */
  icon?: ReactElement | "clear";
  /** text state */
  value?: string;
  /** on text state change */
  onChange?: (value: string) => void;
  /** wait this many ms for user to stop typing to trigger onChange */
  debounce?: number;
} & (InputProps | TextareaProps);

/** single or multi-line text input box */
const Textbox = ({
  label,
  layout = "vertical",
  multi,
  tooltip,
  icon,
  value,
  onChange,
  debounce,
  ...props
}: Props) => {
  /** unique id to connect label and field */
  const id = useId();

  /** local copy of state */
  const [text, setText] = useLocal("", value, onChange, debounce);

  /** input field */
  const field = multi ? (
    <textarea
      id={id}
      className={classNames(classes.textarea, "shadow")}
      value={text}
      onChange={(event) => setText(event.target.value)}
      {...(props as TextareaProps)}
    />
  ) : (
    <input
      id={id}
      className={classNames(classes.input, "shadow")}
      value={text}
      onChange={(event) => setText(event.target.value)}
      {...(props as InputProps)}
    />
  );

  /** side icon */
  let iconElement = <></>;
  if (icon === "clear")
    iconElement = (
      <button className={classes.icon} onClick={() => setText("")}>
        <FaXmark />
      </button>
    );
  else if (icon) iconElement = <div className={classes.icon}>{icon}</div>;

  return (
    <div className={classes[layout]}>
      {/* if label */}
      {label && (
        <label htmlFor={id} className={classes.label}>
          {/* label */}
          {label}

          {/* "required" icon */}
          {props.required && <FaAsterisk className={classes.required} />}

          {/* if label and tooltip, show help icon */}
          {tooltip && <Help tooltip={tooltip} className={classes.help} />}
        </label>
      )}

      <div className={classes.field}>
        {/* if no label but need to show tooltip, put tooltip around field instead */}
        {!label && tooltip ? (
          <Tooltip content={tooltip}>{field}</Tooltip>
        ) : (
          field
        )}

        {/* side icon */}
        {iconElement}
      </div>
    </div>
  );
};

export default Textbox;
