import React, { useCallback, useState } from "react";
import "../All-item/AllItem.css";
import SearchColor from "./components/SearchColor";
import SortItem from "./components/SortItem";
import { Link } from "react-router-dom";
import { MOCK_ITEMS } from "../itemData";
import PaginationCommon from "./components/Pagination";

const AllItem = () => {
  const [color, SetColor] = useState("eb0707");
  const [currentPage, setCurrentPage] = useState(1);

  let NUM_OF_RECORDS = MOCK_ITEMS.length;
  let LIMIT = 16;
  const onPageChanged = useCallback((event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  }, []);
  const currentComments = MOCK_ITEMS.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );
  const onSetColor = (color) => {
    SetColor(color);
  };
  console.log(color);
  let elmProduct = currentComments.map((product) => {
    return (
      <div className="col l-3-4  m-3 c-6 all-menu__item" key={product.id}>
        <div className="all-menu__item-m">
          <Link to={`/productM/${product.id}`} className="all-menu__item-link">
            <span className="all-menu__item-link-img">
              <img style={{ width: "100%" }} src={product.images} alt="My" />
              <div className="all-menu__action">
                <div className="all-menu__action-icon">
                  <div className="view">
                    <i className="fa fa-search-plus" />
                  </div>
                  <div className="add-cart">
                    <i className="fa fa-cart-plus" />
                  </div>
                </div>
              </div>
            </span>

            <h3 className="all-menu__item-link-title">{product.title}</h3>
          </Link>
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
                    </Link>
                    / Tất cả sản phẩm
                  </span>
                </div>
                <div className="all-trade">
                  <div className="all-brand">
                    <span style={{ fontSize: "14px" }}>Chọn thương hiệu</span>
                    <div className="all-select">
                      <input className="checkbox" type="checkbox" /> Khác
                    </div>
                  </div>
                  <div className="all-product__type">
                    <span style={{ fontSize: "14px" }}>Chọn thương hiệu</span>
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
                      <input className="checkbox" type="checkbox" /> Tượng - Mô
                      hình
                    </div>
                    <div className="all-select">
                      <input className="checkbox" type="checkbox" /> Đèn led 3D
                    </div>
                    <div className="all-select">
                      <input className="checkbox" type="checkbox" /> Đồng hồ -
                      Lịch
                    </div>
                  </div>
                  <div className="all-color c-12 m-12">
                    <span style={{ fontSize: "14px" }}>Màu sắc</span>
                    <SearchColor onReceiveColor={onSetColor} color={color} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col l-9">
              <div className="all-color c-12 m-12">
                <span style={{ fontSize: "14px" }}>Màu sắc</span>
                <SearchColor onReceiveColor={onSetColor} color={color} />
              </div>
              <SortItem color={color} />
              <div className="all-menu_list">
                <div className="all-menu__list-item">
                  <div className="row">{elmProduct}</div>
                </div>
              </div>
              <div className="pagination-list">
                <PaginationCommon
                  totalRecords={NUM_OF_RECORDS}
                  pageLimit={LIMIT}
                  pageNeighbours={1}
                  onPageChanged={onPageChanged}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItem;
