import React from "react";
import AlbumIconLeft from "../Components/AlbumIconLeft";
import AlbumIconRight from "../Components/AlbumIconRight";
import "./Discography.css";
import NextPrev from "../Components/NextPrev.js";

export default function Discography3() {
  window.onload = function () {
    if (window.innerWidth > 415) {
      window.location.href = "/Default/Discography";
    }
  };

  return (
    <div className="ALBUM">
      <div className="album_page">
        <h1>DISCOGRAPHY</h1>
        <div
          data-aos="fade-up"
          data-aos-anchor=".Discography"
          className="discography_page_3"
        >
          <AlbumIconLeft
            Image="https://i.ibb.co/gFKxNWG/TWICE-SIGNAL.jpg"
            Name="TWICE - SIGNAL"
            Link=""
            Date="2017-05-15"
          />
          <AlbumIconRight
            Image="https://i.ibb.co/kxkCdtZ/TWICEcoaster-LANE-2.jpg"
            Name="TWICEcoaster: LANE 2"
            Link=""
            Date="2016-02-20"
          />
          <AlbumIconLeft
            Image="https://i.ibb.co/mzBFgPX/TWICEcoaster-LANE-1.jpg"
            Name="TWICEcoaster: LANE 1"
            Link=""
            Date="2016-10-24"
          />
          {/* <img src="" alt="PAGE-TWO" border="0">
<img src="" alt="THE-STORY-BEGINS" border="0">
<img src="" alt="TWICE-SIGNAL" border="0">
<img src="" alt="TWICEcoaster-LANE-1" border="0">
<img src="" alt="TWICEcoaster-LANE-2" border="0"></img> */}
          <AlbumIconRight
            Image="https://i.ibb.co/Yt6rzSC/PAGE-TWO.jpg"
            Name="PAGE TWO"
            Link=""
            Date="2016-04-25"
          />
          <AlbumIconLeft
            Image="https://i.ibb.co/Fn6f0zv/THE-STORY-BEGINS.jpg"
            Name="THE STORY BEGINS"
            Link=""
            Date="2015-10-20"
          />
          <NextPrev
            To="#"
            BackTo="/Mobile/discography/page-2"
            Num="03"
            Max="03"
          />
        </div>
      </div>
    </div>
  );
}
