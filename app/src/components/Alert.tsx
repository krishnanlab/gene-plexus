import { CSSProperties, ReactNode } from "react";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaTriangleExclamation,
} from "react-icons/fa6";
import Loading from "@/assets/loading.svg?react";
import classes from "./Alert.module.css";

type Props = {
  /** category of alert */
  type?: keyof typeof types;
  children: ReactNode;
};

/** available categories of alerts and associated styles */
const types = {
  info: { color: "var(--deep)", icon: <FaCircleInfo /> },
  loading: { color: "var(--deep)", icon: <Loading className="icon" /> },
  success: { color: "var(--success)", icon: <FaCircleCheck /> },
  warning: { color: "var(--warning)", icon: <FaCircleExclamation /> },
  error: { color: "var(--error)", icon: <FaTriangleExclamation /> },
};

/** static box of certain type with icon and text contents */
const Alert = ({ type = "info", children }: Props) => {
  const { icon, color } = types[type];
  return (
    <div
      className={classes.alert}
      style={{ "--color": color } as CSSProperties}
    >
      {icon}
      {children}
    </div>
  );
};

export default Alert;
