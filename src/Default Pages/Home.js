import React from "react";
import "./Home.css";
import Background from "../Components/Background";
import HomeContent from "../Default Components/HomeContents";
import Mask from "../Components/Mask";

export default function DefHome() {
  window.onload = function () {
    if (window.innerWidth < 415) {
      window.location.href = "/Mobile/Home";
    }
  };

  return (
    <div className="homePage" id="page">
      <div className="Videos">
        <div className="AlchoholFree">
          <Background />
        </div>
      </div>
      <HomeContent />
      <Mask />
    </div>
  );
}
