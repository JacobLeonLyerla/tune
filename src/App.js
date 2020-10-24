import React from "react";
import {routes} from "./helpers/appRouters"
import {Link} from "react-router-dom"
import "./App.css";
function App() {
  console.log(routes)
  return (
    <div className="App">
      {routes()}
     
      <Link style={{ textDecoration: "none", color: "black" }} to="/test">

            <button> Test </button>
        </Link>
    </div>
  );
}

export default App;
