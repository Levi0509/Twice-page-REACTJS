/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import "./VideoPlay.css";

export default class VideoPlay extends Component {
  render() {
    return (
      <div className="popupVideoParent" data-aos="zoom-out">
        <div className="popupVideo">
          <button
            className="imageClosingButton"
            onClick={this.props.closePopup}
          >
            X
          </button>
          <iframe
            width="98%"
            height="274"
            src={`https://www.youtube.com/embed/${this.props.popVideoId}?&theme=dark&autohide=2`}
            frameborder="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
