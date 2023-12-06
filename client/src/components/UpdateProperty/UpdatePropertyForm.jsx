import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdatePropertyForm = ({apidata}) => {
    const navigate=useNavigate();
    const [title, setTitle] = useState(apidata.title);
  const [description, setDescription] = useState(apidata.description);
  const [price, setPrice] = useState(apidata.price);
  const [address, setAddress] = useState(apidata.address);
  const [city, setCity] = useState(apidata.city);
  const [image, setImage] = useState(apidata.image);
  const [bhk, setBhk] = useState(apidata.facilities.bhk);
  const [carpetArea, setCarpetArea] = useState(apidata.facilities.carpetArea);
  let email = localStorage.getItem("userEmail");
  
  async function DeleteThisProperty(id){
    const response = await fetch(`https://reunionproperties-server.vercel.app/api/myProperties/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.status === 500) {
      Swal.fire({
        title: "Error!",
        text: "Some error occurred while deleting",
        icon: "error"
      });
    } else {
      const json = await response.json();
      let data = {
        title,
        description,
        price: parseInt(price),
        address,
        city,
        country: "India",
        image,
        facilities: { bhk:bhk, carpetArea: parseInt(carpetArea) },
        userEmail: email
      };
      addThisProperty(data);
    }
  }
  async function handleSubmit(e){
    e.preventDefault();
    const id=apidata.id
    DeleteThisProperty(id);

  }
  const addThisProperty = async (data) => {
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
          title: "Success!",
          text: "Property updated successfully !",
          icon: "success"
        });
        navigate('/') 
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Some problem occurred, Property wasn't updated correctly !",
        icon: "error"
      });
      //console.error("Error:", error);
    }
  };
  return (
    <>
       
         <div className="flexCenter innerWidth">
        <form onSubmit={handleSubmit} >
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
          <input type="number" value={price} onChange={(e)=>setPrice(parseInt(e.target.value))} required/>
          <span>
          <span>
            <small>Enter the address or Landmark area:</small>
          </span>
          <input type="text" placeholder="e.g- Andheri West" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
          <span></span>
            <small>Select city:</small>
          </span>
          <select value={city} onChange={(e)=>setCity(e.target.value)}>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <span>
            <small>Paste a link of an image of your residency:</small>
          </span>
          <input type="text" value={image} placeholder="e.g- https://dummyimage.com/" onChange={(e)=>setImage(e.target.value)} required/>
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
          <input type="number" placeholder="e.g-300" value={carpetArea} onChange={(e)=>setCarpetArea(parseInt(e.target.value))} required/>

          <button className='button' type="submit">Update this property</button>
        </form>
      </div>
    </>
  )
}

export default UpdatePropertyForm