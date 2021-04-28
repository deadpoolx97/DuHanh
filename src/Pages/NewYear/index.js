import React, { Component } from "react";
import classNames from "classnames";
import {} from "./NewYear.css";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class NewYear extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
    };
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor),
      });
    }, 1000);
  }
  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }
  componentWillUnmount() {}
  render() {
    const { currentColor } = this.state;
    return (
      <div className="app__container">
        <div className="grid wide traffictALL">
          <div className="TrafficLight">
            <div
              className={classNames("bulb", "red", {
                active: currentColor === RED,
              })}
            />
            <div
              className={classNames("bulb", "orange", {
                active: currentColor === ORANGE,
              })}
            />
            <div
              className={classNames("bulb", "green", {
                active: currentColor === GREEN,
              })}
            />
          </div>
          <img
            className="newYearImg"
            src="https://camnang24h.net/wp-content/uploads/2019/08/Thiep-va-hinh-anh-dong-chuc-mung-nam-moi-2020.gif"
            alt="a"
          ></img>
          <div className="TrafficLight">
            <div
              className={classNames("bulb", "red", {
                active: currentColor === RED,
              })}
            />
            <div
              className={classNames("bulb", "orange", {
                active: currentColor === ORANGE,
              })}
            />
            <div
              className={classNames("bulb", "green", {
                active: currentColor === GREEN,
              })}
            />
          </div>
        </div>

        <div className="grid wide"></div>
      </div>
    );
  }
}

export default NewYear;
