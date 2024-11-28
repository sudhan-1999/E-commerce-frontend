import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Login() {
  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleclick = () => navigate("/");
  const handlelregisterclick = () => navigate("/register");
  const handlecartclick = () => navigate("/cart");
  const handlelforgotpassword=()=>navigate("/forgotpassword")
    
  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Validation for empty or invalid values
    if (!email.trim() || !password.trim()) {
      alert("Please fill out all the fields."); // Show an alert to the user
      return;
    }
  
    // Validate email format using a regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:8000/login", {
        Email: email,
        Password: password
      });
      navigate("/");

  
  
      // Clear the input fields only if the request is successful
      if (response) {
        console.log(response.data);
        //need to change after jwt integtration
        const values = JSON.stringify(response.data.success);
        localStorage.setItem("success", values);
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("There was an error during Login. Please try again.");
    }
  };
  
  return (
    <div className="container">
      <div className="register" id="register">
      </div>
    <div className="forform" id="forform">
    <form className="row g-3 needs-validation" >
  <div className="col-md-12">
    <label for="validationCustom02" className="form-label">Email:</label>
    <input type="Email" className="form-control" id="Email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
  </div>
  <div className="col-md-12">
    <label for="validationCustomUsername" className="form-label">Password:</label>
    <div className="input-group has-validation">
      <input type="Password" className="form-control" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend"  value={password} onChange={(e)=>{setPassword(e.target.value)}}required/>
    </div>
  </div>
  <div className="col-12" id="butnsubmit">
    <button className="btn btn-primary" type="submit" style={{width:"100%"}} onClick={handlesubmit}>Log in</button>
  </div>
  <p>Don't have an account? <strong onClick={handlelregisterclick}>Register Here!</strong></p>
  <p>Forgot password?:<strong onClick={handlelforgotpassword} style={{color:"red"}}>Click here</strong></p>
</form>
    </div>
    </div>
  );
}

export default Login