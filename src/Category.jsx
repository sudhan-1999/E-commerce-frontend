import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://e-commerce-backend-27nb.onrender.com/${category}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching items:", error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="category-wrapper homepage-container">

      {/* Category title */}
      <h2 className="section-title text-capitalize">
        {category} Collection
      </h2>

      {/* Spinner Loader (Bootstrap style) */}
      {loading ? (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="notfound">No products available</div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => navigate(`/${category}/${product._id}`)}
            >
              <img
                src={product.im}
                alt={product.name}
                className="product-img"
              />

              <div className="product-info">
                <h5 className="card-title">{product.name}</h5>
                <p className="price">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
