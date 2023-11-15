import { cloneElement, ReactElement, useId } from "react";
import { createPortal } from "react-dom";

type Props = {
  /** called when form submitted */
  onSubmit: (data: { [key: string]: FormDataEntryValue }) => unknown;
  children: ReactElement | ReactElement[];
};

/** util form component to put around fields */
const Form = ({ children, onSubmit }: Props) => {
  /** page-unique id to refer to from fields */
  const id = useId();

  return (
    <>
      {/* add "form" attribute to each child to associate it with form element */}
      {[children]
        .flat()
        .map((child, index) => cloneElement(child, { key: index, form: id }))}

      {/* attach actual form element to body and hide so form doesn't affect local layout */}
      {createPortal(
        <form
          style={{ display: "contents" }}
          id={id}
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            /** pass form data in nice format to callback */
            onSubmit(Object.fromEntries(new FormData(form)));
          }}
        />,
        document.body,
      )}
    </>
  );
};

export default Form;
