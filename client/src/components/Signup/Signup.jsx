import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: "" });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email }),
    });
    if (response.status === 400) {
      alert("User Already Exists, Please Login");
      navigate("/login");
    } else {
      alert("Signup Successfull, Please Login to continue");
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
