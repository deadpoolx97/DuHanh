import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import QuantityField from "../../../Layout/form-controls/QuantityField";

const AddToCartForm = ({ onSubmit = null }) => {
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
    console.log(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h3 className="product-amount__title">Số lượng : </h3>
      <QuantityField name="quantity" form={form} />
      <button
        type="submit"
        variant="contained"
        color="var(--primary-color)"
        className="btn product-buy"
        size="large"
      >
        MUA HÀNG
      </button>
    </form>
  );
};
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default AddToCartForm;
