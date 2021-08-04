/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import Logo from "../Images/Logo gold.jpg";
import Insta from "../Icons/instagram.png";
import YouTube from "../Icons/youtube (1).png";
import Tiktok from "../Icons/tiktok (1).png";
import Twitter from "../Icons/twitter (1).png";

export default function Header() {
  function OpenNav() {
    var x = document.getElementById("nav");
    var y = document.getElementById("opt");
    var a = document.getElementById("lines_1");
    var b = document.getElementById("lines_2");
    var c = document.getElementById("lines_3");
    if (x.className === "nav_component") {
      x.className += "responsive";
      y.className = " header_options";
      a.className = " cross_1";
      b.className = " cross_2";
      c.className = " cross_3";
    } else {
      x.className = "nav_component";
      y.className = "header_option";
      a.className = "line_1";
      b.className = "line_2";
      c.className = "line_3";
    }
  }

  return (
    <div className="header" id="head">
      <div className="main_header">
        <div className="header_logo">
          <a href="/Mobile/home">
            <img src={Logo} alt="" />
          </a>
        </div>
        <a onClick={OpenNav}>
          <div className="nav_component" id="nav">
            <div className="line_1" id="lines_1"></div>
            <div className="line_2" id="lines_2"></div>
            <div className="line_3" id="lines_3"></div>
          </div>
        </a>

        <div className="header_option" id="opt">
          <li>
            <ul>
              <a href="/Mobile/profile" onClick={OpenNav}>
                Profile
              </a>
            </ul>
            <ul>
              <a href="/Mobile/discography/page-1" onClick={OpenNav}>
                Discography
              </a>
            </ul>
            <ul>
              <a href="/Mobile/Gallery/page-1" onClick={OpenNav}>
                Gallery
              </a>
            </ul>
            <ul>
              <a href="/Mobile/Videos" onClick={OpenNav}>
                Video
              </a>
            </ul>
            <ul>
              <a href="https://www.jype.com/" onClick={OpenNav}>
                JYPE
              </a>
            </ul>
            <ul>
              <a className="none" href="#home" onClick={OpenNav}>
                Kre8tion Webworks
              </a>
            </ul>
          </li>
          <li className="socials">
            <ul>
              <a href="https://www.instagram.com/twicetagram">
                <img src={Insta} alt="Instagram" />
              </a>
            </ul>
            <ul>
              <a href="https://www.youtube.com/channel/UCzgxx_DM2Dcb9Y1spb9mUJA">
                <img src={YouTube} alt="Youtube" />
              </a>
            </ul>
            <ul>
              <a href="https://twitter.com/JYPETWICE">
                <img src={Twitter} alt="Twitter" />
              </a>
            </ul>
            <ul>
              <a href="https://www.tiktok.com/@twice_tiktok_official?lang=en">
                <img src={Tiktok} alt="Tiktok" />
              </a>{" "}
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}
