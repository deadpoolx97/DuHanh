import React from "react";

const SearchColor = ({ onReceiveColor }) => {
  const color = [
    "#eb0707",
    "#ebcc1a",
    "#13f051",
    "#0a0909",
    "#571111",
    "#db0da7",
    "#ff8040",
    "#ffffff",
    "#cccccc",
    "#584949",
    "#522323",
    "#795b5b",
  ];
  const showColor = (color) => {
    return {
      backgroundColor: color,
      color: color,
    };
  };
  const setActiveClorl = (color) => {
    onReceiveColor(color);
  };

  return (
    <div>
      <div className="all-color__pick">
        {color.map((color, index) => (
          <span
            key={index}
            className="all-color__pick-item "
            style={showColor(color)}
            onClick={() => setActiveClorl(color)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SearchColor;
