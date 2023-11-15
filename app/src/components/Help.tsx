import { ComponentProps, ReactNode } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import classNames from "classnames";
import Tooltip from "@/components/Tooltip";
import { sleep } from "@/util/misc";
import classes from "./Help.module.css";

type Props = {
  /** tooltip content */
  tooltip: ReactNode;
} & ComponentProps<"button">;

/** ? button to hover/click for help tooltip */
const Help = ({ tooltip, className }: Props) => {
  return (
    <Tooltip content={tooltip}>
      <button
        className={classNames(classes.help, className)}
        aria-label="Help"
        onClick={async (event) => {
          const target = event.currentTarget;
          if (!target) return;
          /** force open tooltip */
          await sleep();
          target.blur();
          target.focus();
        }}
      >
        <FaRegCircleQuestion />
      </button>
    </Tooltip>
  );
};

export default Help;
