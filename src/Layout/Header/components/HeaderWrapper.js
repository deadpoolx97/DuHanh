import { Link } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { cartItemsCountSelector } from "../../Cart/selectors";

const HeaderWrapper = () => {
  const history = useHistory();
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const handleCartClick = () => {
    history.push("/cart");
  };
  const handleHomeClick = () => {
    history.push("/");
  };
  return (
    <div className="header-m">
      <div className="grid wide ">
        <div className="header-main">
          <Link to="/products" className="header-logo__link">
            <img
              onClick={handleHomeClick}
              src="./images/logo-icon.png"
              className="header-logo__img"
              alt=""
            />
          </Link>
          <label
            htmlFor="mobile-search-checkbox"
            className="header__mobile-search"
          >
            <i className="header__mobile-search-icon fa fa-search" />
          </label>
          <div className="header-search">
            <div className="header-search__input-wrap">
              <input
                placeholder="Nhập để tìm kiếm sản phẩm"
                className="header-search__input"
              />
            </div>
            <div className="header-search__btn">
              <button className="btn ">
                Tìm kiếm
                <i className="fa fa-search header-search__btn-icon" />
              </button>
            </div>
          </div>
          <div className="header-shop ">
            <img
              src="./images/shop-icon.png"
              alt=""
              className="header-shop__img"
            />
            <span className="header-shop_name">Cửa hàng</span>
          </div>
          <div className="header-cart" onClick={handleCartClick}>
            <button className="btn header-cart__btn">
              <img
                className="header-cart__img"
                src="./images/cart-icon.png"
                alt=""
              />

              <span className="header-cart__name">
                Giỏ hàng : {cartItemsCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
