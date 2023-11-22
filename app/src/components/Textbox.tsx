import { ComponentProps, ReactElement } from "react";
import { FaXmark } from "react-icons/fa6";
import classNames from "classnames";
import Label, { forwardLabelProps, LabelProps } from "@/components/Label";
import { useLocal } from "@/util/hooks";
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
  /** local copy of state */
  const [text, setText] = useLocal("", value, onChange);

  /** input field */
  const input = multi ? (
    <textarea
      className={classNames(classes.textarea, "shadow")}
      value={text}
      onChange={(event) => setText(event.target.value)}
      {...(props as Textarea)}
    />
  ) : (
    <input
      className={classNames(classes.input, "shadow")}
      value={text}
      onChange={(event) => setText(event.target.value)}
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
        onClick={() => setText("")}
        aria-label="Clear text"
      >
        <FaXmark />
      </button>
    );
  else if (icon) iconElement = <div className={classes.icon}>{icon}</div>;

  return (
    <Label {...forwardLabelProps(props)}>
      <div className={classes.field}>
        {input}

        {/* side icon */}
        {iconElement}
      </div>
    </Label>
  );
};

export default TextBox;
