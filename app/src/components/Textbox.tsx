import { ComponentProps, ReactElement, useId } from "react";
import { FaXmark } from "react-icons/fa6";
import classNames from "classnames";
import Field from "@/components/Field";
import { useLocal } from "@/util/hooks";
import classes from "./TextBox.module.css";

type InputProps = { multi?: false } & Omit<
  ComponentProps<"input">,
  "value" | "onChange"
>;
type TextareaProps = {
  /** multi-line input */
  multi: true;
} & Omit<ComponentProps<"textarea">, "value" | "onChange">;

type Props = {
  /** hint icon to show on side or clear button */
  icon?: ReactElement | "clear";
  /** text state */
  value?: string;
  /** on text state change */
  onChange?: (value: string) => void;
  /** wait this many ms for user to stop typing to trigger onChange */
  debounce?: number;
} & Omit<ComponentProps<typeof Field>, "children"> &
  (InputProps | TextareaProps);

/** single or multi-line text input box */
const TextBox = ({
  label,
  layout,
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
  const input = multi ? (
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
    <Field
      label={label}
      layout={layout}
      tooltip={tooltip}
      required={props.required}
    >
      <div className={classes.field}>
        {input}

        {/* side icon */}
        {iconElement}
      </div>
    </Field>
  );
};

export default TextBox;
