import { ComponentPropsWithRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import classNames from "classnames";
import { Content, Root, Trigger } from "@radix-ui/react-collapsible";
import classes from "./Collapsible.module.css";

type Props = {
  text: string;
} & ComponentPropsWithRef<"div">;

const Collapsible = ({ text, ...props }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Root
      open={open}
      onOpenChange={setOpen}
      className={classNames(classes.root, "flex-col", "gap-md")}
    >
      <Trigger asChild>
        <button className={classes.button}>
          {text}
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </Trigger>
      <Content {...props} />
    </Root>
  );
};

export default Collapsible;
