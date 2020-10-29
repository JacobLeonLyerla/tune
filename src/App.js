import React from "react";
import { routes } from "./helpers/appRouters";
import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import TuneProvider, {TuneContext} from "./contexts/tuneProvider"
function App() {
  console.log(routes);
  return (
    // I want to figure out how to make the button toggle instead of needing two buttons
    <div className="App">
       <FontAwesomeIcon icon={faCoffee} />
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
