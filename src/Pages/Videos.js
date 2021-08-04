/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import VideoPlay from "../Components/VideoPlay";
import "./Videos.css";

export default class Videos extends Component {
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
      ],
      videoUrlArray2: [
        "mAKsZ26SabQ",
        "Fm5iP0S1z9w",
        "i0p1bmr0EmE",
        "rRzxEiBLQCA",
        "V2hlQkVJZhE",
      ],
      videoUrlArray3: [
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
    if (window.innerWidth > 415) {
      window.location.href = "/Default/Videos";
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
    let videoUrlArray2 = this.state.videoUrlArray2;
    const videos2 = videoUrlArray2.map((videoId2, index) => {
      return (
        <a
          class="video_box"
          onClick={() => this.handleVideo(videoId2)}
          key={index}
        >
          <img
            data-aos="fade-up"
            data-aos-anchor=".Videos"
            src={`https://i.ytimg.com/vi/${videoId2}/sddefault.jpg`}
            alt={index}
            key={index}
          />
        </a>
      );
    });
    let videoUrlArray3 = this.state.videoUrlArray3;
    const videos3 = videoUrlArray3.map((videoId3, index) => {
      return (
        <a
          class="video_box"
          onClick={() => this.handleVideo(videoId3)}
          key={index}
        >
          <img
            data-aos="fade-up"
            data-aos-anchor=".Videos"
            src={`https://i.ytimg.com/vi/${videoId3}/sddefault.jpg`}
            alt={index}
            key={index}
          />
        </a>
      );
    });
    return (
      <div className="Videos" onLoad={this.handlePage}>
        <div className="video_page">
          <div className="video1" id="vid1">
            <h1>Videos</h1>
            <div className="col_page">
              {videos1}
              {this.state.showVideo ? (
                <VideoPlay
                  popVideoId={this.state.popVideoId}
                  closePopup={this.handleVideo}
                />
              ) : null}
            </div>
            <div className="p_index">01/03</div>
          </div>
          <div className="video2" id="vid2">
            <h1>Videos</h1>
            <div className="col_page">
              {videos2}
              {this.state.showVideo ? (
                <VideoPlay
                  popVideoId={this.state.popVideoId}
                  closePopup={this.handleVideo}
                />
              ) : null}
            </div>
            <div className="p_index">02/03</div>
          </div>
          <div className="video3" id="vid3">
            <h1>Videos</h1>
            <div className="col_page">
              {videos3}
              {this.state.showVideo ? (
                <VideoPlay
                  popVideoId={this.state.popVideoId}
                  closePopup={this.handleVideo}
                />
              ) : null}
            </div>
            <div className="p_index">03/03</div>
          </div>
        </div>
      </div>
    );
  }
}
