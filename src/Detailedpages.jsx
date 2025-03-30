/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detailedpage() {
  const { category, id } = useParams();
  const [login, setLogin] = useState(localStorage.getItem("success") ? true : false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-27nb.onrender.com/${category}/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (category && id) {
      fetchProduct();
    }
  }, [category, id]);

  const handleAddToCart = async () => {
    if (!login) {
      alert("Log in to add to your cart");
      return;
    }
    try {
      await axios.post(`https://e-commerce-backend-27nb.onrender.com/cart/${category}/${id}`);
      alert("Added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card" style={{ width: "auto", height: "auto" }}>
            <img src={product.im} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: {product.price}/-</p>
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailedpage;
*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detailedpage() {
  const { category, id } = useParams();
  const [login, setLogin] = useState(localStorage.getItem("success") ? true : false);
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem(`product-${id}`)) || null);
  const [loading, setLoading] = useState(!product); // Load instantly if cached

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-27nb.onrender.com/${category}/${id}`);
        setProduct(response.data);
        localStorage.setItem(`product-${id}`, JSON.stringify(response.data)); // Cache it
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!product) {
      fetchProduct(); // Fetch only if not cached
    }
  }, [category, id]);

  const handleAddToCart = async () => {
    if (!login) {
      alert("Log in to add to your cart");
      return;
    }
    try {
      await axios.post(`https://e-commerce-backend-27nb.onrender.com/cart/${category}/${id}`);
      alert("Added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src={product.im} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: {product.price}/-</p>
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailedpage;

