import { useEffect, useRef, useState } from "react";

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

/** listen for changes to dom */
export const useMutation = (
  /** element to listen to (otherwise use returned ref) */
  element: Element | undefined,
  options: MutationObserverInit | undefined,
  callback: MutationCallback,
) => {
  const ref = useRef(null);

  useEffect(() => {
    const target = element || ref.current;
    if (!target) return;
    const observer = new MutationObserver(callback);
    observer.observe(target, options);
    return () => {
      observer.disconnect();
    };
  });

  return ref;
};
