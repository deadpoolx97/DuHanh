import React from "react";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "./selectors";

const CartFeature = (props) => {
  const cartTotal = useSelector(cartTotalSelector);

  return <div className="app__container">Cart Feature {cartTotal}</div>;
};
CartFeature.propTypes = {};

export default CartFeature;
