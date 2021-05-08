import React, { Component } from "react";
import "../All-item/AllItem.css";
import Pagination from "react-js-pagination";
import SortItem from "./SortItem";
import SearchColor from "./SearchColor";
import { Link } from "react-router-dom";
// require("bootstrap/less/bootstrap.less");
class AllItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15,
      color: "eb0707",
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  onSetColor = (color) => {
    this.setState({
      color: color,
    });
    console.log(color);
  };
  render() {
    let products = [
      {
        id: 1,
        title: "Cốc sứ basic nắp nhựa",
        image:
          "https://product.hstatic.net/1000384816/product/z2292082063284_0ce120c36efe8207b1039d8769e15851_4a4a28057d7945ed9d70154673efdd41_medium.jpg",
        price: "350.000",
        priceSale: "105.000",
        alt: "hi",
      },

      {
        id: 2,
        title: "Bình nước giữ nhiệt",
        image:
          "https://product.hstatic.net/1000384816/product/3_22431094666_68195593_57a2c6453fcb4620b0cfd0da24c6710e_medium.jpg",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 3,
        title: "Đồng hồ emoji",
        image:
          "https://product.hstatic.net/1000384816/product/122661347_2564514120507314_8400781190144934781_n_992e8af262b047428bb687a90838bee5_medium.jpg",
        price: "300.000₫",
        priceSale: "200.000₫",
        alt: "hi",
      },
      {
        id: 4,
        title: "Móc chìa khoá Bull Dog",
        image:
          "https://product.hstatic.net/1000384816/product/z2183577483065_734ed47ce0f05d05a4899cd9039679a3_e45754bc765744d7ac461b9f01e319a2_medium.jpg",
        price: "100.000₫",
        priceSale: "75.000₫",
        alt: "hi",
      },
      {
        id: 5,
        title: "Lịch để bàn 2021 - 2021 Calendar",
        image:
          "https://product.hstatic.net/1000384816/product/1_39fb3a02f71f466a94aa44ff722d518c_medium.jpg",
        price: 350.0,
        priceSale: "105,000₫",
        alt: "hi",
      },
      {
        id: 6,
        title: "Set 3 tất - Red Pattern",
        image:
          "https://product.hstatic.net/1000384816/product/22809083934_1287971669_8ca5d820a6544bf1aa4c664a57e139eb_medium.jpg",
        price: " 350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 7,
        title: "Set cốc sứ Starlight",
        image:
          "https://product.hstatic.net/1000384816/product/21414607808_81571930_41629a4d6abf42e983d08e071a2a3d5c_medium.jpg",
        price: "350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 8,
        title: "Cốc ceramic hạc đỏ",
        image:
          "https://product.hstatic.net/1000384816/product/13797556262_625364377_b0a18af28a884c06899a2463e3353192_medium.jpg",
        price: "350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 9,
        title: "Ấm chén Trà Tết sum vầy",
        image:
          "https://product.hstatic.net/1000384816/product/13757578764_625364377_d713b14d617043a6a85ee0e0f8bd141e_medium.jpg",
        price: "350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 10,
        title: "CẤm chén Trà Tết xoắn tròn",
        image:
          "https://product.hstatic.net/1000384816/product/13803449645_625364377_0fbda8e8ccc744f8b1eabae6dacbeb0b_medium.jpg",
        price: "350.000",
        priceSale: "105,000₫",
        alt: "hi",
      },
      {
        id: 11,
        title: "Ấm chén Trà Tết Hoa đào",
        image:
          "https://product.hstatic.net/1000384816/product/13821539656_625364377_66e026076989461bbb3bb439dca92681_medium.jpg",
        price: "350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 12,
        title: "Ấm chén Trà Tết Sóng hoa",
        image:
          "https://product.hstatic.net/1000384816/product/13803449645_625364377_0fbda8e8ccc744f8b1eabae6dacbeb0b_medium.jpg",

        price: "350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 13,
        title: "Gạt tàn phi hành gia Limit",
        image:
          "https://product.hstatic.net/1000384816/product/1_10a694c1f7a648e0931aa450c6dabf28_medium.jpg",
        price: "350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 14,
        title: "Cốc sứ basic nắp nhựa",
        image:
          "https://product.hstatic.net/1000384816/product/z2292082063284_0ce120c36efe8207b1039d8769e15851_4a4a28057d7945ed9d70154673efdd41_medium.jpg",
        price: "350.000",
        priceSale: " 150.000",
        alt: "hi",
      },
      {
        id: 15,
        title: "Ấm chén Trà Tết Hoa đào",
        image:
          "//product.hstatic.net/1000384816/product/13757578764_625364377_d713b14d617043a6a85ee0e0f8bd141e_medium.jpg",
        price: "350.000",
        priceSale: "150.000",
        alt: "hi",
      },
      {
        id: 16,
        title: "Đèn Balance",
        image:
          "https://product.hstatic.net/1000384816/product/2_o1cn01qepat81idaai4pbis___3326764378_4322c8bf6bce478c94954d381674048b_medium.jpg",
        price: " 350.000",
        priceSale: "105.000",
        alt: "hi",
      },
    ];

    //
    //
    let elmProduct = products.map((product) => {
      return (
        <div className="col l-3-4  m-3 c-6 all-menu__item" key={product.id}>
          <div className="all-menu__item-m">
            <a href="/#" className="all-menu__item-link">
              <img
                src={product.image}
                alt="My"
                className="all-menu__item-link-img"
              />
              <h3 className="all-menu__item-link-title">{product.title}</h3>
            </a>
            <span className="all-menu__item-prices">
              <div className="all-menu__item-price-sale">{product.price}₫</div>
              <div className="all-menu__item-price">{product.priceSale}₫</div>
            </span>
          </div>
        </div>
      );
    });
    return (
      <div className="grid wide">
        <div className="row">
          <div className="app__container">
            <div className="all-main">
              <div className="col l-3  m-4 c-6 all-menu">
                <div className="all-item">
                  <div className="all-item-name">
                    <span>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "var(--primary-color)",
                        }}
                        to="/"
                      >
                        Trang chủ
                      </Link>{" "}
                      / Tất cả sản phẩm
                    </span>
                  </div>
                  <div className="all-trade">
                    <div className="all-brand">
                      <span style={{ fontSize: "1.4rem" }}>
                        Chọn thương hiệu
                      </span>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Khác
                      </div>
                    </div>
                    <div className="all-product__type">
                      <span style={{ fontSize: "1.4rem" }}>
                        Chọn thương hiệu
                      </span>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Đèn
                      </div>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Decor
                      </div>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Cốc
                      </div>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Bình giữ
                        nhiệt
                      </div>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Phụ kiện
                        điện thoại
                      </div>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Tượng -
                        Mô hình
                      </div>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Đèn led
                        3D
                      </div>
                      <div className="all-select">
                        <input className="checkbox" type="checkbox" /> Đồng hồ -
                        Lịch
                      </div>
                    </div>
                    <div className="all-color">
                      <span style={{ fontSize: "1.4rem" }}>Màu sắc</span>
                      <SearchColor
                        onReceiveColor={this.onSetColor}
                        color={this.state.color}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-9">
                <SortItem />
                <div className="all-menu_list">
                  <div className="all-menu__list-item">
                    <div className="row">{elmProduct}</div>
                  </div>
                </div>
                <div className="pagination-list">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllItem;
