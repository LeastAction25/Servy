import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Make sure to import Router here
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your entire application in Router here */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
