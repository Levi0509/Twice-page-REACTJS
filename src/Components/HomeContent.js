import React, { Component } from "react";
import GoButton from "./GoButton";
import "./HomeContent.css";
import Socials from "./Socials";

export default class HomeContent extends Component {
  render() {
    return (
      <div className="home_contents">
        <div className="content">
          <h1>Taste of Love</h1>
          <h2>Alchohol-Free</h2>
          <div className="line"> </div>
          <GoButton To="/Mobile/Profile" />
        </div>
        <Socials />
      </div>
    );
  }
}
