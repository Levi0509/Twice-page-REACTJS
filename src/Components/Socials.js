import React, { Component } from "react";
import "./Socials.css";
import Insta from "../Icons/instagram.png";
import YouTube from "../Icons/youtube (1).png";
import Tiktok from "../Icons/tiktok (1).png";
import Twitter from "../Icons/twitter (1).png";

export default class Socials extends Component {
  render() {
    return (
      <div className="social_icons">
        <div className="social">
          <a href="https://www.instagram.com/twicetagram">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCzgxx_DM2Dcb9Y1spb9mUJA">
            <img src={YouTube} alt="Youtube" />
          </a>
          <a href="https://twitter.com/JYPETWICE">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.tiktok.com/@twice_tiktok_official?lang=en">
            <img src={Tiktok} alt="Tiktok" />
          </a>{" "}
        </div>
      </div>
    );
  }
}
