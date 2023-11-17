import { ReactNode, useId } from "react";
import { Range, Root, SliderProps, Thumb, Track } from "@radix-ui/react-slider";
import Help from "@/components/Help";
import { useLocal } from "@/util/hooks";
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

type Props = {
  /** label content */
  label?: ReactNode;
  /** whether to put label above, to left, or have no wrapping element at all */
  layout?: "horizontal" | "vertical" | "none";
  /** tooltip content */
  tooltip?: ReactNode;
} & (Single | Multi) &
  Omit<SliderProps, "value" | "onChange">;

/** single value number slider */
const Slider = ({
  label,
  layout = "vertical",
  tooltip,
  multi,
  value,
  onChange,
  ...props
}: Props) => {
  /** unique id to connect label and field */
  const id = useId();

  /** local copy of state */
  const [numbers, setNumbers] = useLocal<number | number[]>(
    multi ? [0, 100] : 0,
    value,
    // @ts-expect-error ts not smart enough
    onChange,
    100,
  );

  return (
    <div className={classes[layout]}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {/* label */}
          {label}

          {/* tooltip help icon */}
          {tooltip && <Help tooltip={tooltip} className={classes.help} />}
        </label>
      )}

      {/* slider */}
      <Root
        className={classes.root}
        value={[numbers].flat()}
        onValueChange={(values) => setNumbers(multi ? values : values[0] || 0)}
        {...props}
      >
        <Track className={classes.track}>
          <Range className={classes.range} />
        </Track>
        {[numbers].flat().map((_, i) => (
          <Thumb key={i} className={classes.thumb} />
        ))}
      </Root>
    </div>
  );
};

export default Slider;
