import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AllItem from "../Pages/All-item";
import Main from "../Pages/Main";
import Manages from "../Pages/Manages";
import NewYear from "../Pages/NewYear/NewYear";
import ProductFeature from "../Pages/Products";
import Product from "../Pages/Product";
import CartFeature from "../Layout/Cart";
import Location from "../Pages/Location/Location";

const RouterUrl = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/AllItem" component={AllItem} />
      <Route exact path="/newYear" component={NewYear} />
      <Route exact path="/productM/:id" component={Product} />
      <Route exact path="/Manages" component={Manages} />
      <Route path="/products" component={ProductFeature} />
      <Route path="/cart" component={CartFeature} />
      <Route path="/map" component={Location} />
      <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
    </Switch>
  );
};

export default RouterUrl;
