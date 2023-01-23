import "./navbar.css";
import { useNavigate } from "react-router-dom";
import {useContext,useState} from "react";
import {AuthContext} from "../../context/AuthContext.js";

const Navbar = () => {
  const navigate=useNavigate();
  const{login}=useContext(AuthContext);
  return (
    
    <div className="navbar">
     
      <div className="navContainer">
        <span className="logo" onClick={()=>{navigate("/")}}><b>Plan My Trip</b></span>
       {login ? 
        <div className="navItems">
          
        
        <button className="navButton" onClick={()=>{
        navigate("/logout")
      }}>Logout</button>
      </div>
       
       
       
       
       
       
       : 
        <div className="navItems">
          
          <button className="navButton" onClick={()=>{
          navigate("/register")
        }}>Register</button>
          <button className="navButton" onClick={()=>{
          navigate("/login")
        }}>Login</button>
        </div>
}
      </div>
    </div>
  )
}
export default Navbar;