import {
  cloneElement,
  ComponentPropsWithoutRef,
  Fragment,
  ReactElement,
  ReactNode,
} from "react";
import classNames from "classnames";
import { kebabCase, omit } from "lodash";
import { StringParam, useQueryParam } from "use-query-params";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import Tooltip from "@/components/Tooltip";
import classes from "./Tabs.module.css";

type Props = {
  /** keep selected tab synced with url param of this name */
  syncWithUrl?: string;
  children: ReactElement<TabProps>[];
};

const Tabs = ({ syncWithUrl = "", children }: Props) => {
  /** sync selected tab with url */
  const [value, setValue] = useQueryParam(syncWithUrl, StringParam);

  /** tab props */
  const tabs = children.map((child) => child.props);

  return (
    <Root
      className={classNames(classes.root, "flex-col", "gap-lg")}
      value={syncWithUrl && value ? value : undefined}
      onValueChange={(value) => syncWithUrl && setValue(value)}
    >
      <List className="flex-row gap-sm">
        {tabs.map(({ name, icon, tooltip }, index) => (
          <Trigger key={index} asChild value={kebabCase(name)}>
            <Tooltip content={tooltip}>
              <button className={classes.button}>
                {name}
                {icon && cloneElement(icon, { className: "icon" })}
              </button>
            </Tooltip>
          </Trigger>
        ))}
      </List>
      {tabs.map(({ name, className, ...props }, index) => (
        <Content
          key={index}
          value={kebabCase(name)}
          className={classNames(classes.content, className)}
          {...omit(props, ["icon", "tooltip"])}
        />
      ))}
    </Root>
  );
};

export default Tabs;

type TabProps = {
  name: string;
  icon?: ReactElement;
  tooltip?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

const Tab = (props: TabProps) => {
  return <Fragment {...props} />;
};

export { Tab };
