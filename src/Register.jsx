import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {
  const navigate = useNavigate();

  const [firstname,setFirstname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleclick = () => navigate("/");
  const handlelogoutclick = () => navigate("/login");
  const handlecartclick = () => navigate("/cart");
    
  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Validation for empty or invalid values
    if (!firstname.trim() || !email.trim() || !password.trim()) {
      console.error("Error: All fields are required.");
      alert("Please fill out all the fields."); // Show an alert to the user
      return;
    }
  
    // Validate email format using a regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Error: Invalid email format.");
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:8000/clothes/register", {
        Name: firstname,
        Email: email,
        Password: password,
      });
      navigate("/login");
  
      console.log("Registration successful:", response.data);
  
      // Clear the input fields only if the request is successful
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
            <button className="nav-link" onClick={handlelogoutclick}>
              Log in
            </button>
          </li>
        </ul>
      </div>
      <div className="container" id="container">
      <div className="first" id="first">
       <label className="Firstname" id="Firstname">First Name:</label>
       <input type="text" className="Firstnameinput" id="Firstnameinput" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
      </div>
      <div className="email" id="email">
      <label className="email" id="email">Email:</label>
      <input type="email" className="emailinput" id="emailinput" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="pass" id="pass">
      <label className="password" id="password">Password:</label>
      <input type="password" className="passwordinput" id="passwordinput" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <div className="butn" id="butn">
        <button type="submit" className="btn-primary" id="signin" onClick={handlesubmit}>Sign In</button>
      </div>
    </div>
    </div>
  );
}

export default Register;
