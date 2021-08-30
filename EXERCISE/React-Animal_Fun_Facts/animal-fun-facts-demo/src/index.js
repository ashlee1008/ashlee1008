import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AnimalFacts from './AnimalFacts'
import reportWebVitals from "./reportWebVitals";



ReactDOM.render(
  <React.StrictMode>
    <AnimalFacts />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
