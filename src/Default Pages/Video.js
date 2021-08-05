/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import VideoPlay from "../Components/VideoPlay";
import SideDetails from "../Default Components/SideDetails";
import "./Videos.css";

export default class DefVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "",
      videoUrlArray1: [
        "CM4CkVFmTds",
        "mH0_XpSHkZo",
        "3ymwOvzhwHs",
        "kOHB85vDuow",
        "CfUGjK6gGgs",
        "mAKsZ26SabQ",
        "Fm5iP0S1z9w",
        "i0p1bmr0EmE",
        "rRzxEiBLQCA",
        "V2hlQkVJZhE",
        "VQtonf1fv_s",
        "8A2t_tAjMz8",
        "ePpPVE-GGJw",
        "c7rCyll5AeY",
        "0rtV5esQT6I",
      ],
      popVideoId: "",
    };
  }
  handlePage = () => {
    if (window.innerWidth < 415) {
      window.location.href = "/Mobile/Videos";
    }
  };

  handleVideo = (videoId) => {
    this.setState({
      showVideo: !this.state.showVideo,
      popVideoId: videoId,
    });
  };

  render() {
    let videoUrlArray1 = this.state.videoUrlArray1;
    const videos1 = videoUrlArray1.map((videoId, index) => {
      return (
        <a
          class="video_box"
          onClick={() => this.handleVideo(videoId)}
          key={index}
        >
          <img
            data-aos="fade-up"
            data-aos-anchor=".Videos"
            src={`https://i.ytimg.com/vi/${videoId}/sddefault.jpg`}
            alt={index}
            key={index}
          />
        </a>
      );
    });
    return (
      <div className="Videoss" onLoad={this.handlePage}>
        <svg>
          <filter id="filth">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.209"
              numOctaves="112"
              seed="4"
            >
              <animate
                attributeName="baseFrequency"
                dur="3s"
                values="0.05;0.005;0.05"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="8"></feDisplacementMap>
          </filter>
        </svg>
        <h1 className="VidPageTitle">Videos</h1>
        <h1 className="BaseTitle">TWICE</h1>

        <div className="videoPage">
          <SideDetails className="Savanna" Page="04" Of="04" Name="Videos" />

          {videos1}
          {this.state.showVideo ? (
            <VideoPlay
              popVideoId={this.state.popVideoId}
              closePopup={this.handleVideo}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
