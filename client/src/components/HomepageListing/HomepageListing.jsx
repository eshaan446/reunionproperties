import React from "react";
import "./HomepageListing.css";
import "swiper/css";
import "../Residencies/Residencies.css";
import { Link, useNavigate } from "react-router-dom";

const HomepageListing = ({ apidata, search, city, price, bhk }) => {
  const formattedDate = new Date().toISOString().split("T")[0];
  const todayDate = new Date().getDate();
  

  const navigate = useNavigate();

  // Function to calculate days difference between two dates
  const getDaysDifference = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
  };

  return (
    <div className="innerWidth flexCenter">
      <div className="flexCenter innerWidth">
        <div id="residencies" className="r-wrapper">
          <div className="paddings innerWidth r-container">
            <div className="flexColStart r-head"></div>

            <div className=" flexCenter container">
              {/* slider */}
              {apidata
                .filter((e) =>
                  search === ""
                    ? e
                    : e.title.toLowerCase().includes(search.toLowerCase())
                )
                .filter((e) =>
                  city === ""
                    ? e
                    : e.city.toLowerCase().includes(city.toLowerCase())
                )
                .filter((e) => e.price <= price)
                .filter((e) => (bhk === 0 ? e : e.facilities.bhk === bhk))
                .map((card, i) => {
                  const daysAgo = getDaysDifference(
                    formattedDate,
                    card.createdAt.split("T")[0]
                  );

                  const daysAgoText =
                    daysAgo === 0 ? "⏳Today" : `⏳${daysAgo}d ago`;

                  return (
                    <div className="flexColStart r-card" key={i}>
                      <img src={card.image} alt="home" />

                      <span className="secondaryText r-price">
                        <span style={{ color: "orange" }}>₹</span>
                        <span>{card.price}/month</span>{" "}
                        <small style={{color:"orange"}}>
                          <small><i><strong>{daysAgoText}</strong></i></small>
                        </small>
                      </span>

                      <span className="primaryText">{card.title}</span>
                      
                      <h2 className="secondaryText">
                       <img style={{height:'13px', width:'14px'}} src="/location-position.svg"/> {card.address}, {card.city}, {card.country}
                      </h2>
                      <span className="secondaryText">{card.description}</span>
                      <span className="secondaryText">
                      <img style={{height:'13px', width:'14px'}} src="/bed-bedroom-alt.svg"/> {card.facilities.bhk} BHK
                      </span>
                      <span className="secondaryText">
                      <img style={{height:'13px', width:'14px'}} src="/tape-measure-thin.svg"/> {card.facilities.carpetArea}sq/ft
                      </span>
                      <button onClick={() => navigate(`../${card.id}`)}>
                        View Property
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageListing;
