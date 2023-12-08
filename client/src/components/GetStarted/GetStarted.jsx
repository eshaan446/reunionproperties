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
          </span>
          {!localStorage.getItem('userEmail')?<Link to='/login'><button className="button">
            Get Started
          </button></Link>:''}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;