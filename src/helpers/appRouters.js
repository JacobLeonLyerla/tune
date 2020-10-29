import React, { Fragment } from "react";
import Calendar from "../components/calender";
import { Route } from "react-router-dom";

export function routes() {
  return <Route exact path="/calendar" render={() => <Calendar />} />;
}
