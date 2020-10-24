import React, { Component } from "react";
import Calendar from "react-calendar";
import "../css/calendar.css";
class MyCalender extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => {
    this.setState({ date });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="Sample">

        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar onChange={this.onChange} value={value}/>
          </main>
        </div>
      </div>
    );
  }
}
export default MyCalender;
