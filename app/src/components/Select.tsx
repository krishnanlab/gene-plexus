import { ReactElement } from "react";
import { Listbox } from "@headlessui/react";
import { useLocal } from "@/util/hooks";
import classes from "./Select.module.css";

type Option = {
  /** unique id */
  id: string;
  /** text label */
  text: string;
  /** secondary text */
  info?: string;
  /** icon */
  icon?: ReactElement;
};

type Props<Options extends readonly Option[]> = (
  | {
      /** multiple selected values allowed */
      multi?: false;
      /** selected option state */
      value?: Options[number];
      /** on selected option state change */
      onChange?: (value: Options[number]) => void;
    }
  | {
      multi: true;
      /** selected options state */
      value?: Options[number][];
      /** on selected options state change */
      onChange?: (value: Options[number][]) => void;
    }
) & {
  /**
   * pass with "as const" to make sure value and onChange value can only be one
   * of passed options
   */
  options: Options;
};

/** dropdown select box, multi or single */
const Select = <Options extends readonly Option[]>({
  multi,
  value,
  onChange,
  options,
}: Props<Options>) => {
  const [selected, setSelected] = useLocal<Options[number] | Options[number][]>(
    [],
    value,
    // @ts-expect-error ts not smart enough
    onChange,
  );

  const count = [selected].flat().length;

  let selectedLabel = "";
  if (count === 0) selectedLabel = "None selected";
  else if (count === 1) selectedLabel = [selected].flat()[0]?.text || "";
  else if (count === options.length) selectedLabel = "All selected";
  else selectedLabel = count + " selected";

  return (
    <Listbox value={selected} onChange={setSelected} multiple={multi}>
      <Listbox.Button>{selectedLabel}</Listbox.Button>
      <Listbox.Options>
        {options.map((option, index) => (
          <Listbox.Option key={index} value={option}>
            {option.text}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Select;
