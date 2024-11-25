import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detailedpage() {
  const {category,id}=useParams();
  const [product,setProduct]=useState([]);
  
  useEffect(()=>{
    axios.get(`http:localhost:8000/${category}/${id}`).then((response)=>{
      setProduct(response.data);
    })
  })
  return (
    <div className="container" id="homeproducts">
    <div className="row">
        <div
          className="col-lg-4"
          key={product._id}>
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
    </div>
  </div>  )
}

export default Detailedpage