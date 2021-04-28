import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const index = () => {
  const MOCK_DATA_1 = [
    {
      id: 1,
      title: "Bộ xếp hình The Moon - The Earth",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/24ddeb082e5fd101884e_a6acd4d16a044d95be68f8e8f3d7e2ef_medium.jpg",
    },
    {
      id: 2,
      title: "Đèn Led",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/96c4f262c4d942a0bce86786552b820c_89ade52768e5485fa263b1ff37a5a7e8_medium.jpg",
    },
    {
      id: 3,
      title: "Đèn UFO",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/125202683_2579484139010312_194843452622553207_n_9238b135767a4d078c0f548a26c0b9d3_medium.jpg",
    },
    {
      id: 4,
      title: "Đồng Hồ UFO",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/1_10a694c1f7a648e0931aa450c6dabf28_medium.jpg",
    },
    {
      id: 5,
      title: "Gạt Tàn Phi Hành Gia",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/12792750788_10287796_06cdc05731b14fbda59f4ab8b203d0a4_medium.jpg",
    },
    {
      id: 6,
      title: " Thảm treo tường mặt trăng",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/71945112_2243904609234935_6454464740621025280_n_cdf8a35d1c084a5caab63543cf2ff92f_medium.jpg",
    },
    {
      id: 7,
      title: "Thảm teo tường phi hành gia",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/o1cn01sa13ja25hvuvu3axy___1726107501_b1f9d18a61da42d39d7ac75301ef7a75_medium.jpg",
    },
    {
      id: 8,
      title: "Thảm teo tường phi hành gia mèo",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/o1cn011inxp4arsuu55yw___196400881_b466972f0aac46deb268fe9b5c6096a2_medium.jpg",
    },
    {
      id: 9,
      title: "Bộ xếp hình The Moon - The Earth",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/24ddeb082e5fd101884e_a6acd4d16a044d95be68f8e8f3d7e2ef_medium.jpg",
    },
    {
      id: 10,
      title: "Bộ xếp hình The Moon - The Earth",
      price: "250,000₫",
      priceSale: "250,000₫",
      images:
        "https://product.hstatic.net/1000384816/product/24ddeb082e5fd101884e_a6acd4d16a044d95be68f8e8f3d7e2ef_medium.jpg",
    },
  ];
  return (
    <div className="app__container">
      <div className="grid wide">
        <div className="row">
          <nav className="slide-container">
            <div className="image-slideshow">
              <div>
                <img
                  className="slide-img"
                  src="https://theme.hstatic.net/1000384816/1000493587/14/slider_1.jpg?v=307"
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
              {MOCK_DATA_1.map((data) => (
                <div
                  key={data.id}
                  className="col l-2-4 m-4 c-6 home-product__border"
                >
                  <div className="home-product__item">
                    <Link to="/Product" className="home-product__item-link">
                      <img style={{ width: "100%" }} src={data.images} alt="" />
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
                      <h3 className="home-product__title">{data.title}</h3>
                    </Link>
                    <span className="home-product__price"> {data.price}</span>
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
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/916087297_625364377_b47c674f43854596886ba1d451e75d4d_medium.jpg"
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
                    <h3 className="home-product__title">Âms chén hoa đào đỏ</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/916087297_625364377_b47c674f43854596886ba1d451e75d4d_medium.jpg"
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
                    <h3 className="home-product__title">Âms chén hoa đào đỏ</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/916087297_625364377_b47c674f43854596886ba1d451e75d4d_medium.jpg"
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
                    <h3 className="home-product__title">Âms chén hoa đào đỏ</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/916087297_625364377_b47c674f43854596886ba1d451e75d4d_medium.jpg"
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
                    <h3 className="home-product__title">Âms chén hoa đào đỏ</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/916087297_625364377_b47c674f43854596886ba1d451e75d4d_medium.jpg"
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
                    <h3 className="home-product__title">Âms chén hoa đào đỏ</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
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
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/2_3e034afb14d34eeea2219399d5661cff_medium.png"
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
                    <h3 className="home-product__title">Đèn Led</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/2_3e034afb14d34eeea2219399d5661cff_medium.png"
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
                    <h3 className="home-product__title">Đèn Led</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/2_3e034afb14d34eeea2219399d5661cff_medium.png"
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
                    <h3 className="home-product__title">Đèn Led</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/2_3e034afb14d34eeea2219399d5661cff_medium.png"
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
                    <h3 className="home-product__title">Đèn Led</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
              <div className="col l-2-4 m-4 c-6 home-product__border">
                <div className="home-product__item">
                  <a href="/#" className="home-product__item-link">
                    <img
                      style={{ width: "100%" }}
                      src="https://product.hstatic.net/1000384816/product/2_3e034afb14d34eeea2219399d5661cff_medium.png"
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
                    <h3 className="home-product__title">Đèn Led</h3>
                  </a>
                  <span className="home-product__price"> 250,000₫</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
