import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => navigate("/register");
  const handleForgotPassword = () => navigate("/forgotpassword");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email.");
      return;
    }

    try {
      const response = await axios.post(
        "https://e-commerce-backend-27nb.onrender.com/login",
        {
          Email: email,
          Password: password,
        }
      );

      if (response) {
        localStorage.setItem("success", JSON.stringify(response.data.success));
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue shopping</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary login-btn" type="submit">
            Log In
          </button>

          <p className="login-text mt-2">
            Forgot your password?{" "}
            <span className="login-link" onClick={handleForgotPassword}>
              Click here
            </span>
          </p>

          <p className="login-text">
            Don’t have an account?{" "}
            <span className="login-link" onClick={handleRegisterClick}>
              Register Now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
