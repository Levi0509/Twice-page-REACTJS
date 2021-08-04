/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Popup from "./Popup";
import "./Gallery.css";
import NextPrev from "./NextPrev";

export default class Gallery5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/7zwMvm9/41.png",
        "https://i.ibb.co/Nn1QLhr/42.png",
        "https://i.ibb.co/y4LmfB6/43.png",
        "https://i.ibb.co/MnjhRtk/44.png",
        "https://i.ibb.co/BrFZSf6/45.png",
        "https://i.ibb.co/P4cs1Wp/46.png",
        "https://i.ibb.co/XVZh5Vy/47.png",
        "https://i.ibb.co/bP3NnzB/48.png",
        "https://i.ibb.co/FJR7sQC/49.png",
        "https://i.ibb.co/W0HxPvz/50.png",
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
          To="/Mobile/Gallery/page-6"
          BackTo="/Mobile/Gallery/page-4"
          Num="05"
          Max="08"
        />
      </div>
    );
  }
}
