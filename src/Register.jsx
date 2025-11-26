import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => navigate("/login");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname.trim() || !email.trim() || !password.trim()) {
      alert("Please fill out all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email.");
      return;
    }

    try {
      const response = await axios.post(
        "https://e-commerce-backend-27nb.onrender.com/register",
        {
          Name: firstname,
          Email: email,
          Password: password,
        }
      );

      console.log("Registration successful:", response.data);

      setFirstname("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Join us and start shopping</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control login-input"
              placeholder="Enter your name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control login-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control login-input"
              placeholder="Enter a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary login-btn" type="submit">
            Sign Up
          </button>

          <p className="login-text mt-3">
            Already have an account?{" "}
            <span className="login-link" onClick={handleLoginClick}>
              Login Here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
