import React from "react";

const SortItem = (props) => {
  const { color } = props;

  return <div className="boxx" style={{ background: color }}></div>;
};

export default SortItem;
