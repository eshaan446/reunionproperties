import React from "react";
import './Hero.css'
import Lottie from 'lottie-react'
import newanimation from './animation.json'

const Hero = () => {
  return (
    <section className="hero-wrapper flexCenter">
      <div className="hero-section innerWidth">
        <div className="left flexCenter">
          <h1>
          Unlock Your Ideal Stay with FindYourStay - Find Your Ideal Rental with Us!
            <br />
            Your ultimate destination for hassle-free property rentals.
          </h1>
          
          
        </div><br/>
        <Lottie style={{ marginTop:'1rem', height:'320px'}} className="innerWidth" animationData={newanimation}/>
      </div>
      
    </section>
  );
};

export default Hero;
