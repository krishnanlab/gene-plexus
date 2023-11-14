import {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
} from "react";
import reactToText from "react-to-text";
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
  children: ReactElement;
};

const Tooltip = forwardRef(
  ({ content, children, ...props }: Props, ref: ForwardedRef<unknown>) => {
    if (content)
      return (
        <Provider delayDuration={200}>
          <Root>
            <Trigger
              asChild
              aria-label={
                !reactToText(children).trim() && !children.props["aria-label"]
                  ? reactToText(content)
                  : undefined
              }
            >
              {cloneElement(children, { ref, ...props })}
            </Trigger>
            <Portal>
              <Content className={classes.content} sideOffset={5}>
                {content}
                <Arrow className={classes.arrow} />
              </Content>
            </Portal>
          </Root>
        </Provider>
      );
    else return children;
  },
);

export default Tooltip;
