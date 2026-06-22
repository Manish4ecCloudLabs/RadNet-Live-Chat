import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found in HTML");
}

let root = (window as any).__reactRoot;
if (!root) {
  root = createRoot(rootElement);
  (window as any).__reactRoot = root;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    // Don't unmount on HMR, just let React handle updates
  });
}
