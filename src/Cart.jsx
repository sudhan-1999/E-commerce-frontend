/*import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [login, setLogin] = useState(false);
  const [products, setProducts] = useState([]);

  // Check login status
  useEffect(() => {
    const loginvalues = localStorage.getItem("success");
    if (loginvalues) {
      setLogin(true);
    }
  }, []);

  // Fetch cart products
  useEffect(() => {
    axios
      .get("https://e-commerce-backend-27nb.onrender.com/cart")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.error("Error fetching cart products:", err));
  }, []);

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cart");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching cart products:", err);
    }
  };
  // Remove item from cart
  useEffect(()=>{fetchCartProducts()},[])
  const removefromcart =async  (productid) => {
    axios
      .delete(`https://e-commerce-backend-27nb.onrender.com/cart/${productid}`)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productid)
        );
      })
      .catch((err) => console.error("Error removing product from cart:", err));
      await fetchCartProducts()
  };

  return (
    <div className="container mt-4">
      {products.length > 0 ? (
        <div className="row">
          {products.map((product) => (
              <div className="card" style={{ width: "auto", height: "auto" }} key={product._id}>
                <img
                  src={product.im}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: {product.price}/-</p>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    style={{ width: "80%" }}
                    onClick={() => removefromcart(product._id)}
                  >
                    Remove From Cart
                  </button>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-5">Your Cart is Empty!</p>
      )}
    </div>
  );
}

export default Cart;
*/
import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [login, setLogin] = useState(false);
  const [products, setProducts] = useState([]);

  // Check login status correctly
  useEffect(() => {
    const loginValue = localStorage.getItem("success");
    setLogin(!!loginValue); // Convert to boolean
  }, []);

  // Fetch cart products if logged in
  const fetchCartProducts = async () => {
    if (!login) return; // Prevent fetching if not logged in

    try {
      const response = await axios.get("https://e-commerce-backend-27nb.onrender.com/cart");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching cart products:", err);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, [login]); // Re-run when `login` changes

  // Remove item from cart
  const removeFromCart = async (productid) => {
    try {
      await axios.delete(`https://e-commerce-backend-27nb.onrender.com/cart/${productid}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productid));
    } catch (err) {
      console.error("Error removing product from cart:", err);
    }
  };

  return (
    <div className="container mt-4">
      {login ? (
        products.length > 0 ? (
          <div className="row" id="cartproducts">
            {products.map((product) => (
              <div className="card" style={{ width: "auto", height: "auto" }} key={product._id}>
                <img src={product.im} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: {product.price}/-</p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary" id="cartbutn"style={{ width: "80%" }} onClick={() => removeFromCart(product._id)}>
                    Remove From Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-5">Your Cart is Empty!</p>
        )
      ) : (
        <p className="text-center mt-5">Log in to view your cart!</p>
      )}
    </div>
  );
}

export default Cart;
