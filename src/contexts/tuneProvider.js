import { createContext } from "react";

const TuneContext = createContext({
  color: "red",
  testfunction: (w) => {
    return w ? w : "test failed";
  },
});

export default TuneContext;
