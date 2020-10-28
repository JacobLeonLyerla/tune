import React, { useState } from "react";
import Calendar from "react-calendar";
import "../css/calendar.css";

 
  
 function MyCalender() {
 const [date,setDate] = useState(new Date());
 
const onChange = (date) => {
  console.log(date)
    setDate(date)
  };
 

    
    return (
      <div className="Sample">
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar onChange={onChange}  />
          </main>
        </div>
      </div>
    );
  }

export default MyCalender;
