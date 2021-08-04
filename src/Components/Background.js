/* eslint-disable no-unused-vars */
import React from "react";
import "./Background.css";
import AlchoholFree from "../Videos/TWICE 'Alcohol-Free'.webm";

const Background = () => {
  return (
    <>
      <div className="container">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id"
          className="video"
        >
          {/* TODO make it accept multiple media types */}
          <source src={AlchoholFree} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <span id="video-bottom"></span> */}
    </>
  );
};

export default Background;
