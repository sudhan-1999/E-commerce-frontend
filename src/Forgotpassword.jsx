import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forgotpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email.");
      return;
    }

    try {
      const response = await axios.post(
        "https://e-commerce-backend-27nb.onrender.com/forgotpassword",
        { Email: email }
      );

      console.log(response);

      localStorage.setItem("Email", email);
      setEmail("");

      navigate("/resetpassword");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">

        <h2 className="login-title">Forgot Password</h2>
        <p className="login-subtitle">
          Enter your email to receive reset instructions
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
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

          <button className="btn btn-primary login-btn" type="submit">
            Send Reset Link
          </button>

          <p className="login-text mt-3">
            Remember your password?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
