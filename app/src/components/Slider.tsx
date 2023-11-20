import { ComponentProps, useId } from "react";
import { Range, Root, SliderProps, Thumb, Track } from "@radix-ui/react-slider";
import Field from "@/components/Field";
import { useLocal } from "@/util/hooks";
import { formatNumber } from "@/util/string";
import classes from "./Slider.module.css";

type Single = {
  /** single value */
  multi?: false;
  /** number state */
  value?: number;
  /** on number state change */
  onChange?: (value: number) => void;
};

type Multi = {
  /** multiple values (range) */
  multi: true;
  /** numbers state */
  value?: number[];
  /** on numbers state change */
  onChange?: (value: number[]) => void;
};

type Props = (Single | Multi) &
  Omit<ComponentProps<typeof Field>, "id" | "children"> &
  Omit<SliderProps, "value" | "onChange">;

/** single value number slider */
const Slider = ({
  label,
  layout,
  tooltip,
  multi,
  value,
  onChange,
  ...props
}: Props) => {
  /** unique id to connect label and input */
  const id = useId();

  const min = props.min ?? 0;
  const max = props.max ?? 100;

  /** local copy of state */
  const [numbers, setNumbers] = useLocal<number | number[]>(
    multi ? [min, max || 100] : 0,
    value,
    // @ts-expect-error ts not smart enough
    onChange,
  );

  /** force numbers to array */
  const _numbers = [numbers].flat();

  /** whether to show min/max marks */
  const showMin = (_numbers[0] || 0) > (max - min) * 0.2;
  const showMax = (_numbers.at(-1) || 0) < (max - min) * 0.8;

  return (
    <Field id={id} label={label} layout={layout} tooltip={tooltip}>
      {/* slider */}
      <Root
        id={id}
        className={classes.root}
        value={_numbers}
        onValueChange={(values) => setNumbers(multi ? values : values[0] || 0)}
        data-min={showMin ? formatNumber(min, true) : ""}
        data-max={showMax ? formatNumber(max, true) : ""}
        {...props}
      >
        <Track className={classes.track}>
          <Range className={classes.range} />
        </Track>
        {_numbers.map((number, index) => (
          <Thumb
            key={index}
            className={classes.thumb}
            data-value={formatNumber(number, true)}
          />
        ))}
      </Root>
    </Field>
  );
};

export default Slider;
