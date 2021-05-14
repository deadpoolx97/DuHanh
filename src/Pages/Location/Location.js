import React from "react";
import Travel from "../Location/component/Travel";

const Location = () => {
  return (
    <div
      style={{
        top: "calc(var(--header-height) )",
      }}
    >
      <div className="background-img__map">
        <img
          alt="oks"
          src="https://wallpapercave.com/wp/wp2469829.jpg"
          style={{ width: "100%", zIndex: "-1" }}
        />
        <Travel />
      </div>
    </div>
  );
};

export default Location;
