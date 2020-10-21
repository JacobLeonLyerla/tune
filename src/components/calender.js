import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class MyCalender extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => {
    console.log(date)
    this.setState({ date })
    
}
  render() {
    const { value } = this.state;
    return (
      <div>
             <header>
          <h1>react-calendar sample page</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              onChange={this.onChange}
              showWeekNumbers
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}
export default MyCalender;