/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Popup from "./Popup";
import "./Gallery.css";
import NextPrev from "./NextPrev";

export default class Gallery7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/SXzR69p/61.png",
        "https://i.ibb.co/SVBphGp/62.png",
        "https://i.ibb.co/kQ3bXTy/63.png",
        "https://i.ibb.co/T0ybcS3/64.png",
        "https://i.ibb.co/nswQ8pH/65.png",
        "https://i.ibb.co/vJzBy1J/66.png",
        "https://i.ibb.co/xqry9fK/67.png",
        "https://i.ibb.co/hW3Jw8L/68.png",
        "https://i.ibb.co/h9XSJdk/69.png",
        "https://i.ibb.co/fpq1xTb/70.png",
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
          To="/Mobile/Gallery/page-8"
          BackTo="/Mobile/Gallery/page-6"
          Num="07"
          Max="08"
        />
      </div>
    );
  }
}
