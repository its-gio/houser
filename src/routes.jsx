import React from "react";
import { Switch, Route } from "react-router-dom";
import Wizard from './components/Wizard';
import Dashboard from './components/Dashboard';


export default (
  <Switch>
    <Route path="/wizard/:step" component={Wizard} />
    <Route path="/" component={Dashboard} />
  </Switch>
)