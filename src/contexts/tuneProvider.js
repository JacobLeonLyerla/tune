import { createContext } from "react";

const TuneContext = createContext({
  color:"red",
  testfunction: () =>{
    return testParam
  },
});

const testParam = "test param"

export default TuneContext;
