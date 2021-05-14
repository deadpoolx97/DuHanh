import React from "react";
import { useSelector } from "react-redux";
import { cartTotalSelector, cartItemsCountSelector } from "./selectors";

const CartFeature = (props) => {
  const cartTotalPrice = useSelector(cartTotalSelector);
  const cartTotal = useSelector(cartItemsCountSelector);
  const totalPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(cartTotalPrice);

  return (
    <div className="app__container">
      <div className="grid wide">
        <img
          alt=""
          src="https://t4.ftcdn.net/jpg/00/97/00/05/360_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg"
        />
        <h3>
          Tổng số tiền của {cartTotal} sản phẩm là : {totalPrice}
        </h3>
      </div>
    </div>
  );
};
CartFeature.propTypes = {};

export default CartFeature;
