import React, { useState } from "react";
import "./Searchcomp.css";
import "swiper/css";
import "../Residencies/Residencies.css";

const Searchcomp = ({ apidata }) => {
  const [search, setsearch] = useState("");
  const [city, setcity] = useState("Mumbai");
  const [price, setprice] = useState(12000);
  const [bhk, setbhk] = useState(0);
  function handleChange() {}

  return (
    <div className="innerWidth flexCenter">
      <form>
      <span>
          <small>Search any residency:</small>
        </span>
        <input
          type="text"
          placeholder="Enter the name of the residency"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      <span>
          <small>Select City:</small>
        </span>
        <select
          name="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        >
          <option value="">Select Location</option>

          <option value="Mumbai">Mumbai</option>

          <option value="Delhi">Delhi</option>

          <option value="Bangalore">Bangalore</option>
        </select>

        <span>
          <small>Select Date:</small>
        </span>
        <input type="date" />
        <span>
          <small>Price: ₹{price}</small>
        </span>
        <input
          type="range"
          min={5000}
          max={12000}
          step={1000}
          value={price}
          onChange={(e) => setprice(parseInt(e.target.value))}
        />
        <span>
          <small>Select BHK:</small>
        </span>
        <select name="propertyType" value={bhk} onChange={(e)=>setbhk(parseInt(e.target.value))}>
          <option value="">Select Property Type</option>
          <option value="0">All</option>
          <option value="1">1BHK</option>
          <option value="2">2BHK</option>
          <option value="3">3BHK</option>
          <option value="4">4BHK</option>
        </select>

        <button type="submit">Apply</button>
      </form>
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
                .filter((e)=>{
                  return e.price<=price;
                })
                .filter((e)=>{
                  return bhk===0?e:e.facilities.bhk===bhk;
                }).map((card, i) => (
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

export default Searchcomp;
