import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import ScrollToTop from "./utility/ScrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
