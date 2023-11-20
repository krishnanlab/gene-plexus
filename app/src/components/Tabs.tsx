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
  /**
   * keep selected tab synced with url param of this name (leave undefined for
   * no sync)
   */
  syncWithUrl?: string;
  children: ReactElement<TabProps>[];
};

const Tabs = ({ syncWithUrl = "", children }: Props) => {
  /** sync selected tab with url */
  const [value, setValue] = useQueryParam(syncWithUrl, StringParam);

  /** tab props */
  const tabs = children.map((child) => ({
    ...child.props,
    /**
     * make unique id from text. text should be unique too to avoid user
     * confusion.
     */
    id: kebabCase(child.props.text),
  }));

  return (
    <Root
      className={classNames(classes.root, "flex-col", "gap-lg")}
      value={syncWithUrl && value ? value : tabs[0]?.id}
      onValueChange={(value) => {
        syncWithUrl && setValue(value);
        console.log(value);
      }}
    >
      {/* tab list */}
      <List className="flex-row gap-sm">
        {tabs.map(({ id, text, icon, tooltip }, index) => (
          <Trigger key={index} asChild value={id}>
            <Tooltip content={tooltip}>
              <button className={classes.button}>
                {text}
                {icon && cloneElement(icon, { className: "icon" })}
              </button>
            </Tooltip>
          </Trigger>
        ))}
      </List>

      {/* tab content panels */}
      {tabs.map(({ text, className, ...props }, index) => (
        <Content
          key={index}
          className={classNames(classes.content, className)}
          value={kebabCase(text)}
          {...omit(props, ["icon", "tooltip"])}
        />
      ))}
    </Root>
  );
};

export default Tabs;

type TabProps = {
  /**
   * tab button text. should be unique to avoid user confusion, and because
   * kebab-cased to create unique id.
   */
  text: string;
  /** tab button icon */
  icon?: ReactElement;
  /** tab button tooltip content */
  tooltip?: ReactNode;
} & Pick<ComponentPropsWithoutRef<"div">, "children" | "className">;

/** use within a Tabs component */
const Tab = (props: TabProps) => {
  return <Fragment {...props} />;
};

export { Tab };
