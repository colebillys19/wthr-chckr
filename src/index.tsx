import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppContextContainer from "./AppContextContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextContainer />
  </React.StrictMode>
);
