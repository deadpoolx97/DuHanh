import React from "react";
import "../Location.css";

const Travel = () => {
  return (
    <div className="row travel">
      <div className="  col l-5 c-5">
        <div className="travel-banner">
          <h1 className="travel-h1">Kẻ du hành</h1>
          <img
            alt=""
            className=" travel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdJA70IgfusYEN93qsSU1BMX20jlquZvoQA&usqp=CAU"
          />
        </div>
      </div>
      <div className="  col l-7 c-7">
        <div className="travel-banners">
          <h1 className="travel-h1s">
            Liên hệ ngay cho chúng tôi để mua những sản phẩm mà bạn yêu thích!!!
          </h1>
          <div class="grid-container">
            <img
              alt=""
              className="travel-sale__img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlENVzcCiiP-Vgp56KyxxsBAp6ZpdwWmVs8Q&usqp=CAU"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
