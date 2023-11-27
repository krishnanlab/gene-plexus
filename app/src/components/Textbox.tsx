import type { ComponentProps, ReactElement } from "react";
import { useId, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import type { LabelProps } from "@/components/Label";
import Label, { forwardLabelProps } from "@/components/Label";
import classes from "./TextBox.module.css";

type Base = {
  /** hint icon to show on side or clear button */
  icon?: ReactElement | "clear";
  /** text state */
  value?: string;
  /** on text state change */
  onChange?: (value: string) => void;
};

type Single = {
  /** single line */
  multi?: false;
};

type Multi = {
  /** multi-line */
  multi: true;
};

type Input = Omit<ComponentProps<"input">, "value" | "onChange">;

type Textarea = Omit<ComponentProps<"textarea">, "value" | "onChange">;

type Props = Base & LabelProps & ((Single & Input) | (Multi & Textarea));

/** single or multi-line text input box */
const TextBox = ({ multi, icon, value, onChange, ...props }: Props) => {
  const ref = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  /** unique id for component instance */
  const id = useId();

  /** input field */
  const input = multi ? (
    <textarea
      ref={ref}
      id={id}
      className={classes.textarea}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      {...(props as Textarea)}
    />
  ) : (
    <input
      ref={ref}
      id={id}
      className={classes.input}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      {...(props as Input)}
    />
  );

  /** side icon */
  let iconElement = <></>;
  if (icon === "clear")
    iconElement = (
      <button
        type="button"
        className={classes.icon}
        onClick={() => {
          if (ref.current) ref.current.value = "";
        }}
        aria-label="Clear text"
      >
        <FaXmark />
      </button>
    );
  else if (icon) iconElement = <div className={classes.icon}>{icon}</div>;

  return (
    <Label {...forwardLabelProps(props)} htmlFor={id}>
      <div className={classes.container}>
        {input}

        {/* side icon */}
        {iconElement}
      </div>
    </Label>
  );
};

export default TextBox;
