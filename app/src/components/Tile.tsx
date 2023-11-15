import { cloneElement, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import classes from "./Tile.module.css";

type Props = {
  icon: ReactElement;
  primary: ReactNode;
  secondary: ReactNode;
};

const Tile = ({ icon, primary, secondary }: Props) => {
  return (
    <div className={classNames(classes.tile, "flex-col gap-md center")}>
      {cloneElement(icon, { className: "icon" })}
      <div>
        <div className={classNames(classes.primary, "bold")}>{primary}</div>
        <div className="secondary">{secondary}</div>
      </div>
    </div>
  );
};

export default Tile;
