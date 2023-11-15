import { ComponentProps, ReactNode, useId } from "react";
import { FaAsterisk } from "react-icons/fa6";
import classNames from "classnames";
import Help from "@/components/Help";
import classes from "./Textbox.module.css";

type InputProps = { multi?: false } & ComponentProps<"input">;
type TextareaProps = {
  /** multi-line input */
  multi: true;
} & ComponentProps<"textarea">;

type Props = {
  label?: string;
  /** whether to layout label above, label to left, or no wrapping element */
  layout?: "vertical" | "none";
  tooltip?: ReactNode;
} & (InputProps | TextareaProps);

const Textbox = ({
  label,
  layout = "vertical",
  multi,
  tooltip,
  ...props
}: Props) => {
  const id = useId();

  const element = multi ? (
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
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
          {props.required && <FaAsterisk className={classes.required} />}
          {tooltip && <Help tooltip={tooltip} className={classes.help} />}
        </label>
      )}
      {element}
    </div>
  );
};

export default Textbox;
