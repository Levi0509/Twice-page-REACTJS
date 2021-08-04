/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Popup from "./Popup";
import "./Gallery.css";
import NextPrev from "./NextPrev";

export default class Gallery8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/s9P5yws/71.png",
        "https://i.ibb.co/wc2KpS3/72.png",
        "https://i.ibb.co/hRSkbq2/73.png",
        "https://i.ibb.co/LQ2jTM5/74.png",
        "https://i.ibb.co/wg0YWdZ/75.png",
        "https://i.ibb.co/8bkXsBx/76.png",
        "https://i.ibb.co/GChcRRP/77.png",
        "https://i.ibb.co/2nLgGdc/78.png",
        "https://i.ibb.co/gwxFcgL/79.png",
        "https://i.ibb.co/L9y96Cf/80.png",
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
        <NextPrev To="#" BackTo="/Mobile/Gallery/page-7" Num="08" Max="08" />
      </div>
    );
  }
}
