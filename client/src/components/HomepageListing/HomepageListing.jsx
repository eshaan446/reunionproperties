import React, { useState } from "react";
import "./HomepageListing.css";
import "swiper/css";
import "../Residencies/Residencies.css";
import { Link, useNavigate } from "react-router-dom";


const HomepageListing = ({ apidata, search, city, price, bhk }) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    const todayDate=formattedDate.split('-')[2];
  const navigate=useNavigate();
  return (
    <>
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
                        <span>{card.price}/month</span> &nbsp;<small><i>{todayDate-card.createdAt.split("").slice(0, 10).join("").split('-').reverse()[0]===0?"💥Today":`${todayDate-card.createdAt.split("").slice(0, 10).join("").split('-').reverse()[0]}d ago`}</i></small>
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
                      <button onClick={()=>navigate(`../${card.id}`)}>
                        View Property
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageListing;
