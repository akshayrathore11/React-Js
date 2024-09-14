import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import App from "./App.jsx";
import Akshay from "./01Akshay.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Akshay />
  </StrictMode>
);
