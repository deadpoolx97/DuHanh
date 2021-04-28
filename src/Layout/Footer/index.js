import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="grid wide">
            <div className="row">
              <div className="col l-2-4 m-4 c-6 footer__margin">
                <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Trung Tâm Trợ Giúp</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Hướng Dẫn Bán Hàng</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Hướng Dẫn Bán Hàng</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Thanh Toán</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Vận Chuyển</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6 footer__margin">
                <h3 className="footer__heading"> Giới thiệu </h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Giới thiệu</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Điều Khoản</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Chính Hãng</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Chính Sách Bảo Mật</a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">Liên Hệ Với Truyền Thông</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6 pay__m footer__margin">
                <ul className="footer-list">
                  <img src="/" alt="" />
                </ul>
                <h3 className="footer__heading">Thanh toán</h3>
                <ul className="footer-list">
                  <img src="./images/no-cart.png" alt="" />
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6 footer__margin">
                <h3 className="footer__heading">Mạng xã hội</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">
                      <i className="footer-item__icon fa fa-facebook" />
                    Facebook
                  </a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">
                      <i className="footer-item__icon fa fa-instagram" />
                    Instagram
                  </a>
                  </li>
                  <li className="footer-item">
                    <a href="/#" className="footer-item__link">
                      <i className="footer-item__icon fa fa-linkedin" />
                    LinkedIn
                  </a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6 footer__margin">
                <h3 className="footer__heading">Tải ứng dụng ngay thôi</h3>
                <div className="footer__download">
                  <img src="./images/qr_code.png" alt="" className="footer__download-qr" />
                  <div className="footer__download-app">
                    <a href="/#" className="footer_download-app-link">
                      <img src="./images/app_store.png" alt="" className="footer_download-app-img" />
                    </a>
                    <a href="/#" className="footer_download-app-link">
                      <img src="./images/google_play.png" alt="" className="footer_download-app-img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;