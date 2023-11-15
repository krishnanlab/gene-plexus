import {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
} from "react";
import { mergeRefs } from "react-merge-refs";
import reactToText from "react-to-text";
import classNames from "classnames";
import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";
import classes from "./Tooltip.module.css";

type Props = {
  /** text/jsx/etc. content of tooltip */
  content?: ReactNode;
  children: ReactElement & { ref?: Ref<unknown> };
};

/**
 * shows a popup of minimal and non-interactive contextual info when hovering or
 * focusing children
 */
const Tooltip = forwardRef(
  ({ content, children, ...props }: Props, ref: ForwardedRef<unknown>) => {
    /** forward refs to children */
    const newChildren = cloneElement(children, {
      ref: mergeRefs([ref, children.ref]),
      ...props,
    });

    if (content)
      return (
        <Provider delayDuration={200}>
          <Root>
            {/* children elements that trigger opening on hover/focus */}
            <Trigger
              asChild
              aria-label={
                /**
                 * set aria label to tooltip content if trigger has no visible
                 * text, e.g. button with only icon
                 */
                !reactToText(newChildren).trim() &&
                !newChildren.props["aria-label"]
                  ? reactToText(content)
                  : undefined
              }
            >
              {newChildren}
            </Trigger>

            {/* tooltip and content */}
            <Portal>
              <Content
                className={classNames(classes.content, "shadow")}
                sideOffset={5}
              >
                {content}
                <Arrow className={classes.arrow} />
              </Content>
            </Portal>
          </Root>
        </Provider>
      );
    else return newChildren;
  },
);

export default Tooltip;
