import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Best in CEO BRANDING </h1>
      <p>Built on Referrals and Inspired By Trust Since 2018</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Learn how to become our client
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
