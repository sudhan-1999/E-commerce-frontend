import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";

function Detailedpage() {
  const { category, id } = useParams();
  const[login,setLogin]=useState(false);
  const [product, setProduct] = useState(null); // Use `null` for initial state
  const [loading, setLoading] = useState(true); // Loading state

  
    useEffect(() => {
      const loginvalue = localStorage.getItem("success");
      if (loginvalue) {
        setLogin(true);
      }
    }, []);
    const handleaddtocart=(product)=>{
      if(login){
        const id = product._id;
        //const category="exclusive";
       axios.post(`https://e-commerce-backend-27nb.onrender.com/cart/${category}/${id}`);
      }else{
        alert("Log in to add to Your cart")
      }
       }
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`https://e-commerce-backend-27nb.onrender.com/${category}/${id}`);
        setProduct(response.data); // Set the product data
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (category && id) {
      fetchProduct();
    }
  }, [category, id]); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container" id="homeproducts">
        <div className="home">
    <div className="container" id="homeproducts">
      <div className="row">
        <div className="col-lg-4" key={product._id}>
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
            <div className="addtocart">
            <button className="btn btn-primary"  id="addtocart" style={{width:"50%"}} onClick={()=>handleaddtocart(product)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Detailedpage;

