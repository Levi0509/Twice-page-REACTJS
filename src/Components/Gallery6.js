/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Popup from "./Popup";
import "./Gallery.css";
import NextPrev from "./NextPrev";

export default class Gallery6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/PYxg2dZ/51.png",
        "https://i.ibb.co/BKbrbHd/52.png",
        "https://i.ibb.co/s9yYT3p/53.png",
        "https://i.ibb.co/YBvJPJB/54.png",
        "https://i.ibb.co/68mykWD/55.png",
        "https://i.ibb.co/TTZxVRK/56.png",
        "https://i.ibb.co/n1cf5Wy/57.png",
        "https://i.ibb.co/RDSH8Bk/58.png",
        "https://i.ibb.co/hsvGZPh/59.png",
        "https://i.ibb.co/3fzpXn9/60.png",
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
          To="/Mobile/Gallery/page-7"
          BackTo="/Mobile/Gallery/page-5"
          Num="06"
          Max="08"
        />
      </div>
    );
  }
}
