import React from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate=useNavigate();
  const Toast=(message)=>{
    toast.success(message,{
      position:"top-center",
      autoClose:3000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:false,
      draggable:true,
      progress:undefined,
    })
  }

  function handleLogout(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate('/')
    Toast("Logout Successfull");
  }
  
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <Link to="/">
          {/* <img src="/snip.png" alt="Reunion" width={65} height={65}/> */}
          <h1 className="heading">Find<span className="headingx">Your</span>Stay</h1>
        </Link>
        <div className=" flexCenter h-menu">
        <Link to={'/'}><h3>Home</h3></Link>
          <NavLink to="/properties">
            {localStorage.getItem("authToken")?(<h3>My Properties</h3>):""}
            
          </NavLink>

          {!localStorage.getItem("authToken") ? (
            <>
              <Link to="/login">
                <button className="button">Login</button>
              </Link>
              <Link to="/signup">
                <button className="button">Signup</button>
              </Link>
            </>
          ) : (
            <Link to="/">
              <button className="button" onClick={handleLogout}>Logout</button>
            </Link>
          )}
        </div>
      </div>
      <ToastContainer/>
    </section>

  );
};

export default Header;
