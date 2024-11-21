import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [login,setLogin]=useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/").then((response) => {
      setProducts(response.data);
    });
  }, []);
  useEffect(() => {
    const loginvalue = localStorage.getItem("success");
    if (loginvalue) {
      setLogin(true);
    }
  }, []);
  

  const handleclick = () => navigate("/");
  const handlelogoutclick = () => {
    localStorage.removeItem("success");
    setLogin(false);
    navigate("/login")};
  const handleCartClick = () => {
    if(login){
    navigate("/cart");}else{
      alert("Log in to View Your cart")
    }
  }
  const clickonfashion = ()=> navigate("/clothes");
  const clickonAccessories = ()=>navigate("/electronics");
  const clickonToys = () => navigate("/toys");
  const clickonAppliancess = () => navigate("/appliances");

  return (
    <>
     
        <div className="container" id="homeproducts">
        <div className="home">
        <ul className="nav">
          <li className="nav-item">
            <button className="nav-link" onClick={handleclick}>
              Home
            </button>
          </li>
         <li className="nav-item">
            <button className="nav-link position-relative" onClick={handleCartClick}>
              <i className="fa-solid fa-cart-shopping" />
              <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                0
                <span className="visually-hidden">cart items</span>
              </span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handlelogoutclick}>
              {login?"Log out" : "log in"}
            </button>
          </li>
        </ul>
        <p className="exclusive">Exclusive Deals</p>
          <div className="row" >
            {products.map((product, _id) => {
              return (
                <div className="col-lg-4" key={_id}>
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonfashion}>
                <img
                      src={product.im}
                      className="card-img-top"
                      alt={product.Name}
                      
                    />                  <div className="card-body">
                  <h5 className="card-title">{product.Name}</h5>
                      <p className="card-text">Price:{product.price}</p>
                      <button className="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
        <div className="divcategory">
          <p className="categories">Categories</p>
          <div className="container" id="container">
            <div className="row">
              <div className="col-lg-4" >
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonfashion}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png" className="card-img-top" alt="Fashion" />
                  <div className="card-body">
                    <p className="fashion"  >Fashion</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonAccessories}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png" className="card-img-top" alt="Accessories" />
                  <div className="card-body">
                  <p className="accessories" >Accessories</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" >
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonToys}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png" className="card-img-top" alt="Toys" />
                  <div className="card-body">
                    <p className="toys" >Toys</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" >
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonAppliancess}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png" className="card-img-top" alt="Appliancess" />
                  <div className="card-body">
                    <p className="appliancess" >Appliancess</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
/*
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [login, setLogin] = useState(false);

  // Fetch products on mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Check login status on mount
  useEffect(() => {
    const loginValue = localStorage.getItem("success");
    setLogin(!!loginValue);
  }, []);

  const handleHomeClick = () => navigate("/");
  const handleLogoutClick = () => {
    localStorage.removeItem("success");
    setLogin(false); // Update state after logout
    navigate("/login");
  };
  const handleCartClick = () => {
    if (login) {
      navigate("/cart");
    } else {
      alert("Log in to view your cart");
    }
  };

  const handleCategoryClick = (category) => navigate(`/${category}`);

  return (
    <div className="container" id="homeproducts">
      <div className="home">
        <ul className="nav">
          <li className="nav-item">
            <button className="nav-link" onClick={handleHomeClick}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link position-relative" onClick={handleCartClick}>
              <i className="fa-solid fa-cart-shopping" />
              <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                0
                <span className="visually-hidden">cart items</span>
              </span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handleLogoutClick}>
              {login ? "Log out" : "Log in"}
            </button>
          </li>
        </ul>
        <p className="exclusive">Exclusive Deals</p>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4" key={_id}>
              <div
                className="card"
                id="card"
                style={{ width: "auto", height: "auto" }}
                onClick={() => handleCategoryClick("clothes")}
              >
                <img src={product.im} className="card-img-top" alt={product.Name} />
                <div className="card-body">
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text">Price: {product.price}</p>
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="divcategory">
          <p className="categories">Categories</p>
          <div className="container" id="container">
            <div className="row">
              {["clothes", "electronics", "toys", "appliances"].map((category) => (
                <div className="col-lg-4" key={category}>
                  <div
                    className="card"
                    id="card"
                    style={{ width: "auto", height: "auto" }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <img
                      src={`https://example.com/${category}.png`}
                      className="card-img-top"
                      alt={category}
                    />
                    <div className="card-body">
                      <p className="category-name">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;*/
