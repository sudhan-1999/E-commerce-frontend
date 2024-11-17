import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleclick = () => navigate("/home");
  const handlelogoutclick = () => navigate("/login");
  const handlecartclick = () => navigate("/cart");
 // const clickonfashion = ()=> navigate("/")

  return (
    <>
     
        <div className="container" id="homeproducts">
        <div className="home">
        <ul class="nav">
          <li class="nav-item">
            <button className="nav-link" onClick={handleclick}>
              Home
            </button>
          </li>
          <li class="nav-item">
            <button className="nav-link" onClick={handlecartclick}>
              <i class="fa-solid fa-cart-shopping" />
            </button>
          </li>
          <li class="nav-item">
            <button className="nav-link" onClick={handlelogoutclick}>
              Log in
            </button>
          </li>
        </ul>
          <div className="row" >
            {products.map((product, _id) => {
              return (
                <div className="col-lg-4" key={_id}>
                  <div class="card" style={{ width: "auto", height: "auto" }}>
                    <img
                      src={product.im}
                      class="card-img-top"
                      alt={product.name}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{product.name}</h5>
                      <p class="card-text">Price:{product.price}</p>
                      <button class="btn btn-primary">Add to cart</button>
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
                <div class="card" id="card" style={{ width: "auto", height: "auto" }}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png" class="card-img-top" alt="Fashion" />
                  <div class="card-body">
                    <p class="fashion">Fashion</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card" id="card" style={{ width: "auto", height: "auto" }}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png" class="card-img-top" alt="Accessories" />
                  <div class="card-body">
                  <p class="accessories">Accessories</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" >
                <div class="card" id="card" style={{ width: "auto", height: "auto" }}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png" class="card-img-top" alt="Toys" />
                  <div class="card-body">
                    <p class="toys">Toys</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" >
                <div class="card" id="card" style={{ width: "auto", height: "auto" }}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png" class="card-img-top" alt="Appliancess" />
                  <div class="card-body">
                    <p class="appliancess">Appliancess</p>
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
