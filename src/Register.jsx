import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {
  const navigate = useNavigate();

  const [firstname,setFirstname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handlelogoutclick = () => navigate("/login");
    
  const handlesubmit = async (e) => {
    e.preventDefault(); 
  
    if (!firstname.trim() || !email.trim() || !password.trim()) {
      console.error("Error: All fields are required.");
      alert("Please fill out all the fields.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Error: Invalid email format.");
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await axios.post("https://e-commerce-backend-27nb.onrender.com/register", {
        Name: firstname,
        Email: email,
        Password: password,
      });
      navigate("/login");
  
      console.log("Registration successful:", response.data);
  
      if (response) {
        setFirstname("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("There was an error during registration. Please try again.");
    }
  };
  
  return (
    <div className="container">
      <div className="register" id="register">
      </div>
    <div className="forform" id="forform">
    <form className="row g-3 needs-validation" novalidate>
  <div className="col-lg-12">
    <label for="validationCustom01" className="form-label">Name:</label>
    <input type="text" className="form-control" id="Name" placeholder="Name" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} required/>
  </div>
  <div className="col-lg-12">
    <label for="validationCustom02" className="form-label">Email:</label>
    <input type="Email" className="form-control" id="Email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
  </div>
  <div className="col-lg-12">
    <label for="validationCustomUsername" className="form-label">Password:</label>
    <div className="input-group has-validation">
      <input type="Password" className="form-control" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend"  value={password} onChange={(e)=>{setPassword(e.target.value)}}required/>
    </div>
  </div>
  <div className="col-12" id="butnsubmit">
    <button className="btn btn-primary" type="submit"  style={{width:"100%"}} onClick={handlesubmit}>Sign up</button>
  </div>
  <div className="col-12">    
  <button className="btn btn-primary" type="submit" style={{width:"100%"}} onClick={handlelogoutclick}>Log in</button>
  </div>
</form>
    </div>
    </div>
  );
}

export default Register;
