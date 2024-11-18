import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Toys() {
  const navigate=useNavigate();
  const [toys,setToys]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/toys").then((response)=>{
      setToys(response.data)
    })
  })
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
          {toys.map((toy,_id)=>{
            return(
              <div className="col-lg-4" key={_id}>
                  <div className="card" style={{ width: "auto", height: "auto" }}>
                    <img
                      src={toy.im}
                      className="card-img-top"
                      alt={toy.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{toy.name}</h5>
                      <p className="card-text">Price:{toy.price}/-</p>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
        </div>
  )
}

export default Toys