import React, { Component } from "react";
import GoButton from "../Components/GoButton";
import "./HomeContents.css";
import Socials from "../Components/Socials";

export default class HomeContent extends Component {
  render() {
    return (
      <div className="homeContents">
        <div className="Content">
          <h1>Taste of Love</h1>
          <h2>Alchohol-Free</h2>
          <div className="line"> </div>
          <GoButton To="/Default/Profile" />
        </div>
        <Socials />
      </div>
    );
  }
}
