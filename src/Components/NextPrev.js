import React from "react";
import ArrowFor from "../Icons/Arrow.svg";
import ArrowBack from "../Icons/Arrow 2.svg";
import "./NextPrev.css";

export default function NextPrev({ To, BackTo, Num, Max }) {
  function Next() {
    window.location.assign(To);
  }
  function Previous() {
    window.location.assign(BackTo);
  }
  return (
    <div className="next_prev">
      <div className="col">
        <div className="prev_btn" id="btn" onClick={Previous}>
          <img src={ArrowBack} alt="Previous" />
        </div>
        <div className="next_btn" id="btn" onClick={Next}>
          <img src={ArrowFor} alt="Next" />
        </div>
      </div>
      <div className="p_index">
        {Num}/{Max}
      </div>
    </div>
  );
}
