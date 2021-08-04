/* eslint-disable no-unused-vars */
import React from "react";
import SideDetails from "../Default Components/SideDetails";
import "./Discography.css";

export default function DefDiscography() {
  //   function GO(link) {
  //     alert(`{You will be redirected to ${link}}`);
  //     window.location.assign(link);
  //   }
  const albumUrlArray = [
    "gVT7wPD/Album1",
    "gTXXF81/Album2",
    "T2bX6V1/Album3",
    "BGJNVVJ/Album4",
    "r0rWbsV/Album5",
    "gdf82gf/Album6",
  ];
  const albumNameArray = [
    "Taste of Love",
    "Cry For Me",
    "EYES WIDE OPEN",
    "MORE & MORE",
    "Feel Special",
    "Fancy",
  ];
  const albumLinkArray = [
    "Taste of Love",
    "Cry For Me",
    "EYES WIDE OPEN",
    "MORE & MORE",
    "Feel Special",
    "Fancy",
  ];
  const albumUrlArray2 = [
    "v47dY5C/The-year-of-YES",
    "bQmtp7p/YES-or-YES",
    "Fmy5YJx/Summer-Nights",
    "rd8Yt1G/What-is-Love",
    "3TdmMGV/Merry-Happy-2",
    "XxKDDG3/twicetagram",
  ];
  const albumNameArray2 = [
    "The year of YES",
    "YES or YES",
    "Summer Nights",
    "What is Love",
    "Merry Happy",
    "Twicetagram",
  ];
  const albumUrlArray3 = [
    "gFKxNWG/TWICE-SIGNAL",
    "kxkCdtZ/TWICEcoaster-LANE-2",
    "mzBFgPX/TWICEcoaster-LANE-1",
    "Yt6rzSC/PAGE-TWO",
    "Fn6f0zv/THE-STORY-BEGINS",
  ];
  const albumNameArray3 = [
    "TWICE SIGNAL",
    "TWICEcoaster LANE 2",
    "TWICEcoaster LANE 1",
    "PAGE TWO",
    "THE STORY BEGINS",
  ];
  let albums1 = albumUrlArray.map((img, id) => {
    return (
      <div class="albumHive">
        <div class="hiveCell">
          <img
            src={`https://i.ibb.co/${img}.jpg`}
            alt={albumNameArray[id]}
            class="hiveCellImg"
          />
          <div class="hiveCellText">{albumNameArray[id]}</div>
        </div>
      </div>
    );
  });
  let albums2 = albumUrlArray2.map((img, id) => {
    return (
      <div class="albumHive">
        <div class="hiveCell">
          <img
            src={`https://i.ibb.co/${img}.jpg`}
            alt={albumNameArray2[id]}
            class="hiveCellImg"
          />
          <div class="hiveCellText">{albumNameArray2[id]}</div>
        </div>
      </div>
    );
  });
  let albums3 = albumUrlArray3.map((img, id) => {
    return (
      <div class="albumHive">
        <div class="hiveCell">
          <img
            src={`https://i.ibb.co/${img}.jpg`}
            alt={albumNameArray3[id]}
            class="hiveCellImg"
          />
          <div class="hiveCellText">{albumNameArray3[id]}</div>
        </div>
      </div>
    );
  });
  return (
    <main class="disc">
      <h1>DISCOGRAPHY</h1>
      <div class="boxes">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="albumContent">
        <div className="albumRow albumrow1">{albums1}</div>
        <div className="albumRow albumrow2">{albums2}</div>
        <div className="albumRow albumrow3">{albums3}</div>
      </div>
    </main>
  );
}
