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
  content?: ReactNode;
  children: ReactElement & { ref?: Ref<unknown> };
};

const Tooltip = forwardRef(
  ({ content, children, ...props }: Props, ref: ForwardedRef<unknown>) => {
    const newChildren = cloneElement(children, {
      ref: mergeRefs([ref, children.ref]),
      ...props,
    });

    if (content)
      return (
        <Provider delayDuration={200}>
          <Root>
            <Trigger
              asChild
              aria-label={
                !reactToText(newChildren).trim() &&
                !newChildren.props["aria-label"]
                  ? reactToText(content)
                  : undefined
              }
            >
              {newChildren}
            </Trigger>
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
