import React from "react";
import "./AlbumIcon.css";

export default function AlbumIconRight({ Image, Name, Link, Date }) {
  const link = Link;
  function GoTo() {
    alert("You will now be redirected to 'twice.jyp.com'");
    setTimeout(function () {
      window.location.replace(link);
    }, 1000);
  }

  return (
    <div className="album_icon_right" onClick={GoTo}>
      <img src={Image} alt={Name} />
      <div className="details_right">
        <h1>{Name}</h1>
        <em>{Date}</em>
      </div>
    </div>
  );
}
