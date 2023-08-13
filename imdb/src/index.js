import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MoviesContext, MoviesProvider } from "./contexts/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

export { MoviesContext };

root.render(
  <React.StrictMode>
    <Router>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </Router>
  </React.StrictMode>
);
