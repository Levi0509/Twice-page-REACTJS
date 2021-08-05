/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./GalleryBoring.css";
import Popup from "../Components/Popup";
import SideDetails from "../Default Components/SideDetails";

export default class GalleryBoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://i.ibb.co/L9y96Cf/80.png",
        "https://i.ibb.co/gwxFcgL/79.png",
        "https://i.ibb.co/2nLgGdc/78.png",
        "https://i.ibb.co/GChcRRP/77.png",
        "https://i.ibb.co/8bkXsBx/76.png",
        "https://i.ibb.co/wg0YWdZ/75.png",
        "https://i.ibb.co/LQ2jTM5/74.png",
        "https://i.ibb.co/hRSkbq2/73.png",
        "https://i.ibb.co/wc2KpS3/72.png",
        "https://i.ibb.co/s9P5yws/71.png",
        "https://i.ibb.co/fpq1xTb/70.png",
        "https://i.ibb.co/h9XSJdk/69.png",
        "https://i.ibb.co/hW3Jw8L/68.png",
        "https://i.ibb.co/xqry9fK/67.png",
        "https://i.ibb.co/vJzBy1J/66.png",
        "https://i.ibb.co/nswQ8pH/65.png",
        "https://i.ibb.co/T0ybcS3/64.png",
        "https://i.ibb.co/kQ3bXTy/63.png",
        "https://i.ibb.co/SVBphGp/62.png",
        "https://i.ibb.co/SXzR69p/61.png",
        "https://i.ibb.co/3fzpXn9/60.png",
        "https://i.ibb.co/hsvGZPh/59.png",
        "https://i.ibb.co/RDSH8Bk/58.png",
        "https://i.ibb.co/n1cf5Wy/57.png",
        "https://i.ibb.co/TTZxVRK/56.png",
        "https://i.ibb.co/68mykWD/55.png",
        "https://i.ibb.co/YBvJPJB/54.png",
        "https://i.ibb.co/s9yYT3p/53.png",
        "https://i.ibb.co/BKbrbHd/52.png",
        "https://i.ibb.co/PYxg2dZ/51.png",
        "https://i.ibb.co/W0HxPvz/50.png",
        "https://i.ibb.co/FJR7sQC/49.png",
        "https://i.ibb.co/bP3NnzB/48.png",
        "https://i.ibb.co/XVZh5Vy/47.png",
        "https://i.ibb.co/P4cs1Wp/46.png",
        "https://i.ibb.co/BrFZSf6/45.png",
        "https://i.ibb.co/MnjhRtk/44.png",
        "https://i.ibb.co/y4LmfB6/43.png",
        "https://i.ibb.co/Nn1QLhr/42.png",
        "https://i.ibb.co/7zwMvm9/41.png",
        "https://i.ibb.co/FD1vTLK/40.png",
        "https://i.ibb.co/PDvsjnp/39.png",
        "https://i.ibb.co/YkSHwzD/38.png",
        "https://i.ibb.co/6wsyF2v/37.png",
        "https://i.ibb.co/rfF059Q/36.png",
        "https://i.ibb.co/6grH7pZ/35.png",
        "https://i.ibb.co/Yp0xsy0/34.png",
        "https://i.ibb.co/YffVPLt/33.png",
        "https://i.ibb.co/54ZV59v/32.png",
        "https://i.ibb.co/yYBtCbj/31.png",
        "https://i.ibb.co/nCxpC9g/30.jpg",
        "https://i.ibb.co/ChV0LGX/29.jpg",
        "https://i.ibb.co/VMW0rWC/28.jpg",
        "https://i.ibb.co/tCc59Qg/27.jpg",
        "https://i.ibb.co/HXz2c1p/26.jpg",
        "https://i.ibb.co/sWnXBkD/25.jpg",
        "https://i.ibb.co/ctMppts/24.jpg",
        "https://i.ibb.co/2ch3rPY/23.jpg",
        "https://i.ibb.co/dkg9zd2/22.jpg",
        "https://i.ibb.co/6X2gQfK/21.jpg",
        "https://i.ibb.co/Yd1nyWx/20.jpg",
        "https://i.ibb.co/kMykJGC/19.jpg",
        "https://i.ibb.co/LNnG38N/18.jpg",
        "https://i.ibb.co/X47tKt4/17.jpg",
        "https://i.ibb.co/r3khPMV/16.jpg",
        "https://i.ibb.co/HFr033f/15.jpg",
        "https://i.ibb.co/cNxcF68/14.jpg",
        "https://i.ibb.co/RNVYTys/13.jpg",
        "https://i.ibb.co/Y7ZC7pF/12.jpg",
        "https://i.ibb.co/F4CwPJ5/11.jpg",
        "https://i.ibb.co/jhrktvZ/10.jpg",
        "https://i.ibb.co/rkRwfQV/9.jpg",
        "https://i.ibb.co/x8kpj4P/8.jpg",
        "https://i.ibb.co/GW7F6H4/7.jpg",
        "https://i.ibb.co/7KnDqgk/6.jpg",
        "https://i.ibb.co/MgscJKC/5.jpg",
        "https://i.ibb.co/F8G32XP/4.jpg",
        "https://i.ibb.co/zG4nmkq/3.jpg",
        "https://i.ibb.co/WBnjWy4/1.jpg",
        "https://i.ibb.co/VMGHSby/2.jpg",
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
    if (window.innerWidth < 415) {
      window.location.href = "/Mobile/Gallery/page-1";
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
          data-aos-anchor=".Images"
          className="SingleImage"
          src={url}
          key={index}
          alt={index}
          onClick={() => this.handlePopup(url)}
        />
      );
    });
    return (
      <div className="IMAGES" onLoad={this.handlePage}>
        <svg>
          <filter id="filth">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.209"
              numOctaves="112"
              seed="4"
            >
              <animate
                attributeName="baseFrequency"
                dur="3s"
                values="0.05;0.005;0.05"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="8"></feDisplacementMap>
          </filter>
        </svg>

        <h1 className="HeadTitle">GALLERY</h1>
        <h1 className="BaseTitle">TWICE</h1>
        <div className="GalImages">
          {images}

          {this.state.showModal ? (
            <Popup
              popImageUrl={this.state.popImageUrl}
              closePopup={this.handlePopup}
            />
          ) : null}
        </div>
        <SideDetails Page="03" Of="04" Name="Gallery" />
      </div>
    );
  }
}
