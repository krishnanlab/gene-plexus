import { cloneElement, ReactElement, ReactNode, useId } from "react";
import { FaXmark } from "react-icons/fa6";
import reactToText from "react-to-text";
import classNames from "classnames";
import * as popover from "@zag-js/popover";
import { normalizeProps, Portal, useMachine } from "@zag-js/react";
import Button from "@/components/Button";
import classes from "./Popover.module.css";

type Props = {
  /** title of popover */
  label: string;
  /** content of popup */
  content: ReactNode;
  /** trigger */
  children: ReactElement;
};

/** popup of rich, interactive content when hovering or focusing children */
const Popover = ({ label, content, children }: Props) => {
  /** set up zag */
  const [state, send] = useMachine(
    popover.machine({
      /** unique id for component instance */
      id: useId(),
      /** settings */
      positioning: {
        placement: "top",
      },
    }),
  );

  /** interact with zag */
  const api = popover.connect(state, send, normalizeProps);

  console.log("hi", reactToText(<Button text="Menu" />));

  return (
    <>
      {/* children elements that trigger opening on hover/focus */}
      {cloneElement(children, {
        /** pass props necessary to trigger */
        ...api.triggerProps,
        /** make sure original props preserved */
        ...children.props,
        /**
         * set aria label to content if trigger has no visible text, e.g. button
         * with only icon
         */
        "aria-label":
          !reactToText(children).trim() && !children.props["aria-label"]
            ? reactToText(content)
            : children.props["aria-label"],
      })}

      {/* popup */}
      <Portal>
        {api.isOpen && (
          <div {...api.positionerProps} className={classes.popup}>
            {/* content */}
            <div
              {...api.contentProps}
              className={classNames(classes.content, "card")}
            >
              <div
                {...api.titleProps}
                className={classNames(classes.label, "primary", "bold")}
              >
                {label}
              </div>
              <button {...api.closeTriggerProps} className={classes.close}>
                <FaXmark />
              </button>
              {content}
            </div>

            {/* caret */}
            <div {...api.arrowProps} className={classes.arrow}>
              <div {...api.arrowTipProps} />
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};

export default Popover;
