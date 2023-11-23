import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    if (response.status === 400) {
        alert("No such user, Please signup")
      //console.log("User doesn't exist");
      navigate('/signup')
    } else {
      const json = await response.json();
      //console.log(json); //the response in json format
      localStorage.setItem("authToken",json.authToken)
      localStorage.setItem("userEmail",json.email)
      console.log(localStorage.getItem("authToken"));
      navigate('/');
    }
  }

  return (
    <>
    <Header/>
    <div className='flexCenter innerWidth'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter your registered email address</label>
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;
