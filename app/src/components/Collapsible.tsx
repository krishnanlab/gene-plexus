import { ComponentPropsWithRef, ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import classNames from "classnames";
import { Content, Root, Trigger } from "@radix-ui/react-collapsible";
import Tooltip from "@/components/Tooltip";
import classes from "./Collapsible.module.css";

type Props = {
  /** text to show in expand/collapse button */
  text: string;
  /** tooltip content */
  tooltip?: ReactNode;
} & ComponentPropsWithRef<"div">;

/** button with content beneath expandable/collapsible */
const Collapsible = ({ text, tooltip, ...props }: Props) => {
  /** track open state */
  const [open, setOpen] = useState(false);

  return (
    <Root
      open={open}
      onOpenChange={setOpen}
      className={classNames(classes.root, "flex-col", "gap-md")}
    >
      <Trigger asChild>
        <Tooltip content={tooltip}>
          <button className={classes.button}>
            {text}
            {open ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </Tooltip>
      </Trigger>
      <Content {...props} />
    </Root>
  );
};

export default Collapsible;
