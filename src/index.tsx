import React from "react";
import { App } from "./components/App";
import { createRoot } from "react-dom/client";

//createRoot(<App />, document.querySelector("#root"));

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const root = createRoot(document.querySelector("#root"));

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
