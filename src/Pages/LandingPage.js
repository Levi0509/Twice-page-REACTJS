import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  window.onload = function () {
    setTimeout(function () {
      if (window.innerWidth < 415) {
        window.location.href = "/Mobile/home";
      } else {
        window.location.href = "/Default/home";
      }
    }, 7000);
  };
  return (
    <div className="Body">
      <div id="ui">
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
        <div class="text">K8 DIGITAL</div>
      </div>
    </div>
  );
}
