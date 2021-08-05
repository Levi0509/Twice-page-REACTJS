/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React from "react";
import SideDetails from "../Default Components/SideDetails";
import "./Gallery.css";

export default function DefGallery() {
  function goTo(To) {
    window.location.assign(To);
  }
  window.onload = function () {
    if (window.innerWidth < 415) {
      window.location.href = "/Mobile/Gallery/page-1";
    }
  };

  let count = 0,
    count2 = 0;

  let a = 0;
  let b = 0;
  let i = 0;

  let backs = [
    "url('https://i.ibb.co/jhrktvZ/10.jpg')",
    "url('https://i.ibb.co/rkRwfQV/9.jpg')",
    "url('https://i.ibb.co/x8kpj4P/8.jpg')",
    "url('https://i.ibb.co/GW7F6H4/7.jpg')",
    "url('https://i.ibb.co/7KnDqgk/6.jpg')",
    "url('https://i.ibb.co/MgscJKC/5.jpg')",
    "url('https://i.ibb.co/F8G32XP/4.jpg')",
    "url('https://i.ibb.co/zG4nmkq/3.jpg')",
    "url('https://i.ibb.co/WBnjWy4/1.jpg')",
    "url('https://i.ibb.co/VMGHSby/2.jpg')",
  ];

  document.addEventListener("mousemove", (e) => {
    count++;
    count2++;

    // Stores position just before createion
    if (count2 == 2) {
      a = e.pageX;
      b = e.pageY;
    }

    // Creates image, stores position and calculates
    if (count == 20) {
      i++;
      if (i == 10) {
        i = 0;
      }
      let image = document.createElement("image");
      let x = e.pageX;
      let y = e.pageY;

      // transform values - smooth moving effect when image is created
      let oseX = (x - a) * 1.2;
      let oseY = (y - b) * 1.2;

      image.style.left = x + "px";
      image.style.top = y + "px";
      image.style.backgroundImage = backs[i];

      // creating animation
      let animation = image.animate(
        [
          {
            transform: `translate(-50%, -50%) scale(0)`,
            opacity: 0.5,
          },
          {
            transform: `translate(calc(-50% + ${oseX}px), calc(-50% + ${oseY}px )) scale(1)`,
            opacity: 1,
          },
        ],
        {
          duration: 600,
          easing: "ease-out",
          animationFillMode: "forwards",
        }
      );

      document.body.appendChild(image);

      // fade out animation. setTimeout is not best solution. Animations should be done using gsap
      setTimeout(function () {
        let animation2 = image.animate(
          [
            {
              transform: `translate(calc(-50% + ${oseX}px), calc(-50% + ${oseY}px )) scale(1)`,
              opacity: 1,
            },
            {
              transform: `translate(calc(-50% + ${oseX}px), calc(-50% + ${oseY}px )) scale(2)`,
              opacity: 0,
            },
          ],
          {
            duration: 600,
            easing: "ease-out",
          }
        );

        animation2.onfinish = () => {
          image.remove();
        };
      }, 590);

      // reset counters so new image can be created
      count = 0;
      count2 = 0;
    }
  });

  return (
    <div className="awesomeGallery">
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
      <SideDetails Page="03" Of="04" Name="Gallery" />

      <h1 className="baseTitle">TWICE</h1>
      <h3 className="messageText">Move the Cursor around</h3>
      <a className="forMore" href="/Default/Gallery/Boring">
        <span>For More</span>
        <div className="material-icons">&#xe941;</div>
      </a>
    </div>
  );
}
