/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Slider from "react-slick";
import "./Members.css";
import CustomSlides from "./CustomSlides";
// import { useEffect } from "react";

const images = [
  "WBrz2TX/Jihyo",
  "8jHBcN0/Nayeon1",
  "xHXR1YS/Momo3",
  "9s9rDVP/Mina3",
  "5GmPcXs/Sana",
  "zbfzpBn/Tzuyu",
  "KrZJc4Z/Jeongyeon",
  "wspCHtW/Dahyun1",
  "V9G7cxS/Chaeyoung",
];
const names = [
  "Park Ji-hyo",
  "Im Na-yeon",
  "Hirai Momo",
  "Mina Sharon Myoi",
  "Minatozaki Sana",
  "Chou Tzu-yu",
  "Yoo Jeong-Yeon",
  "Kim Da-hyun",
  "Son Chae-young",
];
const names2 = [
  "Jihyo",
  "Nayeon",
  "Momo",
  "Mina",
  "Sana",
  "Tzuyu",
  "Jeongyeon",
  "Dahyun",
  "Chaeyoung",
];
const abouts = [
  "Park Ji-hyo ( Hangul: 박지효, born as Park Ji-soo), better known by her first name, Jihyo (Hangul: 지효), is a South Korean singer and dancer, and is the leader and main vocalist of Twice.",
  "Im Na-yeon (Hangul: 임나연, Japanese: イム ナヨン), better known by her stage name, Nayeon (Hangul: 나연, Japanese: ナヨン) is a South Korean singer. She is the oldest member, lead vocalist and face of the girl group Twice.",
  "Momo Hirai (Hangul: 히라이 모모, Japanese: 平井もも／ひらいもも Hirai Momo), better known as Momo (Hangul: 모모), is a Japanese singer and dancer, active in South Korea. She is the third oldest member of the K-pop girl group, Twice, as the main dancer, vocalist, and sub-rapper.",
  "Mina Myoui (Hangul: 묘이 미나, Japanese: 名井南 / みょういみな), known mostly as Mina (Hangul: 미나), is a Japanese singer. She is a member of Twice as a sub-vocalist and the main dancer.",
  "Sana Minatozaki (Hangul: 미나토자키 사나, Japanese: 湊崎紗夏 / みなとざきさな), better known as Sana (Hangul: 사나), is a Japanese singer. She is a member of Twice as a vocalist of the group.",
  "Chou Tzuyu (Hangul: 주쯔위, Chinese: 周子瑜), best known by her stage name, Tzuyu (Hangul: 쯔위), is a Taiwanese singer and dancer, currently based in South Korea. She is a member of Twice, as a lead dancer, sub-vocalist, visual, and the maknae.",

  "Yoo Jeong-yeon (Hangul: 유정연, originally named Yoo Kyung-wan) better known by her first name, Jeongyeon (Hangul: 정연), is a South Korean singer. She is a member of the girl group, Twice, as a lead vocalist of the group.",
  "Kim Da-hyun (Hangul: 김다현), better known by her first name, Dahyun (Hangul: 다현), is a South Korean singer and rapper. She is a vocalist and the lead rapper of the group.",
  "Son Chae-young (Hangul: 손채영), better known by her first name Chaeyoung (Hangul: 채영), is a South Korean singer, rapper, songwriter and dancer. A member of the girl group Twice, she was assigned the role of the group's main rapper.",
];
const roles = [
  "Main Vocalist",
  "Vocalist",
  "Dancer, Vocalist",
  "Main Dancer",
  "Vocalist",
  "Visuals, Lead Dancer",
  "Lead Vocalist",
  "Lead Rapper",
  "Main Rapper",
];

export default function Members() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow Next" onClick={onClick}>
        <div className="material-icons">&#xe5cc;</div>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow Prev" onClick={onClick}>
        <div className="material-icons">&#xe5cb;</div>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPaddiing: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="bakabaka">
      <Slider {...settings}>
        {images.map((img, id) => (
          <div
            className={id === imageIndex ? "slide activeSlide" : "slide"}
            id="SLIDE"
          >
            <CustomSlides
              image={img}
              Role={roles[id]}
              About={abouts[id]}
              Name={names[id]}
              Name2={names2[id]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
