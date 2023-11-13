import { ReactElement, ReactNode } from "react";
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

const Tooltip = ({ content, children }: Props) => {
  if (content)
    return (
      <Provider delayDuration={200}>
        <Root>
          <Trigger asChild>{children}</Trigger>
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
};

export default Tooltip;
