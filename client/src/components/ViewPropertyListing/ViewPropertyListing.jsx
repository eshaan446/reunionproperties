import React from "react";
import "../Residencies/Residencies.css";
import { HashLoader } from "react-spinners";
import Swal from 'sweetalert2'

const ViewPropertyListing = ({ apidata,email }) => {
  const handleEmailClick = (emailAddress) => {
    if(email===null){
      Swal.fire({
        title: "Please Login!",
        text: "Login to Contact the Property Owner!",
        icon: "error"
      });
    }
    else {const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;}
  };
  return (
    <>
    <div className="flexCenter innerWidth">
      {apidata.length !== 0 ? (
        <div className="flexColStart r-card">
          <img src={apidata.image} alt="home" />

          <span className="secondaryText r-price">
            <span style={{ color: "orange" }}>₹</span>
            <span>{apidata.price}/month</span>
          </span>

          <span className="primaryText">{apidata.title}</span>
          <h2 className="secondaryText">
          <img style={{height:'13px', width:'14px'}} src="/location-position.svg"/> {apidata.address}, {apidata.city}, {apidata.country}
          </h2>
          <span className="secondaryText">
            <span style={{ color: "orange" }}>Description:</span>{" "}
            {apidata.description}
          </span>
          <span className="secondaryText">
            <span style={{ color: "orange" }}>BHK:</span>{" "}
            {apidata.facilities.bhk}{" "}BHK
          </span>
          <span className="secondaryText">
            <span style={{ color: "orange" }}>Carpet Area:</span>{" "}
            {apidata.facilities.carpetArea}{' '}sq/ft
          </span>
          <span className="secondaryText">
            <span style={{ color: "orange" }}>Posted on:</span>{" "}
            {apidata.createdAt.split("").slice(0, 10).join("").split('-').reverse().join('-')}
          </span>
          <span className="secondaryText">
            <span style={{ color: "orange" }}>Posted By:</span>{" "}
            {apidata.userEmail.split("@").reverse().slice(-1).join("")}
            <button className="button"
              onClick={() => handleEmailClick(apidata.userEmail)}
              style={{ marginTop: "10px", alignItems: "center"}}
            >
              ✉️ Contact Owner
            </button>
          </span>
        </div>
      ) : (
        <HashLoader loading={true} color="blue" />
      )}
     
    </div>
    </>
  );
};

export default ViewPropertyListing;
