import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import UpdatePropertyForm from "./UpdatePropertyForm";
import { HashLoader } from "react-spinners";
import Footer from "../Footer/Footer";
import Lottie from 'lottie-react'
import newanimation from './animation.json'

const UpdateProperty = () => {
  const [apidata, setapidata] = useState([]);
  const { pathname } = useLocation();
  const id = pathname.replace("/", "").split("/")[2];
  console.log(id);
  const fetchData = async () => {
    const data = await fetch(
      `https://reunionproperties-server.vercel.app/api/property/${id}`
    );
    const jsondata = await data.json();
    setapidata(jsondata);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <h2 className=" heading innerWidth">Update your property:</h2>
      <Lottie style={{ marginTop:'1rem', height:'12rem'}} className="innerWidth" animationData={newanimation}/>
      <div className="flexCenter">
      {apidata.length === 0 ? (
        <HashLoader loading={true} color="blue" />
      ) : (
        <UpdatePropertyForm apidata={apidata} />
      )}
      </div>
      <Footer/>
    </>
  );
};

export default UpdateProperty;
