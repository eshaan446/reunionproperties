import React from "react";
import './Hero.css'
import Lottie from 'lottie-react'
import newanimation from './newanimation.json'

const Hero = () => {
  return (
    <section className="hero-wrapper flexCenter">
      <div className="hero-section innerWidth">
        <div className="left flexCenter">
          <h1>
          Escape, Explore, Enjoy: Find Your Ideal Rental Retreat Today!
            <br />
            From Cozy Retreats to Lavish Estates - Find Your Ideal Rental with Us!
          </h1>
          
          
        </div>
        <Lottie style={{ marginTop:'1rem', height:'25rem'}} className="innerWidth" animationData={newanimation}/>
      </div>
      
    </section>
  );
};

export default Hero;
