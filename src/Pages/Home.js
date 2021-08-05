import React from "react";
import "./Home.css";
import Background from "../Components/Background";
import HomeContent from "../Components/HomeContent";
import Mask from "../Components/Mask";

export default function Home() {
  window.onload = function () {
    if (window.innerWidth > 415) {
      window.location.href = "/Default/Home";
    }
  };

  return (
    <div className="homepage" id="page">
      <div className="videos">
        <div className="AlchoholFree">
          <Background />
        </div>
      </div>
      <HomeContent />
      <Mask />
    </div>
  );
}
