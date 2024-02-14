import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {FirebasContext}from "./context/Firebase.jsx"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebasContext.Provider>
      <App />
    </FirebasContext.Provider>
  </React.StrictMode>
);
