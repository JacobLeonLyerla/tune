import React, { useState } from "react";
import { routes } from "./helpers/appRouters";
import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [address, setAddress] = useState("/calendar");
  const [icon, setIcon] = useState(faToggleOff);

  const changeIcon = () => {
    if (address === "/calendar") {
      setAddress("/");
      setIcon(faToggleOn);
    } else {
      setAddress("/calendar");
      setIcon(faToggleOff);
    }
    console.log(icon, address);
  };

  return (
    // I want to figure out how to make the button toggle instead of needing two buttons
    <div className="App">
      <Link
        onClick={() => changeIcon()}
        style={{ textDecoration: "none", color: "black" }}
        to={address}
      >
        <FontAwesomeIcon icon={icon} />
      </Link>{" "}
      {routes()}
    </div>
  );
}

export default App;
