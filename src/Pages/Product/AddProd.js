import React, { Component } from 'react';

class AddProd extends Component {
    changeAmount = (value) => {
        this.props.onChangAmount(value);
    }
    render() {
        return (
            <div>
                <div className='product-amount__btn'>
                    <button className='product-amount__btn-minus'
                        onClick={() => this.changeAmount(-1)}
                    >
                        <i className="fa fa-minus"></i>
                    </button>
                    <div className='product-amount__btn-number'>
                        {this.props.amount}
                    </div>
                    <button className='product-amount__btn-bonus '
                        onClick={() => this.changeAmount(+1)}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default AddProd;