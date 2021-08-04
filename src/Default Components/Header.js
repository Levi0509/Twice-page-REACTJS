/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import Logo from "../Images/Def Logo.png";
import Insta from "../Icons/instagram.png";
import YouTube from "../Icons/youtube (1).png";
import Tiktok from "../Icons/tiktok (1).png";
import Twitter from "../Icons/twitter (1).png";

export default function Header() {
  function OpenNav() {
    var x = document.getElementById("navigator");
    var y = document.getElementById("options");
    var a = document.getElementById("lines1");
    var b = document.getElementById("lines2");
    var c = document.getElementById("lines3");
    if (x.className === "navComponent") {
      x.className += "Responsive";
      y.className = " headerOptions";
      a.className = " cross1";
      b.className = " cross2";
      c.className = " cross3";
    } else {
      x.className = "navComponent";
      y.className = "headerOption";
      a.className = "line1";
      b.className = "line2";
      c.className = "line3";
    }
  }

  return (
    <div className="Header" id="Head">
      <div className="mainHeader">
        <div className="headerLogo">
          <a href="/Default/home">
            <img src={Logo} alt="" />
          </a>
        </div>
        <a onClick={OpenNav}>
          <div className="navComponent" id="navigator">
            <div className="line1" id="lines1"></div>
            <div className="line2" id="lines2"></div>
            <div className="line3" id="lines3"></div>
          </div>
        </a>

        <div className="headerOption" id="options">
          <li>
            <ul>
              <a href="/Default/Profile" onClick={OpenNav}>
                Profile
              </a>
            </ul>
            <ul>
              <a href="/Default/Discography" onClick={OpenNav}>
                Discography
              </a>
            </ul>
            <ul>
              <a href="/Default/Gallery" onClick={OpenNav}>
                Gallery
              </a>
            </ul>
            <ul>
              <a href="/Default/Videos" onClick={OpenNav}>
                Video
              </a>
            </ul>
            <ul>
              <a href="https://www.jype.com/" onClick={OpenNav}>
                JYPE
              </a>
            </ul>
            <ul>
              <a className="none" href="#" onClick={OpenNav}>
                Kre8tion Webworks
              </a>
            </ul>
          </li>
          <li className="Socials">
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
              </a>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}
