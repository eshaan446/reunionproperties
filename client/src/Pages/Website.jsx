import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import GetStarted from '../components/GetStarted/GetStarted';
import Footer from '../components/Footer/Footer';

const Website = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Residencies/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default Website