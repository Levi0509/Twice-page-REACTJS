/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { Component, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Socials from "../Components/Socials";
import Arrows from "../Default Components/Arrows";
import Arrows2 from "../Default Components/Arrows2";
import Members from "../Default Components/Members";
import SideDetails from "../Default Components/SideDetails";
import "./Profile.css";

export default class DefProfile extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.State = {
  //       backgroundImgId: "",
  //       backgroundImgIdArray: ["9t4rdyf/Def-4", "MCnhM4x/Def-2", "wMVVBNk/Def-1"],
  //     };
  //   }
  constructor(props) {
    super(props);
    this.nextRef = React.createRef();
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "9t4rdyf/Def-4.jpg",
        "MCnhM4x/Def-2.jpg",
        "wMVVBNk/Def-1.jpg",
        "r6msRR5/Def-5.png",
        "263CYzd/Def-6.jpg",
        "LQTpSf0/Def-7.jpg",
        "MBG8gpB/Def-8.jpg",
        "rctGqxf/Def-9.jpg",
      ],
      imageUrlArray2: [
        "9t4rdyf/Def-4.jpg",
        "MCnhM4x/Def-2.jpg",
        "wMVVBNk/Def-1.jpg",
        "r6msRR5/Def-5.png",
        "263CYzd/Def-6.jpg",
        "LQTpSf0/Def-7.jpg",
        "MBG8gpB/Def-8.jpg",
        "rctGqxf/Def-9.jpg",
      ],
      awardUrlArray: [
        "p1Kym1k/Mnet1.png",
        "ZcjLdzs/Seoul-Music.png",
        "y4VLJ8Y/GDA.jpg",
        "q7Zgmm5/Shorty.png",
        "kgqHXWQ/Japan-Recs.jpg",
      ],
      awardNameUrlArray: [
        "Mnet Music Awards (MAMA)",
        "Seoul Music Awards",
        "Golden Disk Awards",
        "Shorty Awards",
        "Japan Records Music Awards",
      ],
      /*https://i.ibb.co/
https://i.ibb.co/
https://i.ibb.co/
https://i.ibb.co/
https://i.ibb.co/ */
      showModel: false,
      popImageUrl: "",
    };
  }
  handlePage = () => {
    if (window.innerWidth < 415) {
      window.location.href = "/Mobile/Profile";
    }
  };

  handleRotate = () => {
    this.nextRef.current.rotateArrows();
  };

  render() {
    let imageUrlArray = this.state.imageUrlArray;
    let awardUrlArray = this.state.awardUrlArray;
    let awardNameUrlArray = this.state.awardNameUrlArray;
    const random =
      imageUrlArray[Math.floor(Math.random() * imageUrlArray.length)];
    console.log(random);
    const awards = awardUrlArray.map((img, id) => {
      return (
        <div className="awardTiles">
          <img src={`https://i.ibb.co/${img}`} alt={awardNameUrlArray[id]} />;
          <div className="awardName">
            <span>{awardNameUrlArray[id]}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="profilePage" onLoad={this.handlePage}>
        <div
          className="profileImage proImage"
          id="ProfilePage"
          data-aos="fade-up"
        >
          <img src={`https://i.ibb.co/${random}`} alt={random} />
          <div className="mask">
            <div className="profileContent">
              <div className="toRead">
                <div className="lineBold"></div>
                <h1 className="nameBig">TWICE</h1>
                <span>
                  <b>Twice</b> , commonly stylized as TWICE, is a South Korean
                  girl group formed by
                  <a href="https://www.jype.com/"> JYP Entertainment</a>. The
                  group is composed of nine members: Nayeon, Jeongyeon, Momo,
                  Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu.
                </span>
                <span className="stats">
                  <br /> <b> Active from:</b> 2015
                  <p>
                    <b> Genres:</b> K-pop; J-pop; bubblegum pop; dance-pop; EDM
                  </p>
                  <p>
                    <b> Albums:</b> Perfect World, Eyes wide open, Twicetagram,
                    BDZ...
                  </p>
                </span>
              </div>
              <div className="Awards">
                <h3>Awards</h3>
                {awards}
                {/* some code 16 mnets  10 GDA 7sma upto 16 dasangs */}
              </div>

              <SideDetails Page="01" Of="04" Name="Profile" />
              <Arrows
                ref={this.nextRef}
                onClick={this.handleRotate}
                Location="Members"
                To="MemberPage"
              />
            </div>
          </div>
        </div>
        <div className="MemberPage" id="MemberPage" data-aos="fade-left">
          <div className="profileImage memberProImg">
            <img src={`https://i.ibb.co/${random}`} alt={random} />
            <div className="mask">
              <div className="memberContent">
                <Members />
                <SideDetails Page="01" Of="04" Name="Profile" />
                <Arrows2
                  onClick={this.handleRotate}
                  ref={this.nextRef}
                  Location="Profile"
                  To="ProfilePage"
                />
              </div>
            </div>
          </div>
        </div>
        <Socials />
      </div>
    );
  }
}
