import React, { Component } from 'react';

class SearchColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: [
                '#eb0707',
                '#ebcc1a',
                '#13f051',
                '#0a0909',
                '#571111',
                '#db0da7',
                '#ff8040',
                '#ffffff',
                '#cccccc',
                '#584949',
                '#522323',
                '#795b5b',
            ]
        }
    }
    showColor = (color) => {
        return {
            backgroundColor: color
        }

    }
    setActiveClorl = (color) => {
        this.props.onReceiveColor(color);
    }

    render() {
        let elmColor = this.state.color.map((color, index) => {
            return <span
                key={index}
                className="all-color__pick-item "
                style={this.showColor(color)}
                onClick={() => this.setActiveClorl(color)
                }
            >
            </span >
        })
        return (
            <div className="all-color__pick">
                { elmColor}

            </div>
        );
    }
}

export default SearchColor;