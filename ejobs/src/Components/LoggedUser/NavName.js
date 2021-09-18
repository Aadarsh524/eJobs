import React from 'react'
import "../../Css/NavName.css";


function NavName({pageName,pageDescription }) {
    return (
               <div className="navName">
                    <h4>{pageName}</h4>
                    <p className="description">{pageDescription}</p>
                    <hr/>
                </div>
    )
}

export default NavName
