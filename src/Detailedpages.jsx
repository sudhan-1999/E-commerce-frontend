import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detailedpage() {
  const { category, id } = useParams();

  const [login] = useState(localStorage.getItem("success") ? true : false);

  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem(`product-${id}`)) || null
  );

  const [loading, setLoading] = useState(!product);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://e-commerce-backend-27nb.onrender.com/${category}/${id}`
        );

        setProduct(response.data);
        localStorage.setItem(`product-${id}`, JSON.stringify(response.data));
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }

    if (!product) fetchProduct();
  }, [category, id]);

  const handleAddToCart = async () => {
    if (!login) return alert("Log in to add to your cart");

    try {
      await axios.post(
        `https://e-commerce-backend-27nb.onrender.com/cart/${category}/${id}`
      );
      alert("Added to cart successfully!");
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  // Loading UI
  if (loading)
    return (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    );

  if (!product) return <div className="notfound">Product not found</div>;

  return (
    <div className="detailed-wrapper">
      <div className="detail-card">

        {/* LEFT: Product Image */}
        <div className="detail-image-box">
          <img src={product.im} alt={product.name} className="detail-img" />
        </div>

        {/* RIGHT: Product Info */}
        <div className="detail-info">
          <h2 className="detail-title">{product.name}</h2>

          <p className="detail-brand">Brand: <span>{product.brand}</span></p>

          <div className="detail-rating">
            ⭐ {product.rating} / 5
            <span className="detail-reviews">({product.reviews} reviews)</span>
          </div>

          <p className="detail-price">{product.price}</p>

          <p className="detail-stock">
            Availability:{" "}
            <span className={product.availability === "In Stock" ? "in-stock" : "out-stock"}>
              {product.availability}
            </span>
          </p>

          <p className="detail-desc">{product.description}</p>

          <button className="detail-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default Detailedpage;
