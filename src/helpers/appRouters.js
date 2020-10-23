import React, {Fragment} from "react";
import {Route} from "react-router-dom"

export  function routes(){
    return<Route exact path="/Test"render={<div>Hello Wold</div>}/>
}