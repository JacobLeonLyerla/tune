import React from "react";
import { routes } from "./helpers/appRouters";
import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

function App() {
  console.log(routes);
  return (
    // I want to figure out how to make the button toggle instead of needing two buttons
    <div className="App">
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <FontAwesomeIcon icon={faToggleOff} />
      </Link>{" "}
      <Link style={{ textDecoration: "none", color: "black" }} to="/calendar">
        <FontAwesomeIcon icon={faToggleOn} />
      </Link>
      {routes()}
    </div>
  );
}

export default App;
