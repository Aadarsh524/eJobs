import React from 'react'
import "../../Css/Main.css"
import freelancer from '../../images/freelancer.png'
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="main">
            <div className="mainInfo">
                <h4>Freelancing Market Place of Nepal.</h4>
                <p>Start Today By Creating Account In eJobs.</p>
                   <di className="accountNavBtn">
                        <Link to="/register" style={{textDecoration:0}}>
                        <button className="MregisterBtn">Register</button>
                    </Link>  
                     <Link to="/login" style={{textDecoration:0}}>
                         <button className="MloginBtn">Login</button>
                    </Link>  
                   </di>
            </div>
            <div className="freelancerImg">
                 <img  src={freelancer} alt="freelancer" />
            </div>
        </div>
    )
}

export default Main
