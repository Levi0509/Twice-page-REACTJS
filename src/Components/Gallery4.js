/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Popup from "./Popup";
import "./Gallery.css";
import NextPrev from "./NextPrev";

export default class Gallery4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/yYBtCbj/31.png",
        "https://i.ibb.co/54ZV59v/32.png",
        "https://i.ibb.co/YffVPLt/33.png",
        "https://i.ibb.co/Yp0xsy0/34.png",
        "https://i.ibb.co/6grH7pZ/35.png",
        "https://i.ibb.co/rfF059Q/36.png",
        "https://i.ibb.co/6wsyF2v/37.png",
        "https://i.ibb.co/YkSHwzD/38.png",
        "https://i.ibb.co/PDvsjnp/39.png",
        "https://i.ibb.co/FD1vTLK/40.png",
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
          To="/Mobile/Gallery/page-5"
          BackTo="/Mobile/Gallery/page-3"
          Num="04"
          Max="08"
        />
      </div>
    );
  }
}
