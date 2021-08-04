import React from "react";
import AlbumIconLeft from "../Components/AlbumIconLeft";
import AlbumIconRight from "../Components/AlbumIconRight";
import NextPrev from "../Components/NextPrev.js";
import "./Discography.css";

export default function Discography() {
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
          className="discography_page"
        >
          <AlbumIconLeft
            Image="https://i.ibb.co/gVT7wPD/Album1.jpg"
            Name="Taste Of Love"
            Link="https://twice.jype.com/Mobile/DiscographyView?AamSeq=137&AmSeq=1&PgIndex=1"
            Date="2021-06-09"
          />
          <AlbumIconRight
            Image="https://i.ibb.co/gTXXF81/Album2.jpg"
            Name="CRY FOR ME"
            Link="https://twice.jype.com/Mobile/DiscographyView?AamSeq=130&AmSeq=1&PgIndex=1"
            Date="2020-12-18"
          />
          <AlbumIconLeft
            Image="https://i.ibb.co/T2bX6V1/Album3.jpg"
            Name="Eyes Wide Open"
            Link="https://twice.jype.com/Mobile/DiscographyView?AamSeq=93&AmSeq=1&PgIndex=1"
            Date="2020-10-26"
          />
          <AlbumIconRight
            Image="https://i.ibb.co/BGJNVVJ/Album4.jpg"
            Name="MORE &amp; MORE"
            Link="https://twice.jype.com/Mobile/DiscographyView?AamSeq=92&AmSeq=1&PgIndex=1"
            Date="2020-06-01"
          />
          <AlbumIconLeft
            Image="https://i.ibb.co/r0rWbsV/Album5.jpg"
            Name="Feel Special"
            Link="https://twice.jype.com/Mobile/DiscographyView?AamSeq=91&AmSeq=1&PgIndex=1"
            Date="2019-09-23"
          />
          <AlbumIconRight
            Image="https://i.ibb.co/gdf82gf/Album6.jpg"
            Name="FANCY YOU"
            Link="https://twice.jype.com/Mobile/DiscographyView?AamSeq=90&AmSeq=1&PgIndex=1"
            Date="2019-04-22"
          />
          <NextPrev
            To="/Mobile/discography/page-2"
            BackTo="#"
            Num="01"
            Max="03"
          />
        </div>
      </div>
    </div>
  );
}
