/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Popup from "./Popup";
import "./Gallery.css";
import NextPrev from "./NextPrev.js";

export default class Gallery2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/F4CwPJ5/11.jpg",
        "https://i.ibb.co/Y7ZC7pF/12.jpg",
        "https://i.ibb.co/RNVYTys/13.jpg",
        "https://i.ibb.co/cNxcF68/14.jpg",
        "https://i.ibb.co/HFr033f/15.jpg",
        "https://i.ibb.co/r3khPMV/16.jpg",
        "https://i.ibb.co/X47tKt4/17.jpg",
        "https://i.ibb.co/LNnG38N/18.jpg",
        "https://i.ibb.co/kMykJGC/19.jpg",
        "https://i.ibb.co/Yd1nyWx/20.jpg",
      ],
      showModel: false,
      popImageUrl: "",
    };
  }
  handlePage = () => {
    if (window.innerWidth > 415) {
      window.location.href = "/Default/Gallery";
    }
  };

  handlePopup = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      popImageUrl: url,
    });
  };
  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      return (
        <img
          data-aos="fade-up"
          data-aos-anchor=".images"
          className="singleImage"
          src={url}
          key={index}
          alt={index}
          onClick={() => this.handlePopup(url)}
        />
      );
    });
    return (
      <div className="images" onLoad={this.handlePage}>
        <h1>GALLERY</h1>
        {images}
        {this.state.showModal ? (
          <Popup
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
          />
        ) : null}
        <NextPrev
          To="/Mobile/Gallery/page-3"
          BackTo="/Mobile/Gallery/page-1"
          Num="02"
          Max="08"
        />
      </div>
    );
  }
}
