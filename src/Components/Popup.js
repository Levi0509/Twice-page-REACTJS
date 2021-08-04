import React, { Component } from "react";
import "./Gallery.css";

export default class Popup extends Component {
  render() {
    return (
      <div
        data-aos="zoom-out"
        className="popupParent"
        onScroll={this.props.closePopup}
      >
        <div className="popupImage">
          <button
            className="imageClosingButton"
            onClick={this.props.closePopup}
          >
            X
          </button>
          <img src={this.props.popImageUrl} alt="" />
        </div>
      </div>
    );
  }
}
