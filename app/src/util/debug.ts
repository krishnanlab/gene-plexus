/** pretty log collection of things as object */
export const groupLog = (label: string, object: { [key: string]: unknown }) => {
  console.groupCollapsed(label);
  for (const [key, value] of Object.entries(object)) {
    console.info("%c" + key, "font-weight: bold");
    console.info(value);
  }
  console.groupEnd();
};
