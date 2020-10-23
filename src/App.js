import React from "react";
import Calender from "./components/calender";
import {routes} from "./helpers/appRouters"
import "./App.css";
function App() {
  return (
    <div className="App">
      {routes}
      <Calender />
      
    </div>
  );
}

export default App;
