import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../navbar/navigation";
import AboutUs from "../aboutUs/aboutUs.component";
import Dashboard from "../dashboard/dashboard.component";
import TestomonialsPage from "../testomonials/testomonials.component";

const Routes = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Dashboard} />
      <Route exact path="/aboutus" component={AboutUs} />
      {/* <Route exact path="/testomonials" component={TestomonialsPage} /> */}
    </Switch>
  </div>
);

export default Routes;
