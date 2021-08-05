import React from "react";
import AlbumIconLeft from "../Components/AlbumIconLeft";
import AlbumIconRight from "../Components/AlbumIconRight";
import NextPrev from "../Components/NextPrev.js";
import "./Discography.css";

export default function Discography2() {
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
            Image="https://i.ibb.co/v47dY5C/The-year-of-YES.jpg"
            Name='The year of "YES"'
            Link=""
            Date="2018-12-12"
          />
          <AlbumIconRight
            Image="https://i.ibb.co/bQmtp7p/YES-or-YES.jpg"
            Name="YES or YES"
            Link=""
            Date="2018-11-05"
          />
          <AlbumIconLeft
            Image="https://i.ibb.co/Fmy5YJx/Summer-Nights.jpg"
            Name="Summer Nights"
            Link=""
            Date="2018-07-09"
          />
          {/* <img src="" alt="Merry-Happy-2" border="0">
<img src="" alt="Summer-Nights" border="0">
<img src="" alt="twicetagram" border="0">
<img src="" alt="What-is-Love" border="0">
<img src="" alt="YES-or-YES" border="0">
<img src="" alt="The-year-of-YES" border="0"></img> */}
          <AlbumIconRight
            Image="https://i.ibb.co/rd8Yt1G/What-is-Love.jpg"
            Name="What is Love?"
            Link=""
            Date="2018-04-09"
          />
          <AlbumIconLeft
            Image="https://i.ibb.co/3TdmMGV/Merry-Happy-2.jpg"
            Name="Merry &amp; Happy"
            Link=""
            Date="2017-12-11"
          />
          <AlbumIconRight
            Image="https://i.ibb.co/XxKDDG3/twicetagram.jpg"
            Name="Twicetagram"
            Link=""
            Date="2017-10-30"
          />
          <NextPrev
            To="/Mobile/discography/page-3"
            BackTo="/Mobile/discography/page-1"
            Num="02"
            Max="03"
          />
        </div>
      </div>
    </div>
  );
}
