import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with FindYourStay</span>
          <span className="secondaryText">
          Unlock the potential of your property by adding your property to FindYourStay!
            <br />
            Find your residence soon
          </span>
          <Link to='/addProperty'><button className="button">
            Add a Property
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;