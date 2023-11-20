import { ComponentProps } from "react";

type Props = {
  /** called when form submitted */
  onSubmit: (data: { [key: string]: FormDataEntryValue }) => unknown;
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
        onSubmit(Object.fromEntries(new FormData(form)));
      }}
      {...props}
    />
  );
};

export default Form;
