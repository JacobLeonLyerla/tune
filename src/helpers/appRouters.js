import React, { Fragment } from "react";
import Calendar from "../components/calender";
import ReactIntl from "../components/reactIntl";
import ID from "../components/Id"
import { Route } from "react-router-dom";

export function routes() {
  return (
    <Fragment>
      <Route exact path="/calendar" render={() => <Calendar />} />
      <Route exact path="/" render={() => <ReactIntl />} />
      <Route exact path="/" render={() => <ID />} />
    </Fragment>
  );
}
