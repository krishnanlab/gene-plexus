import { useEffect, useMemo, useState } from "react";
import { debounce as _debounce } from "lodash";

/** local copy of state for allowing component to be controlled or uncontrolled */
export const useLocal = <Type>(
  _default: Type,
  value: Type | undefined,
  onChange: ((value: Type) => void) | undefined,
  debounce = 0,
) => {
  const [local, setLocal] = useState<Type>(value ?? _default);

  /** debounced on change */
  const debouncedOnChange = useMemo(
    () => (onChange && debounce ? _debounce(onChange, debounce) : onChange),
    [onChange, debounce],
  );

  /** when parent value changes, update local value */
  useEffect(() => {
    if (value !== undefined) setLocal(value);
  }, [value]);

  /** when local value changes, update parent value */
  useEffect(() => {
    debouncedOnChange?.(local);
  }, [debouncedOnChange, local]);

  return [local, setLocal] as const;
};
