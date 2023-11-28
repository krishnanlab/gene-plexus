import type { ReactElement } from "react";
import { cloneElement, useId } from "react";
import { FaCaretDown, FaCheck, FaCircle } from "react-icons/fa6";
import classNames from "classnames";
import { omit } from "lodash";
import { normalizeProps, Portal, useMachine } from "@zag-js/react";
import * as select from "@zag-js/select";
import type { PropTypes } from "@zag-js/types";
import type { LabelProps } from "@/components/Label";
import Label, { forwardLabelProps } from "@/components/Label";
import classes from "./Select.module.css";

type Base = {
  /**
   * pass with "as const" to make sure value and onChange value can only be one
   * of passed options
   */
  options: readonly Option[];
};

export type Option = {
  /** unique id */
  id: string;
  /** text label */
  text: string;
  /** secondary text */
  info?: string;
  /** icon */
  icon?: ReactElement;
};

type Single = {
  /** multiple selected values allowed */
  multi?: false;
  /** selected option state */
  value?: Option;
  /** on selected option state change */
  onChange?: (value: Option) => void;
};

type Multi = {
  multi: true;
  /** selected options state */
  value?: Option[];
  /** on selected options state change */
  onChange?: (value: Option[], count: number | "all" | "none") => void;
};

type Props = Base & LabelProps & (Single | Multi);

/** dropdown select box, multi or single */
const Select = ({ multi, value, onChange, options, ...props }: Props) => {
  /** set up zag */
  const [state, send] = useMachine(
    select.machine<Option>({
      /** unique id for component instance */
      id: useId(),
      /** multiple selections allowed */
      multiple: multi,
      /** options */
      collection: select.collection({
        /** options */
        items: options.map((option) => omit(option, "icon")),
        /** for uniquely identifying option */
        itemToValue: (option) => option.id,
        /** string to use for type-ahead */
        itemToString: (option) => option.text,
      }),
      /** initialize selected values (array of ids) */
      value: value
        ? [value].flat().map((value) => value.id)
        : multi
          ? []
          : options[0]
            ? [options[0].id]
            : [],
      /** when selected items change */
      onValueChange: (details) =>
        multi
          ? onChange?.(
              details.items,
              details.items.length === 0
                ? "none"
                : details.items.length === options.length
                  ? "all"
                  : details.items.length,
            )
          : details.items[0] && onChange?.(details.items[0]),
    }),
  );

  /** interact with zag */
  const api = select.connect<PropTypes, Option>(state, send, normalizeProps);

  /** label to show in button trigger */
  let selectedLabel = "";
  const selected = api.selectedItems;
  const count = [selected].flat().length;
  if (count === 0) selectedLabel = "None";
  else if (count === 1) selectedLabel = [selected].flat()[0]?.text || "";
  else if (count === options.length) selectedLabel = "All";
  else selectedLabel = count + " selected";

  /** check icon */
  const Check = multi ? FaCheck : FaCircle;

  /** all selected */
  const allSelected = api.selectedItems.length === options.length;

  return (
    <div {...api.rootProps} className={classes.root}>
      {/* trigger */}
      <div {...api.controlProps} className={classes.control}>
        <Label
          {...api.labelProps}
          {...forwardLabelProps(props, api.triggerProps.id)}
        >
          <button {...api.triggerProps} className={classes.button}>
            <span className="truncate" aria-hidden={true}>
              {selectedLabel}
            </span>
            <FaCaretDown />
          </button>
        </Label>
      </div>

      {/* popup */}
      <Portal>
        {api.isOpen && (
          <div {...api.positionerProps} className={classes.popup}>
            {/* select all/none */}
            <ul {...api.contentProps} className={classes.list}>
              {multi && (
                <button
                  className={classes.option}
                  onClick={() =>
                    api.setValue(
                      allSelected ? [] : options.map((option) => option.id),
                    )
                  }
                >
                  <Check
                    className={classes.check}
                    style={{ opacity: allSelected ? 1 : 0 }}
                  />
                  <span className={classes.text}>All</span>
                </button>
              )}

              {/* main options */}
              {options.map((option) => (
                <li
                  key={option.id}
                  {...api.getItemProps({ item: option })}
                  className={classes.option}
                >
                  <Check
                    {...api.getItemIndicatorProps({ item: option })}
                    className={classes.check}
                    style={{ height: multi ? "" : "8px" }}
                  />
                  <span className={classes.text}>{option.text}</span>
                  <span className="secondary">{option.info}</span>
                  {option.icon &&
                    cloneElement(option.icon, {
                      className: classNames(classes.icon, "secondary"),
                    })}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Portal>
    </div>
  );
};

export default Select;
