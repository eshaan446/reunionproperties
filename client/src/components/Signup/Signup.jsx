import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Swal from 'sweetalert2'

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: "" });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://reunionproperties-server.vercel.app/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email }),
    });
    if (response.status === 400) {
      Swal.fire({
        title: "Please Login!",
        text: "This user already exists.",
        icon: "error"
      });
      navigate("/login");
    } else {
      Swal.fire({
        title: "Signup Successfull!",
        text: "Please Login to continue.",
        icon: "success"
      });
      navigate("/login");
    }
  }
  function handleOnChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  //console.log(credentials)

  return (
    <>
  <Header/>
    <div className="flexCenter innerWidth">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={handleOnChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
    </>
  );
};

export default Signup;
