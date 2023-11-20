import { cloneElement, ReactElement, ReactNode } from "react";
import { FaCircle } from "react-icons/fa6";
import {
  Indicator,
  Item,
  RadioGroupProps,
  Root,
} from "@radix-ui/react-radio-group";
import { useLocal } from "@/util/hooks";
import classes from "./Radios.module.css";

type Props<Value extends string> = {
  /** selected option id */
  value?: Value;
  /** when selected option changes */
  onChange?: (value: Value) => void;
  /** list of options */
  options: readonly {
    /** unique id to identify option */
    id: Value;
    /** primary content */
    primary: ReactNode;
    /** secondary content */
    secondary?: ReactNode;
    /** icon next to content */
    icon?: ReactElement;
  }[];
} & Omit<RadioGroupProps, "value" | "onChange">;

/**
 * group of mutually-exclusive options. only use for 2-4 important options that
 * all need to be simultaneously visible, otherwise use select.
 */
const Radios = <Value extends string>({
  value,
  onChange,
  options,
  ...props
}: Props<Value>) => {
  /** local copy of state */
  const [selected, setSelected] = useLocal(
    options[0]?.id as Value,
    value,
    onChange,
  );

  return (
    <Root
      className={classes.root}
      value={selected}
      onValueChange={(value) => setSelected(value as Value)}
      {...props}
    >
      {options.map((option, index) => (
        <label
          key={index}
          className={classes.option}
          data-checked={selected === option.id}
        >
          <Item className={classes.item} value={option.id}>
            <Indicator className={classes.indicator}>
              <FaCircle />
            </Indicator>
          </Item>
          <div>
            <span className="primary">{option.primary}</span>
            <br />
            {option.secondary && (
              <span className="secondary">{option.secondary}</span>
            )}
          </div>
          {option.icon &&
            cloneElement(option.icon, { className: classes.icon })}
        </label>
      ))}
    </Root>
  );
};

export default Radios;
