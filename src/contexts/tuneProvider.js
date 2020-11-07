import { createContext } from "react";

const TuneContext = createContext({
  color:"red",
  testfunction: () =>{
    return "Function worked "
  },
});

export default TuneContext;
