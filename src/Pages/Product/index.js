import React, { Component } from 'react';
import { } from "../Product/Product.css";
import { Link } from 'react-router-dom';
import AddProd from './AddProd';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1
        }
    }
    onChangAmount = (value) => {
        if (this.state.amount + value >= 1 && this.state.amount + value <= 100) {
            this.setState({
                amount: this.state.amount + value
            })
        }

    }
    onNotifi = () => {
        alert('a');
    }
    render() {
        return (
            <div className='app__container'>
                <div className="grid wide">
                    <div className='row '>
                        <div className='product'>
                            <div className='col l-6 m-6 c-12'>
                                <div className='product-name'>
                                    <Link to='./' className='product-name__go-home'>Trang chủ / </Link>
                                    <span>Bộ xếp hình The Moon - The Earth</span>
                                </div>
                                <div className="slider ">
                                    <input type="radio" name="slide_switch" id="id1" />
                                    <label htmlFor="id1">
                                        <img className="slide-img__small" src="https://product.hstatic.net/1000384816/product/24ddeb082e5fd101884e_a6acd4d16a044d95be68f8e8f3d7e2ef.jpg" alt='a' width={120} />
                                    </label>
                                    <img className="slide-img__big" src="https://product.hstatic.net/1000384816/product/24ddeb082e5fd101884e_a6acd4d16a044d95be68f8e8f3d7e2ef.jpg" alt='a' />
                                    <input type="radio" name="slide_switch" id="id2" defaultChecked="checked" />
                                    <label htmlFor="id2">
                                        <img alt='a' src="https://product.hstatic.net/1000384816/product/o1cn01ouzwuh2kq3bj1u45f___24159607-0-lubanu-s_7c89348c4ab840939f6138cdf6a05d19.jpg" width={120} />
                                    </label>
                                    <img alt='a' className="slide-img__big" src="https://product.hstatic.net/1000384816/product/o1cn01ouzwuh2kq3bj1u45f___24159607-0-lubanu-s_7c89348c4ab840939f6138cdf6a05d19.jpg" />
                                    <input type="radio" name="slide_switch" id="id3" />
                                    <label htmlFor="id3">
                                        <img alt='a' src="https://product.hstatic.net/1000384816/product/o1cn01eafdqf1e7jpnadvpb___1702020305_3b91a683aa8e41b0a59f112b07f3e08d.jpg" width={120} />
                                    </label>
                                    <img alt='a' className="slide-img__big" src="https://product.hstatic.net/1000384816/product/o1cn01eafdqf1e7jpnadvpb___1702020305_3b91a683aa8e41b0a59f112b07f3e08d.jpg" />
                                    <input type="radio" name="slide_switch" id="id4" />
                                    <label htmlFor="id4">
                                        <img alt='a' src="https://product.hstatic.net/1000384816/product/00785ee4b4b54beb12a4_ab15363d3ff54a69890fdad126167f12.jpg" width={120} />
                                    </label>
                                    <img alt='a' className="slide-img__big" src="https://product.hstatic.net/1000384816/product/00785ee4b4b54beb12a4_ab15363d3ff54a69890fdad126167f12.jpg" />
                                    <input type="radio" name="slide_switch" id="id5" />


                                </div>
                            </div>

                            <div className='col l-6 m-6 c-12 product-title '>
                                <h3 className='product-title__name'>Bộ xếp hình The Moon - The Earth</h3>
                                <span className='product-title__tag'>
                                    <p >
                                        <i className="fa fa-check product-title__tag-icon"></i>
                                Bảo hành: Bảo hành theo phiếu bảo hành trong sản phẩm (nếu có)
                                </p>
                                    <p >
                                        <i className="fa fa-check product-title__tag-icon"></i>
                                Thanh toán: Thanh toán bằng thẻ hoặc thanh toán khi nhận hàng.                                </p>
                                    <p >
                                        <i className="fa fa-check product-title__tag-icon"></i>
                                Chính hãng: Đảm bảo hàng tất cả sản phẩm bán trên website có xất xứ rõ ràng                                </p>
                                </span>
                                <div className='product-price'>
                                    250,000₫ Còn hàng
                            </div>
                                <div className='product-amount'>
                                    <h3 className='product-amount__title'>Số lượng : </h3>
                                    <AddProd
                                        amount={this.state.amount}
                                        onChangAmount={this.onChangAmount}
                                        onNotifi={this.onNotifi}
                                    />
                                </div>
                                <div className='btn product-buy'
                                    onClick={this.onNotifi}
                                >
                                    MUA HÀNG
                                </div>
                            </div>
                        </div>
                        <div className='product-describe'>
                            <h3 className='product-describe__name'>Mô tả sản phẩm</h3>
                            <h4 className='product-describe__title'>
                                Bộ xếp hình 1000 Mảnh THE MOON THE EARTH– KẺ DU HÀNH
                           </h4>
                            <p className='product-describe__content'>
                                Khác với những bộ ghép hình bình thường, bộ ghép hình The Moon – The Earth này chính là hình ảnh thực của Mặt Trăng, Trái Đất, với độ phân giải cao. Nếu bạn nhìn kỹ thì nó giống y như hình ảnh biểu tượng mà Cơ quan Hàng không Vũ trụ Hoa Kỳ (NASA) đã chụp  đấy. Và tính đến nay thì đó là hình ảnh Mặt Trăng rõ nhất mà con người từng chụp được.

                                Và cũng khác với những bộ ghép hình thông thường, bộ xếp hình này có hình tròn xoe! Tức là nó càng khó hơn, bởi thay vì phải tìm những miếng ghép có cạnh thẳng, thì bạn lại phải tìm những miếng có hình hơi tròn để ghép đường viền ngoài trước.

                                Bộ này gồm 1.000 miếng ghép, và không miếng nào hoàn toàn giống nhau. Bạn nhớ ghép lên tấm bảng để khi xong thì treo lên tường nhé. Sau đó, bạn có thể nằm ngắm thành quả của mình mỗi ngày và tha hồ mơ mộng. Mặt Trăng này có đường kính gần 70cm cơ mà - nó đích thị là một tác phẩm nghệ thuật trong phòng bạn đấy!

                                Đảm bảo đây sẽ là QUÀ TẶNG TUYỆT VỜI NHẤT cho bạn bè, người thân đem lại một trải nghiệm kinh ngạc đầy mộng mơ
                           </p>
                            <h4 className='product-describe__title'>
                                Mô tả:
                           </h4>
                            <p className='product-describe__content'>
                                Chất liệu: Bộ xếp hình làm bằng giấy chất lượng cao
                                Mảnh ghép được cắt laser và sử dụng mực tốt nhất tạo ra hình ảnh đẹp, sắc nét, rõ ràng, và một đáng kinh ngạc xúc giác trải nghiệm.

                                2. Kích thước sản phẩm: 67,3 x 67,3 cm (đường kính)
                           </p>
                        </div>

                    </div>
                    <div className='share'>
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-facebook-messenger"></i>
                        <i className="fa fa-envelope-square"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;