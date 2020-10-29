import { createContext } from "react";

const TuneContext = createContext({
  test: false,
  testfunction: () => {},
});

export default TuneContext;
