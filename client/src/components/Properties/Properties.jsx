import React from "react";
import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import "./Properties.css";
import { HashLoader, SyncLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Properties = () => {
  const navigate=useNavigate()
  const [apidata, setapidata] = useState([]);
  const [search, setsearch] = useState("");
 const[showloader,setshowloader]=useState(true)
 useEffect(()=>{
  setTimeout(()=>{
    setshowloader(false)
  },5000)

 },[])
  useEffect(() => {
    fetchdata();
  }, []);
  let userEmail = localStorage.getItem("userEmail");
  const fetchdata = async () => {
    let data = await fetch(
      "https://reunionproperties-server.vercel.app/api/myProperties",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      }
    );
    let jsondata = await data.json();
    if (data.status !== 400) {
      setapidata(jsondata.userResidencies);
    }
  };
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
        text: "Property wasn't fetched",
        icon: "error"
      });
    } else {
      const json = await response.json();
      Swal.fire({
        title: "Deleted!",
        text: "Your property has been deleted.",
        icon: "success"
      });
      navigate('/')
     
    }
  }
  function fireAlert(id){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteThisProperty(id);
        console.log(id)
      }
    });
  }
 
  
  
  
  return (
    <div>
      <Header />
      <div id="residencies" className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="flexCenter innerWidth">
          <form>
            <span>
              <small>Search from your residencies:</small>
            </span>
            <input
              type="text"
              placeholder="Enter the name of your residency"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <Link to='/addProperty'><button className="flexCenter innerWidth">Add a property</button></Link>
          </form>
          </div>
          <br />
          <Swiper {...sliderSettings}>
             <SlideNextButton />
            {/* slider */}
            {apidata.length===0 ? (
              <div className="flexCenter innerWidth">
                {showloader ?<HashLoader loading={showloader} color="black" />:<h2>You currently have no Listings 😔</h2>}
              </div>
            ) : (
              apidata
                .filter((e) => {
                  return search === ""
                    ? e
                    : e.title.toLowerCase().includes(search.toLowerCase());
                })
                .map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className="flexColStart r-card">
                      <img src={card.image} alt="property image" />

                      <span className="secondaryText r-price">
                        <span style={{ color: "orange" }}>₹</span>
                        <span>{card.price}/month</span>
                      </span>

                      <span className="primaryText">{card.title}</span>
                      <h2 className="secondaryText">
                        {card.address}, {card.city}, {card.country}
                      </h2>
                      <span className="secondaryText">{card.description}</span>
                      <span className="secondaryText">
                        {card.facilities.bhk}BHK
                      </span>
                      <span className="secondaryText">
                        {card.facilities.carpetArea}sq/ft
                      </span>
                      <button onClick={()=>fireAlert(card.id)} style={{backgroundColor:'#d33'}}>Delete this property</button>
                    </div>
                  </SwiperSlide>
                ))
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Properties;
const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
