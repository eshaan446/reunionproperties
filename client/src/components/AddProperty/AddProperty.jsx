import React, { useState } from "react";
import Header from "../Header/Header";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate=useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [image, setImage] = useState('');
  const [bhk, setBhk] = useState(1);
  const [carpetArea, setCarpetArea] = useState('');
  const email = localStorage.getItem("userEmail");

  const fetchdata = async (data) => {
    try {
      let response = await fetch(
        "https://reunionproperties-server.vercel.app/api/property",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        }
      );
      let jsondata = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: "Congratulations!",
          text: "Property added successfully !",
          icon: "success"
        });
        navigate('/') 
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "This property already exists !",
        icon: "error"
      });
      //console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
      price: parseInt(price),
      address,
      city,
      country: "India",
      image,
      facilities: { bhk, carpetArea: parseInt(carpetArea) },
      userEmail: email
    };
    fetchdata(data);
  };
  
  return (
    <div>
      <Header />
      <h2 className="innerWidth">Add a property:</h2>
      <div className="flexCenter innerWidth">
        <form onSubmit={handleSubmit}>
          <span>
            <small>Add a residency:</small>
          </span>
          <input type="text" placeholder="e.g- Crown Apartments" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
          <span>
            <small>Provide a description of your property:</small>
          </span>
          <textarea style={{padding:'10px'}} value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>

          <span>
            <small>Rent/month ₹:</small>
          </span>
          <input type="number" placeholder="eg: 5000-12000" value={price} onChange={(e)=>setPrice(parseInt(e.target.value))} required/>
          <span>
          <span>
            <small>Enter the address or Landmark area:</small>
          </span>
          <input type="text" placeholder="e.g: Andheri West" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
          <span></span>
            <small>Select city:</small>
          </span>
          <select onChange={(e)=>setCity(e.target.value)}>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <span>
            <small>Paste a link of an image of your residency:</small>
          </span>
          <input type="text" value={image} placeholder="e.g: https://dummyimage.com/" onChange={(e)=>setImage(e.target.value)} required/>
          {image !=='' && <small><i>*Please make sure that the image link is working*.</i></small>}
          <span>
            <small>Select BHK:</small>
          </span>
          <select value={bhk} onChange={(e)=>setBhk(parseInt(e.target.value))}>
            <option value="1">1BHK</option>
            <option value="2">2BHK</option>
            <option value="3">3BHK</option>
            <option value="4">4BHK</option>
          </select>
          <span>
            <small>Carpet Area in sq/ft:</small>
          </span>
          <input type="number" placeholder="e.g: 300" value={carpetArea} onChange={(e)=>setCarpetArea(parseInt(e.target.value))} required/>

          <button type="submit">Add property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
