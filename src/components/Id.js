import React from "react";
import nextId, { useId } from "react-id-generator";
 
const ID = ({ children, ...rest }) => {
  const [htmlId] = useId();
 
  return (
    <div>
      <label htmlFor={htmlId}>{children}</label>
      <input id={htmlId} type="radio" {...rest} />
      {nextId}
    </div>
  );
};
export default ID