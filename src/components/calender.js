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
        <header>
          <h1>react-calendar sample page</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar onChange={this.onChange} value={value} activeStartDate={new Date(207, 0, 1)} />
          </main>
        </div>
      </div>
    );
  }
}
export default MyCalender;
