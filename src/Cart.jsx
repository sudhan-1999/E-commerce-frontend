import React, { useEffect, useState } from 'react'
import axios from "axios";
function Cart() {
  const [login,setLogin]=useState(false);
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    const loginvalues=localStorage.getItem("success")
    if(loginvalues){
      setLogin(true);
    }
  },[])
  useEffect(()=>{
    axios.get("http://localhost:8000/cart").then((response)=>{
      setProducts(response.data);
    })
  },[])
  console.log(products)
  return (
    <div>
      {products.length>0?(
        products.map((product)=>{
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
            {/*<div>
            <button className="btn btn-primary" onClick={removefromcart}>Remove From cart</button>
            </div>*/}
          </div>
        })
      ):(<p>Your Cart is Empty!</p>)}
    </div>
  )
}

export default Cart