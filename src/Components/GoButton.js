import React from "react";
import "./GoButton.css";

export default function GoButton({ To }) {
  return (
    <div className="button_1">
      <a href={To}>
        <div className="button_a">Let's Go!</div>
      </a>
    </div>
  );
}
