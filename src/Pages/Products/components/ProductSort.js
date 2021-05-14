import React from "react";
import { Tab, Tabs } from "@material-ui/core";

const ProductSort = ({ currentSort, onChange }) => {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá tăng dần" value="salePrice:ASC"></Tab>
      <Tab label="Giá giảm dần" value="salePrice:DESC"></Tab>
    </Tabs>
  );
};

export default ProductSort;
