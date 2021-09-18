import React from 'react'
import "../../Css/Header.css"
import { Link } from "react-router-dom";
// import ejobs from '../../images/ejobs.png'

function Header() {

     const  handleScroll = e => {
    e.preventDefault();
    window.scrollTo({
        top: 400,
        left: 0,
        behavior: "smooth"
    });
};
    return (
        <div className="header">
         <Link to="/" style={{textDecoration:0}}>
                 <div className="landingEjobs">
                         <h1>eJobs</h1>
                  </div>
         </Link>

         <div className="accountNav">
     
                <h5 onClick={handleScroll}>How it works</h5>

                <Link to="/login" style={{textDecoration:0}}>
                        <button className="loginBtn">Login</button>
                </Link>
                <Link to="/register" style={{textDecoration:0}}>
                        <button className="registerBtn">Register</button>
                </Link>      
         </div>
        </div>
    )
}

export default Header
