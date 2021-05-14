import React from "react";

const SortItem = (props) => {
  const { color } = props;

  return (
    <>
      <div>
        <div className="all-header" style={{ color }}>
          Sắp Xếp:
          <select className="col l-2 all-select">
            <option value>Mặc định</option>
            <option value>Gía tăng dần</option>
            <option value>Gía giảm dần</option>
            <option value>Từ A đến Z</option>
            <option value>Từ Z đến A</option>
          </select>
        </div>
      </div>
      <div className="boxx" style={{ background: color }}></div>
    </>
  );
};

export default SortItem;
