import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

/** mock api */
// if (new URLSearchParams(window.location.search).get("mock") === "true") {
const { setupWorker } = await import("msw/browser");
const { handlers } = await import("../fixtures");
await setupWorker(...handlers).start();
// }

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
