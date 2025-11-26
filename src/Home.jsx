import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [login, setLogin] = useState(false);

  // GET PRODUCTS
  useEffect(() => {
    axios
      .get("https://e-commerce-backend-27nb.onrender.com/")
      .then((res) => setProducts(res.data));
  }, []);

  // LOGIN CHECK
  useEffect(() => {
    if (localStorage.getItem("success")) setLogin(true);
  }, []);

  const handleAddToCart = (product) => {
    if (!login) {
      alert("Login to add items to your cart");
      return;
    }

    axios.post(
      `https://e-commerce-backend-27nb.onrender.com/cart/exclusive/${product._id}`
    );
  };

  return (
    <>
      <div className="homepage-container">

        {/* ---------- HERO SECTION ---------- */}
        <div className="hero-section">
          <h1>Exclusive Deals</h1>
          <p>Top picks curated just for you</p>
        </div>

        {/* ---------- PRODUCTS SECTION ---------- */}
        <div className="section-title">Featured Products</div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.im} alt={product.Name} className="product-img" />

              <div className="product-info">
                <h5>{product.Name}</h5>
                <p className="price">₹{product.price}</p>

                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- CATEGORY SECTION ---------- */}
        <div className="section-title">Shop by Category</div>

        <div className="category-grid">
          <div className="category-card" onClick={() => navigate("/clothes")}>
            <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png" alt="Fashion" />
            <p>Fashion</p>
          </div>

          <div className="category-card" onClick={() => navigate("/electronics")}>
            <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png" alt="Accessories" />
            <p>Accessories</p>
          </div>

          <div className="category-card" onClick={() => navigate("/toys")}>
            <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png" alt="Toys" />
            <p>Toys</p>
          </div>

          <div className="category-card" onClick={() => navigate("/appliances")}>
            <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png" alt="Appliances" />
            <p>Appliances</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Homepage;
