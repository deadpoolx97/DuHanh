import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="app__container">
      <div className="grid wide">
        <div className="row">
          <nav className="slide-container">
            <div className="image-slideshow">
              <div>
                <img
                  className="slide-img"
                  src="https://www.setaswall.com/wp-content/uploads/2019/01/Astronaut-Wallpaper-01-1920x1080.jpg"
                  alt=""
                />
                <div>
                  <h2>Kẻ Du Hành</h2>
                  <p>Người được chọn là bạn...</p>
                </div>
              </div>
              <div>
                <img
                  className="slide-img"
                  src="https://c.wallhere.com/photos/55/9f/quote_Neil_Armstrong_Earth_space_space_suit_Moon_text_typography-258759.jpg!d"
                  alt=""
                />
                <div>
                  <h2>Kẻ Du Hành</h2>
                  <p>Người được chọn là bạn...</p>
                </div>
              </div>
              <div>
                <img
                  className="slide-img"
                  src="https://c.wallhere.com/photos/8c/5a/astronaut_kittens_minimalism_Astronauta_cat_space_suit-144818.jpg!d"
                  alt=""
                />
                <div>
                  <h2>Kẻ Du Hành</h2>
                  <p>Người được chọn là bạn...</p>
                </div>
              </div>
              <div>
                <img
                  className="slide-img"
                  src="https://c.wallhere.com/photos/8c/5a/astronaut_kittens_minimalism_Astronauta_cat_space_suit-144818.jpg!d"
                  alt=""
                />
                <div>
                  <h2>Kẻ Du Hành</h2>
                  <p>Người được chọn là bạn...</p>
                </div>
              </div>
              <div>
                <img
                  className="slide-img"
                  src="https://c.wallhere.com/photos/8c/5a/astronaut_kittens_minimalism_Astronauta_cat_space_suit-144818.jpg!d"
                  alt=""
                />
                <div>
                  <h2>Kẻ Du Hành</h2>
                  <p>Người được chọn là bạn...</p>
                </div>
              </div>
              <div>
                <img
                  className="slide-img"
                  src="https://c.wallhere.com/photos/8c/5a/astronaut_kittens_minimalism_Astronauta_cat_space_suit-144818.jpg!d"
                  alt=""
                />
                <div>
                  <h2>Kẻ Du Hành</h2>
                  <p>Người được chọn là bạn...</p>
                </div>
              </div>
            </div>
          </nav>
          <div className="home-colection">
            <div className="home-collection--main">
              <img
                src="./images/earth-icon.png"
                style={{ padding: "5px 5px 0 5px" }}
                alt=""
              />
              <span>KẺ DU HÀNH</span>
            </div>
          </div>
          <div className="home-product">
            <div className="row sm-gutter">
              {LIST_1.map((item) => (
                <div
                  key={item.id}
                  className="col l-2-4 m-4 c-6 home-product__border"
                >
                  <div className="home-product__item">
                    <Link
                      to={`/productM/${item.id}`}
                      className="home-product__item-link"
                    >
                      <img style={{ width: "100%" }} src={item.images} alt="" />

                      <h3 className="home-product__title">{item.title}</h3>
                    </Link>
                    <div className="home-product__action">
                      <div className="home-product__action-icon">
                        <div className="view">
                          <i className="fa fa-search-plus" />
                        </div>
                        <div className="add-cart">
                          <i className="fa fa-cart-plus" />
                        </div>
                      </div>
                    </div>
                    <span className="home-product__price">
                      {" "}
                      {item.salePrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="home__space">
            <div className="row">
              <div className="home-colection">
                <div className="home-collection--main">
                  <img
                    src="./images/all-icon.png"
                    style={{ padding: "5px 5px 0 5px" }}
                    alt=""
                  />
                  <span>SPACE</span>
                </div>
              </div>
              {LIST_2.map((item) => (
                <div
                  key={item.id}
                  className="col l-2-4 m-4 c-6 home-product__border"
                >
                  <Link
                    to={`/productM/${item.id}`}
                    className="home-product__item-link"
                  >
                    <div className="home-product__item">
                      <div href="/#" className="home-product__item-link">
                        <img
                          style={{ width: "100%" }}
                          src={item.images}
                          alt=""
                        />
                        <div className="home-product__action">
                          <div className="home-product__action-icon">
                            <div className="view">
                              <i className="fa fa-search-plus" />
                            </div>
                            <div className="add-cart">
                              <i className="fa fa-cart-plus" />
                            </div>
                          </div>
                        </div>
                        <h3 className="home-product__title">{item.title}</h3>
                      </div>
                      <span className="home-product__price">
                        {item.salePrice}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="home__space">
            <div className="row">
              <div className="home-colection">
                <div className="home-collection--main">
                  <img
                    src="./images/couple-icon.png"
                    style={{ padding: "5px 5px 0 5px" }}
                    alt=""
                  />
                  <span>MISS</span>
                </div>
              </div>
              {LIST_3.map((item) => (
                <div
                  key={item.id}
                  className="col l-2-4 m-4 c-6 home-product__border"
                >
                  <Link
                    to={`/productM/${item.id}`}
                    className="home-product__item-link"
                  >
                    <div className="home-product__item">
                      <div href="/#" className="home-product__item-link">
                        <img
                          style={{ width: "100%" }}
                          src={item.images}
                          alt=""
                        />
                        <div className="home-product__action">
                          <div className="home-product__action-icon">
                            <div className="view">
                              <i className="fa fa-search-plus" />
                            </div>
                            <div className="add-cart">
                              <i className="fa fa-cart-plus" />
                            </div>
                          </div>
                        </div>
                        <h3 className="home-product__title">{item.title}</h3>
                      </div>
                      <span className="home-product__price">
                        {item.salePrice}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const LIST_1 = [
  {
    id: "1",
    title: "Bộ xếp hình  ",
    salePrice: "250,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/24ddeb082e5fd101884e_a6acd4d16a044d95be68f8e8f3d7e2ef_medium.jpg",
  },
  {
    id: "2",
    title: "Đèn Led",
    salePrice: "350,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/96c4f262c4d942a0bce86786552b820c_89ade52768e5485fa263b1ff37a5a7e8_medium.jpg",
  },
  {
    id: "3",
    title: "Đèn UFO",
    salePrice: "210,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/125202683_2579484139010312_194843452622553207_n_9238b135767a4d078c0f548a26c0b9d3_medium.jpg",
  },
  {
    id: "4",
    title: "Đồng Hồ UFO",
    salePrice: "550,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/1_10a694c1f7a648e0931aa450c6dabf28_medium.jpg",
  },
  {
    id: "5",
    title: "Gạt Tàn Phi Hành Gia",
    salePrice: "150,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/12792750788_10287796_06cdc05731b14fbda59f4ab8b203d0a4_medium.jpg",
  },
  {
    id: "6",
    title: " Thảm treo tường mặt trăng",
    salePrice: "200,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/71945112_2243904609234935_6454464740621025280_n_cdf8a35d1c084a5caab63543cf2ff92f_medium.jpg",
  },
  {
    id: "7",
    title: "Thảm phi hành gia mèo",
    salePrice: "300,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/o1cn01sa13ja25hvuvu3axy___1726107501_b1f9d18a61da42d39d7ac75301ef7a75_medium.jpg",
  },
  {
    id: "8",
    title: "Thảm teo tường mặt trăng",
    salePrice: "200,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/o1cn011inxp4arsuu55yw___196400881_b466972f0aac46deb268fe9b5c6096a2_medium.jpg",
  },
  {
    id: "9",
    title: "Bộ xếp hình The Moon ",
    salePrice: "600,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/67544418_2196811897277540_9191531180841762816_n_b88ed090d8a74e5499b65ce2b3d1f11e_medium.jpg",
  },
  {
    id: "10",
    title: "Bộ xếp hình The Earth",
    salePrice: "150,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/o1cn01qtfwaj2hkc3ikq4e4___807169189_714441d0aa1748c49046ecdcc3fd769d_medium.jpg",
  },
];
const LIST_2 = [
  {
    id: "1",
    title: "Case AirPods Black Robot",
    salePrice: "150,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/o1cn010ixnob1fuzf932ec0___2259520547-0-lubanu-s_bcec713653ad404e9aaee307aa7297ad_medium.jpg",
  },
  {
    id: "2",
    title: "Case AirPods Chó Pug",
    salePrice: "520,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/o1cn01p6l0z429jzkirp2aj___3895628047_928cf8c7174848b3aad1921fbe3d2168_medium.jpg",
  },
  {
    id: "3",
    title: "Case AirPods Games box",
    salePrice: "200,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/o1cn01jdprrk2fhhxfphzxr___42658911_a92d6fbe2c9f49219d4fb018be8a2615_medium.jpg",
  },
  {
    id: "4",
    title: "Case AirPods Nasa",
    salePrice: "150,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/12571936399_520447672_62cf4c4f8aa9423fb1536514ba191de5_medium.jpg",
  },
  {
    id: "5",
    title: "Case AirPods Robot White",
    salePrice: "250,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/o1cn01cj6ovu1fuzfgyfwvc___2259520547_96ea6a79f9364a25abf31a3206b70847_medium.jpg",
  },
];
const LIST_3 = [
  {
    id: "1",
    title: "Đèn But Lamp",
    salePrice: "150,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/761e90001d97e7c9be86_e7d203c483f04c6993936612b55e986e_medium.jpg",
  },
  {
    id: "2",
    title: "Đèn chòm sao",
    salePrice: "520,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/untitled-3_0092c69cb4424f86b9db7ac943d5ebf1_medium.jpg",
  },
  {
    id: "3",
    title: "Đèn Little Pet House",
    salePrice: "200,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/13509887867_1743032699_129a41b3c9754e68b5c9edca515469b6_medium.jpg",
  },
  {
    id: "4",
    title: "Đèn trực thăng",
    salePrice: "150,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/90144941_2380627578895970_3431204400171843584_o_b4bfc6e392ea4c80a85025424c272490_medium.jpg",
  },
  {
    id: "5",
    title: "Robot White",
    salePrice: "250,000₫",
    priceSale: "250,000₫",
    images:
      "https://product.hstatic.net/1000384816/product/9296805564_1743032699_6417ad3575a34b4681e88dcf2ccf8c6e_medium.jpg",
  },
];
export default Main;
