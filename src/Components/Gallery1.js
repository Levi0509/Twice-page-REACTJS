/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Gallery.css";
import NextPrev from "./NextPrev";
import Popup from "./Popup";

export default class Gallery1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/WBnjWy4/1.jpg",
        "https://i.ibb.co/VMGHSby/2.jpg",
        "https://i.ibb.co/zG4nmkq/3.jpg",
        "https://i.ibb.co/F8G32XP/4.jpg",
        "https://i.ibb.co/MgscJKC/5.jpg",
        "https://i.ibb.co/7KnDqgk/6.jpg",
        "https://i.ibb.co/GW7F6H4/7.jpg",
        "https://i.ibb.co/x8kpj4P/8.jpg",
        "https://i.ibb.co/rkRwfQV/9.jpg",
        "https://i.ibb.co/jhrktvZ/10.jpg",
      ],
      showModel: false,
      popImageUrl: "",
    };
  }
  // imagesSubmitter = (e) => {
  //   e.preventDefault();
  //   let imageUrlsArray = this.state.imageUrlArray;
  //   imageUrlsArray.push(this.state.imageUrl);
  //   this.setState({
  //     imageUrlsArray: imageUrlsArray,
  //   });
  // };
  // handleLinkChange = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     imageUrl: e.target.value,
  //   });
  // };
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
        <NextPrev To="/Mobile/Gallery/page-2" BackTo="#" Num="01" Max="08" />
      </div>
    );
  }
}
