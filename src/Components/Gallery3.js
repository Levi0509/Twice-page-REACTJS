/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Popup from "./Popup";
import "./Gallery.css";
import NextPrev from "./NextPrev";

export default class Gallery3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/6X2gQfK/21.jpg",
        "https://i.ibb.co/dkg9zd2/22.jpg",
        "https://i.ibb.co/2ch3rPY/23.jpg",
        "https://i.ibb.co/ctMppts/24.jpg",
        "https://i.ibb.co/sWnXBkD/25.jpg",
        "https://i.ibb.co/HXz2c1p/26.jpg",
        "https://i.ibb.co/tCc59Qg/27.jpg",
        "https://i.ibb.co/VMW0rWC/28.jpg",
        "https://i.ibb.co/ChV0LGX/29.jpg",
        "https://i.ibb.co/nCxpC9g/30.jpg",
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
      <div className="images" onload={this.handlePage}>
        <h1>GALLERY</h1>
        {images}
        {this.state.showModal ? (
          <Popup
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
          />
        ) : null}
        <NextPrev
          To="/Mobile/Gallery/page-4"
          BackTo="/Mobile/Gallery/page-2"
          Num="03"
          Max="08"
        />
      </div>
    );
  }
}
