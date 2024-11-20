import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Electronics() {
  const navigate = useNavigate();
  const [electronics,setElectronics]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/electronics").then((response)=>{setElectronics(response.data)})
  },[]);
  const handleclick = () => navigate("/");
  const handlelogoutclick = () => navigate("/login");
  const handlecartclick = () => navigate("/cart");
  return (
    <div className="container" id="homeproducts">
        <div className="home">
        <ul className="nav">
          <li className="nav-item">
            <button className="nav-link" onClick={handleclick}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handlecartclick}>
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handlelogoutclick}>
              Log in
            </button>
          </li>
        </ul>
        </div>
        <div className="row">
          {electronics.map((electronic,_id)=>{
            return(
              <div className="col-lg-4" id="productcard" key={_id}>
                  <div className="card" style={{ width: "auto", height: "auto" }}>
                    <img
                      src={electronic.im}
                      className="card-img-top"
                      alt={electronic.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{electronic.name}</h5>
                      <p className="card-text">Price:{electronic.price}/-</p>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
        </div>
    )
}

export default Electronics