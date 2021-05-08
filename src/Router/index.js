import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import AllItem from "../Pages/All-item";
import Main from "../Pages/Main";
import Manages from "../Pages/Manages";
import NewYear from "../Pages/NewYear";
import Product from "../Pages/Product";

class RouterUrl extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/AllItem" component={AllItem} />
        <Route exact path="/newYear" component={NewYear} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/Manages" component={Manages} />
      </Switch>
    );
  }
}

export default RouterUrl;
