import React from "react";
import ReactDOM from "react-dom/client";
import Leftpage from "./App";
import RightPage from "./right-page";
import "./index.css";
import "./right.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container">
    <Leftpage />
    <RightPage/>
  </div>
);
