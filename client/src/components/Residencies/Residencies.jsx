import React, { useEffect, useState } from "react";
import HomepageListing from "../HomepageListing/HomepageListing";
import { HashLoader } from "react-spinners";
const Residencies = () => {
  const [apidata, setapidata] = useState([]);
  const [search, setsearch] = useState("");
  const [city, setcity] = useState("Mumbai");
  const [price, setprice] = useState(12000);
  const [bhk, setbhk] = useState(0);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    let data = await fetch(
      "https://reunionproperties-server.vercel.app/api/list-properties"
    );
    let jsondata = await data.json();
    setapidata(jsondata);
  };
  //console.log(apidata);

  return (
    <>
      <div style={{ marginTop: "30px" }} className="flexCenter innerWidth">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <span>
            <small className="heading">Search any residency:</small>
          </span>
          <input
            type="text"
            placeholder="Enter the name of the residency"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <span>
            <small className="heading">Select City:</small>
          </span>
          <select
            name="city"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          >
            <option value="Mumbai">Mumbai</option>

            <option value="Delhi">Delhi</option>

            <option value="Bangalore">Bangalore</option>
          </select>

          <span>
            <small className="heading">Maximum Budget: <span style={{color:'orange'}}><b>₹ {price}</b></span></small>
          </span>
          <input
            type="range"
            min={5000}
            max={12000}
            step={1000}
            value={price}
            onChange={(e) => setprice(parseInt(e.target.value))}
          />
          <span>
            <small className="heading">Select BHK:</small>
          </span>
          <select
            name="propertyType"
            value={bhk}
            onChange={(e) => setbhk(parseInt(e.target.value))}
          >
            <option value="0">All</option>
            <option value="1">1BHK</option>
            <option value="2">2BHK</option>
            <option value="3">3BHK</option>
            <option value="4">4BHK</option>
          </select>

          <button className="button" type="submit">
            Apply
          </button>
        </form>
      </div>

      {apidata.length === 0 ? (
        <div className="flexCenter innerWidth">
          <HashLoader loading={true} color="blue" />
        </div>
      ) : (
        <HomepageListing
          apidata={apidata}
          search={search}
          city={city}
          price={price}
          bhk={bhk}
        />
      )}
    </>
  );
};

export default Residencies;
