import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./Main/Calculator";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
);

reportWebVitals();
