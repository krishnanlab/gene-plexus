import type { ComponentProps } from "react";
import { mapValues } from "lodash";
import { checkedValue, uncheckedValue } from "@/components/CheckBox";

type FormData = Record<string, FormDataEntryValue | number | boolean>;

type Props = {
  /** called when form submitted */
  onSubmit: (data: FormData) => unknown;
} & ComponentProps<"form">;

/** form wrapper around set of fields */
const Form = ({ onSubmit, ...props }: Props) => {
  return (
    <form
      style={{ display: "contents" }}
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        onSubmit(
          /** pass form data to callback in nice format */
          mapValues(Object.fromEntries(new FormData(form)), (value) => {
            if (
              typeof value === "string" &&
              value.trim() &&
              !Number.isNaN(Number(value))
            )
              return Number(value);
            if (value === uncheckedValue) return false;
            if (value === checkedValue) return true;
            return value;
          }),
        );
      }}
      {...props}
    />
  );
};

export default Form;
