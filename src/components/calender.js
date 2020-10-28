import React, { useState } from "react";
import Calendar from "react-calendar";
import "../css/calendar.css";

 const onChange = (date) => {
    this.setState({ date });
  };
  
 function MyCalender() {
 const [date] = useState();

 

    const { value } = this.state;
    return (
      <div className="Sample">
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar onChange={onChange} value={value} />
          </main>
        </div>
      </div>
    );
  }

export default MyCalender;
