/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Arrows.css";

export default class Arrows2 extends Component {
  constructor(props) {
    super(props);
    this.arrowRef = React.createRef();
  }

  rotateArrow() {
    this.arrowRef.current.styles.transform = "rotate(180deg)";
  }
  render() {
    return (
      <a href={`#${this.props.To}`} className="ArrowBox2" ref={this.arrowRef}>
        <a
          href={`#${this.props.To}`}
          className="animate__animated animate__fadeInRight animate__infinite"
        >
          <span
            class="material-icons  animate__animated animate__fadeInRight animate__delay-1s animate__infinite"
            id="Arrow1"
          >
            &#xe408;
          </span>
          <span class="material-icons" id="Arrow2">
            &#xe408;
          </span>
        </a>
        <span className="location">{this.props.Location}</span>
      </a>
    );
  }
}
