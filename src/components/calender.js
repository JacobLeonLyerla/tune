import React, { useState,useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "../css/calendar.css";
import TuneContext from "../contexts/tuneProvider"

function MyCalender() {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("aa")
  const test = useContext(TuneContext)

  const onChange = (date) => {
 
    setDate(date);
  };
  useEffect(() => {
    console.log("effect ran")
   
     setText(test.testfunction("test completed"))
  });

  return (
    <div className="Sample">
      <div>{text}</div>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} value={date} />
        </main>
      </div>
    </div>
  );
}

export default MyCalender;
