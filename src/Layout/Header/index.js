import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-fixed">
            <nav className="header-navbar">
              <ul className="grid wide header-navbar-list">
                <li className="header-navbar-list__item">
                  <div className="phone-number">
                    <i className="fa fa-phone header-icon" />
                    <a className="phone-number__link" href="/#">
                      0347955937
                    </a>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope header-icon" />
                    <a className="email__link " href="/#">
                      lenam.khmt@gmail.com
                    </a>
                  </div>
                </li>
                <li className="header-navbar-list__item header-navbar-user">
                  <span className="header-navbar-user__name">
                    <i className="fa fa-user header-icon" />
                    Nam lê
                  </span>
                </li>
              </ul>
            </nav>
            <div className="header-m">
              <div className="grid wide ">
                <div className="header-main">
                  <div className="header-logo">
                    <Link to="/" className="header-logo__link">
                      <img
                        src="./images/logo-icon.png"
                        className="header-logo__img"
                        alt=""
                      />
                    </Link>
                  </div>
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
                  <div className="header-cart">
                    <button className="btn header-cart__btn">
                      <img
                        className="header-cart__img"
                        src="./images/cart-icon.png"
                        alt=""
                      />

                      <span className="header-cart__name"> Giỏ hàng</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-menu">
            <div className="grid wide header-menu__wrap">
              <div className="row">
                <div className="col l-3 m-12 c-12 header-menu__list-item-menu-all ">
                  <a
                    href="/#"
                    className="header-menu__list-item-link header-menu__list-item-menu"
                  >
                    Danh mục sản phẩm
                    <i className="fa fa-sort-down header-down" />
                  </a>
                  <ul className="header-menu__subnav">
                    <li className="header-menu__subnav-item header-menu__subnav-item-all">
                      <Link
                        to="/allItem"
                        className="header-menu__subnav-item-link"
                      >
                        <img
                          src="./images/all-icon.png"
                          alt=""
                          className="header-menu__subnav-item-img"
                        />
                        TẤT CẢ SẢN PHẨM
                        <i className="fa fa-caret-right fas-right" />
                      </Link>
                      <ul className="header-menu__subnav-item-all-item">
                        <li className="header-menu__subnav-item-all-item-pro">
                          <div className="grid a">
                            <div className="l-9 all__item">
                              <ul className="all__item-list">
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Tất Cả Vũ Trụ</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#"> Giáng Sinh - Decor</a>
                                </li>
                                <li className="l-4  all__item-list-item">
                                  <a href="/#">Quà tặng Giáng Sinh</a>
                                </li>
                                <li className="l-4  all__item-list-item">
                                  <a href="/#">Đèn - Space Light</a>
                                </li>
                                <li className="l-4  all__item-list-item">
                                  <a href="/#">Móc chìa khoá</a>
                                </li>
                                <li className="l-4  all__item-list-item">
                                  <a href="/#">Loa - Space Speaker</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Đồng Hồ</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Bình Nước</a>
                                </li>
                                <li className=" l-4 all__item-list-item">
                                  <a href="/#">Black Friday</a>
                                </li>
                                <li className=" l-4 all__item-list-item">
                                  <a href="/#">Space Gift Set</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Case AirPods</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Quà Tặng Cho Nam</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Quà Tặng Cho Nữ</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Quà Tặng Cặp Đôi</a>
                                </li>
                                <li className="l-4 all__item-list-item">
                                  <a href="/#">Cốc</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col l-3">
                              <img
                                className="item-img"
                                src="https://theme.hstatic.net/1000384816/1000493587/14/vertical_menu_last_col_img_1.png?v=307"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="header-menu__subnav-item">
                      <a href="/#" className="header-menu__subnav-item-link">
                        <img
                          src="./images/earth-icon.png"
                          alt=""
                          className="header-menu__subnav-item-img"
                        />
                        Sống xanh bảo vệ hành tinh
                      </a>
                    </li>
                    <li className="header-menu__subnav-item">
                      <a href="/#" className="header-menu__subnav-item-link">
                        <img
                          src="./images/gift-his-icon.png"
                          alt=""
                          className="header-menu__subnav-item-img"
                        />
                        Tặng gì cho người ta nhỉ
                      </a>
                    </li>
                    <li className="header-menu__subnav-item">
                      <a href="/#" className="header-menu__subnav-item-link">
                        <img
                          src="./images/couple-icon.png"
                          alt=""
                          className="header-menu__subnav-item-img"
                        />
                        Lựa đồ có đôi có cặp
                      </a>
                    </li>
                    <li className="header-menu__subnav-item">
                      <a href="/#" className="header-menu__subnav-item-link">
                        <img
                          src="./images/go-icon.png"
                          alt=""
                          className="header-menu__subnav-item-img"
                        />
                        Đồ cần thiết cho 1 chuyến đi
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" header-list ">
                  <div className="col l-3 header-menu__list-item-menu">
                    <Link to="/newYear" className="header-menu__list-item-link">
                      Tết
                    </Link>
                  </div>
                  <div className="col l-3 header-menu__list-item-menu">
                    <Link to="/manages" className="header-menu__list-item-link">
                      Du hành khắp nơi
                    </Link>
                  </div>
                  <div className="col l-3 header-menu__list-item-menu">
                    <a href="/#" className="header-menu__list-item-link">
                      Câu chuyện kẻ du hành
                    </a>
                  </div>
                  <div className="col l-3 header-menu__list-item-menu hide">
                    <a href="/#" className="header-menu__list-item-link">
                      Của hàng - liên hệ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;