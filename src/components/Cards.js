import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>We are SEO wizzards! Check us out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images\stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg"
              text="Site search engine positioning"
              label="Positioning"
              path="/services"
            />
            <CardItem
              src="images\leon-LR5CYw3AQNo-unsplash.jpg"
              text="Custom marketing campaning"
              label="Marketing"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images\sara-kurfess-6lcT2kRPvnI-unsplash.jpg"
              text="Social Media management"
              label="Social Media"
              path="/services"
            />
            <CardItem
              src="images\austin-distel-rxpThOwuVgE-unsplash.jpg"
              text="Creating followbase growth strategies"
              label="followers growth"
              path="/services"
            />
            <CardItem
              src="images\brooke-cagle-w475s9ZhD4I-unsplash.jpg"
              text="Best from the best in customer satisfaction"
              label="Satisfaction"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
