import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  useEffect(()=>{
    const loginvalues=localStorage.getItem("success")
    if(loginvalues){
      setLogin(true);
    }
  },[])

  const handleclick = () => navigate("/");
  const handlelogoutclick = () => {
    localStorage.removeItem("success");
    setLogin(false);
    navigate("/login");
  };
  const handleCartClick = () => {
    if (login) {
      navigate("/cart");
    } else {
      alert("Log in to View Your cart");
    }
  };
  const handlelogin = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Navbar Section */}
      <ul className="nav">
        <li className="nav-item">
          <button className="nav-link" onClick={handleclick}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link position-relative"
            onClick={handleCartClick}
          >
            <i className="fa-solid fa-cart-shopping" />
            <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
              0<span className="visually-hidden">cart items</span>
            </span>
          </button>
        </li>
        <li className="nav-item">
          {login ? (
            <button className="nav-link" onClick={handlelogoutclick}>
              Log out
            </button>
          ) : (
            <button className="nav-link" onClick={handlelogin}>
              Log in
            </button>
          )}
        </li>
      </ul>

      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
