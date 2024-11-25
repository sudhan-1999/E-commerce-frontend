import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { category } = useParams(); // Get the category dynamically from the URL
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch items based on the category
    axios
      .get(`http://localhost:8000/${category}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching items:", error));
  }, [category]); // Re-run the effect when the category changes

  return (
    <div className="container" id="homeproducts">
      <div className="row">
        {products.map((product) => (
          <div
            className="col-lg-4"
            key={product._id}
            onClick={() => navigate(`/${category}/${product._id}`)} // Navigate with category and item ID
          >
            <div className="card" style={{ width: "auto", height: "auto" }}>
              <img
                src={product.im}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}/-</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
