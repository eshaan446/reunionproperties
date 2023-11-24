import React, { useState } from "react";
import "./HomepageListing.css";
import "swiper/css";
import "../Residencies/Residencies.css";

const HomepageListing = ({ apidata, search, city, price, bhk }) => {
  return (
    <div className="innerWidth flexCenter">
      <div className="flexCenter innerWidth">
        <div id="residencies" className="r-wrapper">
          <div className="paddings innerWidth r-container">
            <div className="flexColStart r-head"></div>

            <div className=" flexCenter container">
              {/* slider */}
              {apidata
                .filter((e) => {
                  return search === ""
                    ? e
                    : e.title.toLowerCase().includes(search.toLowerCase());
                })
                .filter((e) => {
                  return city === ""
                    ? e
                    : e.city.toLowerCase().includes(city.toLowerCase());
                })
                .filter((e) => {
                  return e.price <= price;
                })
                .filter((e) => {
                  return bhk === 0 ? e : e.facilities.bhk === bhk;
                })
                .map((card, i) => (
                  <div className="flexColStart r-card" key={i}>
                    <img src={card.image} alt="home" />

                    <span className="secondaryText r-price">
                      <span style={{ color: "orange" }}>₹</span>
                      <span>{card.price}/month</span>
                    </span>

                    <span className="primaryText">{card.title}</span>
                    <h2 className="secondaryText">
                      {card.address}, {card.city}, {card.country}
                    </h2>
                    <span className="secondaryText">{card.description}</span>
                    <span className="secondaryText">
                      {card.facilities.bhk}BHK
                    </span>
                    <span className="secondaryText">
                      {card.facilities.carpetArea}sq/ft
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageListing;
