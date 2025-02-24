import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Render the App component into the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);