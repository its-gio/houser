import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Step1 from "./Wizard/Step1";
import Step2 from "./Wizard/Step2";
import Step3 from "./Wizard/Step3";


export default class Wizard extends Component {
  render() {
    return (
      <div>
        <h2>Add New Listing</h2>
        <button>Cancel</button>
        <Switch>
          <Route path="/wizard/step1" component={Step1}/>
          <Route path="/wizard/step2" component={Step2}/>
          <Route path="/wizard/step3" component={Step3}/>
        </Switch>
      </div>
    )
  }
}