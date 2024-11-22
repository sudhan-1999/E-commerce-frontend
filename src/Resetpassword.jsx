import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Resetpassword() {
  const navigate=useNavigate();

  const [newpass,setNewpass]=useState("");
  const [code,setCode]=useState("");


  const handleclick = () => navigate("/");
  const handlelogintclick = () => navigate("/login");
  const handlecartclick = () => navigate("/cart");
  const handlesubmit=(e)=>{
    e.preventDefault();
    const Email=localStorage.getItem("Email");
    const response=axios.post("http://localhost:8000/resetpassword",{
      Email:Email,
      code:code,
      password:newpass
    })
    if(response){
      setCode("");
      setNewpass("");
      navigate("/login");
    }
  }
  return (
<div className="container" id='forgorpass'>
      <div className="register" id="register">
        <ul className="nav">
          <li className="nav-item">
            <button className="nav-link" onClick={handleclick}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handlecartclick}>
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handlelogintclick}>
             log in
            </button>
          </li>
        </ul>
      </div>
    <div className="forform" id="forform">
    <form className="row g-3 needs-validation" >
  <div className="col-lg-12">
    <label for="validationCustom02" className="form-label">Code:</label>
    <input type="Email" className="form-control" id="Email" placeholder="Email" value={code} onChange={(e)=>{setCode(e.target.value)}} required/>
  </div>
  <div className="col-lg-12">
    <label for="validationCustom02" className="form-label">New Password:</label>
    <input type="password" className="form-control" id="Email" placeholder="Password" value={newpass} onChange={(e)=>{setNewpass(e.target.value)}} required/>
  </div>
  <div className="col-12" id="butnsubmit">
    <button className="btn btn-primary" type="submit" style={{width:"100%"}} onClick={handlesubmit}>Reset Password</button>
  </div>
</form>
    </div>
    </div>  )
}

export default Resetpassword