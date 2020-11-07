import React, { useState,useContext } from "react";
import Calendar from "react-calendar";
import "../css/calendar.css";
import TuneContext from "../contexts/tuneProvider"

function MyCalender() {
  const [date, setDate] = useState(new Date());
  const test = useContext(TuneContext)
  const onChange = (date) => {
 
    setDate(date);
  };

  return (
    <div className="Sample">
      <div>{test.testfunction()}</div>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} value={date} />
        </main>
      </div>
    </div>
  );
}

export default MyCalender;
