import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [login,setLogin]=useState(false);
  useEffect(() => {
    axios.get("https://e-commerce-backend-27nb.onrender.com/").then((response) => {
      setProducts(response.data);
    });
  }, []);
  useEffect(() => {
    const loginvalue = localStorage.getItem("success");
    if (loginvalue) {
      setLogin(true);
    }
  }, []);
  
  const handleaddtocart=(product)=>{
    if(login){
      const id = product._id;
      const category="exclusive";
     axios.post(`https://e-commerce-backend-27nb.onrender.com/cart/${category}/${id}`);
    }else{
      alert("Log in to add to Your cart")
    }
     }
  const clickonfashion = ()=> navigate("/clothes");
  const clickonAccessories = ()=>navigate("/electronics");
  const clickonToys = () => navigate("/toys");
  const clickonAppliancess = () => navigate("/appliances");

  return (
    <>
     
       <div className="container" id="homeproducts">
        <div className="home">
        <p className="exclusive">Exclusive Deals</p>
          <div className="row" >
            {products.map((product) => {
              return (
                <div className="col-lg-4" key={product._id}>
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} >
                <img
                      src={product.im}
                      className="card-img-top"
                      alt={product.Name}
                      
                    />                  <div className="card-body">
                  <h5 className="card-title">{product.Name}</h5>
                      <p className="card-text">Price:{product.price}</p>
                      <button className="btn btn-primary" onClick={()=>handleaddtocart(product)}>Add to cart</button>
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
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonfashion}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png" className="card-img-top" alt="Fashion" />
                  <div className="card-body">
                    <p className="fashion"  >Fashion</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonAccessories}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png" className="card-img-top" alt="Accessories" />
                  <div className="card-body">
                  <p className="accessories" >Accessories</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" >
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonToys}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png" className="card-img-top" alt="Toys" />
                  <div className="card-body">
                    <p className="toys" >Toys</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" >
                <div className="card" id="card" style={{ width: "auto", height: "auto" }} onClick={clickonAppliancess}>
                  <img src="https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png" className="card-img-top" alt="Appliancess" />
                  <div className="card-body">
                    <p className="appliancess" >Appliancess</p>
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
