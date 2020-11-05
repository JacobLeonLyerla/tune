import React from "react";
import nextId, { useId } from "react-id-generator";
 
const ID = ({ children, ...rest }) => {
  const [htmlId] = useId();
  const id1 = nextId("Test-ID-")
 
  return (
    <div>
      <label htmlFor={htmlId}>{children}</label>
      <input id={htmlId} type="radio" {...rest} />
      {id1}
    </div>
  );
};
export default ID