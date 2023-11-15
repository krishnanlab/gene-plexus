import { CSSProperties, ReactNode } from "react";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaTriangleExclamation,
} from "react-icons/fa6";
import classes from "./Alert.module.css";

type Props = {
  type?: keyof typeof types;
  children: ReactNode;
};

const types = {
  info: { color: "var(--deep)", icon: <FaCircleInfo /> },
  success: { color: "var(--success)", icon: <FaCircleCheck /> },
  warning: { color: "var(--warning)", icon: <FaCircleExclamation /> },
  error: { color: "var(--error)", icon: <FaTriangleExclamation /> },
};

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
