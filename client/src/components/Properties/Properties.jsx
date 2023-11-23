import React from "react";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import "./Properties.css";

const Properties = () => {
  const [apidata, setapidata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  let userEmail = localStorage.getItem("userEmail");
  const fetchdata = async () => {
    let data = await fetch("https://reunionproperties-server.vercel.app/api/myProperties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    let jsondata = await data.json();
    if(data.status!==400){
      setapidata(jsondata.userResidencies);
    }
  };
  //console.log(apidata);
  return (
    <div>
      <Header />
      <div id="residencies" className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="flexColStart r-head"></div><br/>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {/* slider */}
            {apidata.length !==0 && apidata.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Properties;
const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
