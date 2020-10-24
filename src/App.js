import React from "react";
import { routes } from "./helpers/appRouters";
import { Link } from "react-router-dom";
import "./App.css";
function App() {
  console.log(routes);
  return (
    // I want to figure out how to make the button toggle instead of needing two buttons
    <div className="App">
      <Link style={{ textDecoration: "none", color: "black" }} to="/test">
        <button> ON </button>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <button> OFF </button>
      </Link>{" "}
      {routes()}
    </div>
  );
}

export default App;
