/* eslint-disable no-undef */
import React from "react";
import "./CharacterCard.css";

export default function CharacterCard({ Index, Image, Name, Date, FName }) {
  return (
    <div className="character_card">
      <div className="image">
        <img src={Image} alt={Name} />
      </div>
      <div className="details">
        <div className="name_box">
          <h2>{Name}</h2>
        </div>
        <div className="age_box">
          <span>
            <b>Name: </b>
            <em>{FName}</em>
          </span>
          <span>
            <b>&nbsp; &nbsp; Birthday: </b>
            <em>{Date}</em>
          </span>
        </div>
        <div className="index">
          <b>{Index}</b>/ <small>09</small>
        </div>
      </div>
    </div>
  );
}
