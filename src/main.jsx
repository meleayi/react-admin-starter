import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { themeConfig } from "./theme/themeConfig";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={themeConfig}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
