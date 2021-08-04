/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Profile.css";
import TwiceGrp from "../Images/Twice big 7.jpg";
import Mask from "../Components/Mask";
import CharacterCard from "../Components/CharacterCard";
import Socials from "../Components/Socials";

export default function Profile() {
  window.onload = function () {
    if (window.innerWidth > 415) {
      window.location.href = "/Default/Profile";
    }
  };

  function Snap() {
    var v = document.getElementById("members");
    if (v.className === "members") {
      v.className = "member";
    } else {
      v.className = "members";
    }
  }
  return (
    <div className="profile_page">
      <div className="profile_back_img">
        <img src={TwiceGrp} alt="Twice" />
      </div>
      <Mask />
      <div className="profile_content">
        <div className="content">
          <h1>TWICE</h1>
          <div className="line"></div>
          <span>
            South Korean Girl Group formed by &nbsp;&nbsp;
            <a href="https://www.jype.com/">JYP Entertainment</a>
          </span>
          <Socials />
        </div>
      </div>
      <div className="members" id="members">
        <a onClick={Snap}>
          <div className="line"></div>
        </a>
        <div className="tiles" id="row">
          <CharacterCard
            className="char"
            Index="01"
            Show="0"
            Image="https://i.ibb.co/RShKWK9/Jihyo.jpg"
            Name="Jihyo"
            FName="Park Ji-hyo"
            Date=" 1997.02.01"
          />
          <CharacterCard
            className="char"
            Show="20"
            Index="02"
            Image="https://i.ibb.co/9yB2fJY/Nayeon.jpg"
            Name="Nayeon"
            FName="Im Na-yeon"
            Date=" 1995.09.22"
          />
          <CharacterCard
            className="char"
            Scroll="60"
            Index="03"
            Image="https://i.ibb.co/NxXPrXc/Momo1.png"
            Name="Momo"
            FName="Hirai Momo"
            Date=" 1996.11.09"
          />
          <CharacterCard
            className="char"
            Index="04"
            Image="https://i.ibb.co/5TYrcd7/Mina.jpg"
            Name="Mina"
            FName="Mina Sharon Myoi"
            Date=" 1997.03.24"
          />
          <CharacterCard
            className="char"
            Index="05"
            Image="https://i.ibb.co/qdJQbSC/Sana6.jpg"
            Name="Sana"
            FName="Minatozaki Sana"
            Date=" 1996.12.29"
          />
          <CharacterCard
            className="char"
            Index="06"
            Image="https://i.ibb.co/MkLvys7/Tzuyu-1.jpg"
            Name="Tzuyu"
            FName="Chou Tzu-yu"
            Date=" 1999.06.14"
          />
          <CharacterCard
            className="char"
            Index="07"
            Image="https://i.ibb.co/Z8fzYKD/Jeonyeon.jpg"
            Name="Jeonyeon"
            FName="Yoo Jeong-yeon"
            Date=" 1996.11.01"
          />
          <CharacterCard
            className="char"
            Index="08"
            Image="https://i.ibb.co/2YhvRn4/Dahyun.jpg"
            Name="Dahyun"
            FName="Kim Da-hyun"
            Date=" 1998.05.28"
          />
          {/* <img src="https://i.ibb.co/NxXPrXc/Momo1.png" alt="Momo1" border="0"></img> */}
          <CharacterCard
            className="char"
            Index="09"
            Image="https://i.ibb.co/dDf9Prf/Chaeyoung.jpg"
            Name="Chaeyoung"
            FName="Son Chae-young"
            Date=" 1999.04.23"
          />
        </div>
      </div>
    </div>
  );
}
{
  /* <img src= alt="Dahyun" border="0">
<img src= alt="Jeonyeon" border="0">
<img src= alt="Jihyo" border="0">
<img src= alt="Mina" border="0">
<img src= alt="Momo" border="0">
<img src= alt="Sana" border="0">
<img src= alt="Chaeyoung" border="0"></img>
<img src=alt="Nayeon" border="0"> */
}
