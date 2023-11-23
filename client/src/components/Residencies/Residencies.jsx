import React, { useEffect, useState } from "react";
import Searchcomp from "../SearchComp/Searchcomp";
const Residencies = () => {
  const [apidata, setapidata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    let data = await fetch("https://reunionproperties-server.vercel.app/api/list-properties");
    let jsondata = await data.json();
    setapidata(jsondata);
  };
  console.log(apidata);

  return (
    <>
      <Searchcomp apidata={apidata} />
    </>
  );
};

export default Residencies;
