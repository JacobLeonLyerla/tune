import React from "react";
import { useId } from "react-id-generator";
 
const RadioButton = ({ children, ...rest }) => {
  const [htmlId] = useId();
 
  return (
    <div>
      <label htmlFor={htmlId}>{children}</label>
      <input id={htmlId} type="radio" {...rest} />
    </div>
  );
};