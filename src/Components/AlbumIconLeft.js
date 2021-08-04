import React from "react";
import "./AlbumIcon.css";

export default function AlbumIconLeft({ Image, Name, Link, Date }) {
  const link = Link;
  function GoTo() {
    alert("You will now be redirected to 'twice.jyp.com'");
    setTimeout(function () {
      window.location.replace(link);
    }, 300);
  }

  return (
    <div className="album_icon_left" onClick={GoTo}>
      <img src={Image} alt={Name} />
      <div className="details_left">
        <h1>{Name}</h1>
        <em>{Date}</em>
      </div>
    </div>
  );
}
