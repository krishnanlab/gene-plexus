import { ComponentProps } from "react";
import { mapValues } from "lodash";
import { checkedValue, uncheckedValue } from "@/components/CheckBox";

type Props = {
  /** called when form submitted */
  onSubmit: (data: {
    [key: string]: FormDataEntryValue | number | boolean;
  }) => unknown;
} & ComponentProps<"form">;

/** util form component to put around fields */
const Form = ({ onSubmit, ...props }: Props) => {
  return (
    <form
      style={{ display: "contents" }}
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        /** pass form data in nice format to callback */
        onSubmit(
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
