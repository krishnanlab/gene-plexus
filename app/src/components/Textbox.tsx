import {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useId,
} from "react";
import { FaQuestionCircle } from "react-icons/fa";
import Tooltip from "@/components/Tooltip";
import classes from "./Textbox.module.css";

type InputProps = { multi?: false } & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = {
  /** multi-line input */
  multi: true;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

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
      className={classes.textarea}
      {...(props as TextareaProps)}
    />
  ) : (
    <input id={id} className={classes.input} {...(props as InputProps)} />
  );

  return (
    <div className={classes[layout]}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
          {tooltip && (
            <Tooltip content={tooltip}>
              <button className={classes.help} aria-label="Help">
                <FaQuestionCircle />
              </button>
            </Tooltip>
          )}
        </label>
      )}
      {element}
    </div>
  );
};

export default Textbox;
