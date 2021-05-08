import React from "react";

const AddProd = ({ amount, onChangeAmount }) => {
  return (
    <div className="product-amount__btn">
      <button
        className="product-amount__btn-minus"
        onClick={() => onChangeAmount(-1)}
      >
        <i className="fa fa-minus"></i>
      </button>
      <div className="product-amount__btn-number">{amount}</div>
      <button
        className="product-amount__btn-bonus "
        onClick={() => onChangeAmount(+1)}
      >
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
};

export default AddProd;
