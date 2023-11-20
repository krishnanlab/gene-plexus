import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { CheckboxProps, Indicator, Root } from "@radix-ui/react-checkbox";
import Help from "@/components/Help";
import { useLocal } from "@/util/hooks";
import classes from "./CheckBox.module.css";

type Props = {
  /** label content */
  label: ReactNode;
  /** tooltip content */
  tooltip?: ReactNode;
  /** checked state */
  value?: boolean;
  /** on checked state change */
  onChange?: (value: boolean) => void;
} & Omit<CheckboxProps, "value" | "onChange">;

/** simple checkbox with label */
const CheckBox = ({ label, tooltip, value, onChange, ...props }: Props) => {
  /** local copy of state */
  const [checked, setChecked] = useLocal(false, value, onChange);

  return (
    <label className={classes.label}>
      <Root
        {...props}
        className={classes.root}
        checked={checked}
        onCheckedChange={(checked) => setChecked(!!checked)}
      >
        <Indicator className={classes.indicator}>
          <FaCheck />
        </Indicator>
      </Root>
      {label}
      {tooltip && <Help tooltip={tooltip} className={classes.help} />}
    </label>
  );
};

export default CheckBox;
