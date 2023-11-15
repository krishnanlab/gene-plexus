import { CSSProperties, useState } from "react";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaTriangleExclamation,
  FaXmark,
} from "react-icons/fa6";
import { useEvent } from "react-use";
import classNames from "classnames";
import { uniqueId } from "lodash";
import { Close, Provider, Root, Title, Viewport } from "@radix-ui/react-toast";
import Loading from "@/assets/loading.svg?react";
import classes from "./Toast.module.css";

const Toast = () => {
  const [list, setList] = useState<ToastEvent[]>([]);

  /** listen for global toast window event */
  useEvent("toast", (event: CustomEvent) => {
    const newToast = event.detail as ToastEvent;
    let newList = [...list];
    if (newToast.name !== undefined)
      newList = newList.filter(({ name }) => name !== newToast.name);
    newList.push(newToast);
    setList(newList);
  });

  return (
    <Provider>
      {list.map((toast) => (
        <Root
          key={toast.key}
          className={classNames(classes.root, "shadow")}
          style={{ "--color": types[toast.type].color } as CSSProperties}
          onOpenChange={() => {
            setList(list.filter(({ key }) => key !== toast.key));
          }}
        >
          {types[toast.type].icon}
          <Title>{toast.text}</Title>
          <Close asChild>
            <button>
              <FaXmark />
            </button>
          </Close>
        </Root>
      ))}
      <Viewport
        className={classNames(classes.viewport, "flex-col", "gap-md")}
        data-debug={list.length}
      />
    </Provider>
  );
};

export default Toast;

const types = {
  info: { color: "var(--deep)", icon: <FaCircleInfo /> },
  loading: { color: "var(--deep)", icon: <Loading className="icon" /> },
  success: { color: "var(--success)", icon: <FaCircleCheck /> },
  warning: { color: "var(--warning)", icon: <FaCircleExclamation /> },
  error: { color: "var(--error)", icon: <FaTriangleExclamation /> },
};

type ToastEvent = {
  /** unique key for rendering */
  key: string;
  /** name to de-duplicate by */
  name: string;
  /** determines icon and style */
  type: keyof typeof types;
  /** content */
  text: string;
};

/** emit global toast event for toast component to listen for */
export const toast = (
  text: ToastEvent["text"],
  type?: ToastEvent["type"],
  name?: ToastEvent["name"],
) =>
  window.dispatchEvent(
    new CustomEvent("toast", {
      detail: {
        key: uniqueId(),
        name: name || uniqueId(),
        type: type || "info",
        text,
      } satisfies ToastEvent,
    }),
  );
