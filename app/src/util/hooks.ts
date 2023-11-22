import { useEffect, useState } from "react";

/** local copy of state for allowing component to be controlled or uncontrolled */
export const useLocal = <Type>(
  _default: Type,
  value: Type | undefined,
  onChange: ((value: Type) => void) | undefined,
) => {
  const [local, setLocal] = useState<Type>(value ?? _default);

  /** when parent value changes, update local value */
  useEffect(() => {
    if (value !== undefined) setLocal(value);
  }, [value]);

  /** when local value changes, update parent value */
  useEffect(() => {
    onChange?.(local);
  }, [onChange, local]);

  return [local, setLocal] as const;
};
