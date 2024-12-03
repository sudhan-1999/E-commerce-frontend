import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'

function Layout() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [cartprd,setCartprd]=useState([]);

  useEffect(()=>{
    const loginvalues=localStorage.getItem("success")
    if(loginvalues){
      setLogin(true);
    }
  },[])
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-27nb.onrender.com/cart");
        setCartprd(response.data);
      } catch (err) {
        console.error("Error fetching cart products:", err);
      }
    };
    fetchCartItems();
  }, [cartprd]);

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
             {cartprd.length}<span className="visually-hidden">cart items</span>
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
