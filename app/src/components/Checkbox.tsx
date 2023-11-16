import { ReactNode, useEffect, useId, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { CheckboxProps, Indicator, Root } from "@radix-ui/react-checkbox";
import Help from "@/components/Help";
import classes from "./Checkbox.module.css";

type Props = {
  /** label content */
  label: ReactNode;
  /** tooltip content */
  tooltip?: ReactNode;
  /** checked state */
  value?: boolean;
  /** on checked state change */
  onChange?: (value: boolean) => void;
} & CheckboxProps;

/** simple checkbox with label */
const Checkbox = ({ label, tooltip, value, onChange, ...props }: Props) => {
  /** unique id to connect label and field */
  const id = useId();

  /** https://github.com/radix-ui/primitives/issues/2530 */
  /** local copy of state */
  const [checked, setChecked] = useState(value || false);
  useEffect(() => {
    if (value !== undefined) setChecked(value);
  }, [value]);
  useEffect(() => {
    onChange?.(checked);
  }, [onChange, checked]);

  return (
    <div className={classes.wrapper}>
      {/* checkbox */}
      <Root
        {...props}
        className={classes.root}
        id={id}
        checked={checked}
        onCheckedChange={(checked) => setChecked(!!checked)}
      >
        <Indicator className={classes.indicator}>
          <FaCheck />
        </Indicator>
      </Root>

      {/* label */}
      <label className={classes.label} htmlFor={id}>
        {label}
        {tooltip && <Help tooltip={tooltip} className={classes.help} />}
      </label>

      {/* https://github.com/radix-ui/primitives/issues/2530 */}
      <input
        type="checkbox"
        form={props.form}
        name={props.name}
        style={{ display: "none" }}
        checked={checked}
        readOnly
      />
    </div>
  );
};

export default Checkbox;
