import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";

const Website = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Residencies/>
    </div>
  )
}

export default Website