import { ComponentProps, useId, useState } from "react";
import { useEvent } from "react-use";
import Field from "@/components/Field";
import { useLocal } from "@/util/hooks";
import classes from "./NumberBox.module.css";

type Props = {
  /** number state */
  value?: number;
  /** on number state change */
  onChange?: (value: number) => void;
} & Omit<ComponentProps<"input">, "value" | "onChange"> &
  Omit<ComponentProps<typeof Field>, "id" | "children">;

/** number input box */
const NumberBox = ({
  label,
  layout,
  tooltip,
  value,
  onChange,
  ...props
}: Props) => {
  /** unique id to connect label and field */
  const id = useId();

  /** local copy of state */
  const [number, setNumber] = useLocal("0", String(value || "0"), (value) => {
    const number = Number(value);
    if (!Number.isNaN(number)) onChange?.(number);
  });

  /** https://github.com/facebook/react/issues/22794 */
  const [ref] = useState<HTMLInputElement>();
  useEvent("wheel", (event) => event.stopPropagation(), ref, {
    passive: false,
  });

  return (
    <Field
      id={id}
      label={label}
      layout={layout}
      tooltip={tooltip}
      required={props.required}
    >
      <input
        id={id}
        className={classes.input}
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        {...props}
      />
    </Field>
  );
};

export default NumberBox;
