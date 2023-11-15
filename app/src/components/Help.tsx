import { ReactNode, useRef } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Tooltip from "@/components/Tooltip";
import { sleep } from "@/util/misc";
import classes from "./Help.module.css";

type Props = {
  tooltip: ReactNode;
};

const Help = ({ tooltip }: Props) => {
  return (
    <Tooltip content={tooltip}>
      <button
        className={classes.help}
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
