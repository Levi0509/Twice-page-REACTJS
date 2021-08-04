/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from "react";
import "./SideDetails.css";

export default class SideDetails extends Component {
  render() {
    return (
      <div className="Details">
        <div className="number">
          <h3>
            <span>{this.props.Page}</span>/ <span>{this.props.Of}</span>
          </h3>
        </div>
        <div className="Line">
          <h1></h1>
        </div>
        <div className="Name">
          <h2>{this.props.Name}</h2>
        </div>
      </div>
    );
  }
}
