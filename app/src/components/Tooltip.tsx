import { cloneElement, ReactElement, ReactNode, Ref, useId } from "react";
import reactToText from "react-to-text";
import classNames from "classnames";
import { normalizeProps, Portal, useMachine } from "@zag-js/react";
import * as tooltip from "@zag-js/tooltip";
import classes from "./Tooltip.module.css";

type Props = {
  /**
   * content of tooltip. use raw string for plain text, <>react element for
   * <b>rich text</b></>.
   */
  content?: ReactNode;
  /** trigger */
  children: ReactElement & { ref?: Ref<unknown> };
};

/**
 * popup of minimal, non-interactive help or contextual info when hovering or
 * focusing children
 */
const Tooltip = ({ content, children }: Props) => {
  /** set up zag */
  const [state, send] = useMachine(
    tooltip.machine({
      /** unique id for component instance */
      id: useId(),
      /** settings */
      openDelay: 200,
      closeDelay: 0,
      // closeDelay: 999999, // debug
      closeOnPointerDown: false,
      positioning: {
        placement: "top",
      },
    }),
  );

  /** interact with zag */
  const api = tooltip.connect(state, send, normalizeProps);

  if (content)
    return (
      <>
        {/* children elements that trigger opening on hover/focus */}
        {cloneElement(children, {
          ...api.triggerProps,
          /**
           * set aria label to tooltip content if trigger has no visible text,
           * e.g. button with only icon
           */
          "aria-label":
            !reactToText(children).trim() && !children.props["aria-label"]
              ? reactToText(content)
              : undefined,
        })}

        {/* tooltip and content */}
        <Portal>
          {api.isOpen && (
            <div {...api.positionerProps} className={classes.root}>
              <div
                {...api.contentProps}
                className={classNames(classes.content, "shadow")}
              >
                {content}
              </div>
              <div {...api.arrowProps} className={classes.arrow}>
                <div {...api.arrowTipProps} />
              </div>
            </div>
          )}
        </Portal>
      </>
    );
  else return children;
};

export default Tooltip;
