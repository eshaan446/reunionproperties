import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Swal from 'sweetalert2'
import Lottie from 'lottie-react'
import newanimation from './animation.json'
import Footer from '../Footer/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://reunionproperties-server.vercel.app/api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    if (response.status === 400) {
      Swal.fire({
        title: "Please Signup!",
        text: "User doesn't exist",
        icon: "error"
      });
      //console.log("User doesn't exist");
      navigate('/signup')
    } else {
      const json = await response.json();
      //console.log(json); //the response in json format
      localStorage.setItem("authToken",json.authToken)
      localStorage.setItem("userEmail",json.email)
      console.log(localStorage.getItem("authToken"));
      Swal.fire({
        title: "Login Successfull!",
        text: "Welcome to FindYourStay",
        icon: "success"
      });

      navigate('/');
    }
  }

  return (
    <>
    <Header/>
    <div className='flexCenter innerWidth'>
    <Lottie style={{ marginTop:'1rem', height:'18rem'}} className="innerWidth" animationData={newanimation}/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter your registered email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">Welcome Back !!.</small>
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
