import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import ViewPropertyListing from "../ViewPropertyListing/ViewPropertyListing";

const ViewProperty = () => {
  const [apidata, setapidata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const { pathname } = useLocation();
  const id = pathname.replace("/", "");
  const fetchdata = async () => {
    let data = await fetch(
      `https://reunionproperties-server.vercel.app/api/property/${id}`
    );
    let jsondata = await data.json();
    setapidata(jsondata);
  };
  console.log(apidata);
  return (
    <div>
      <Header />
      <div className="flexCenter innerWidth">
        {apidata === null ? (
          "Loading...."
        ) : (
          <ViewPropertyListing apidata={apidata} />
        )}
      </div>
    </div>
  );
};

export default ViewProperty;
