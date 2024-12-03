import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Forgotpassword() {
  const navigate=useNavigate();

  const [email,setEmail]=useState("");

  const handlesubmit= async (e)=>{
    e.preventDefault();

    if(!email.trim){
      console.error("Error: All fields are required.");
      alert("Please fill out all the fields.");
      return;
    }

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      console.error("Error: Invalid email format.");
      alert("Please enter a valid email address.");
      return;
    }

    try{
      const response= await axios.post("https://e-commerce-backend-27nb.onrender.com/forgotpassword",{Email:email});
      console.log(response);
       if(response){
        localStorage.setItem("Email",{email})
        setEmail("");
        navigate("/resetpassword");
       }
    }catch(err){
      console.error("Error during registration:", err);
    }
  }

  return (
<div className="container" id='forgorpass'>
      <div className="register" id="register">
      </div>
    <div className="forform" id="forform">
    <form className="row g-3 needs-validation" >
  <div className="col-lg-12">
    <label for="validationCustom02" className="form-label">Email:</label>
    <input type="Email" className="form-control" id="Email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
  </div>
  <div className="col-12" id="butnsubmit">
    <button className="btn btn-primary" type="submit" style={{width:"100%"}} onClick={handlesubmit}>Click Here!</button>
  </div>
</form>
    </div>
    </div>  )
}

export default Forgotpassword