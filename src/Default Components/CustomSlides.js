import React from "react";
import "./CustomSlides.css";
import Logo from "../Images/Def Logo.png";

function CustomSlides({ image, Name, About, Role, Name2 }) {
  return (
    <div className="SlidesTrg">
      <div className="Ribbon">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="data">
        <img
          data-aos="fade-left"
          data-aos-anchor=".activeSlide"
          src={`https://i.ibb.co/${image}.png `}
          alt={Name}
        />
        <div className="NameMain">
          <div className="lineBold"></div>
          <h1 className="title">{Name}</h1>
        </div>
        <div className="Abt">
          <span className="abt">{About}</span>
        </div>
      </div>
      <div className="imgTiles"></div>
      <div className="float">
        <div className="roleSection">
          <div className="material-icons">&#xe5de;&#xe5de;&#xe5de;</div>
          <b className="role">{Role}</b>
        </div>
        <h2 className="nameShort">{Name2}</h2>
      </div>
    </div>
  );
}

export default CustomSlides;
