import React from 'react'
import "../../Css/Footer.css"

function Footer({year}) {
    var date = new Date();
    year = date.getFullYear();
    return (
        <div className="footer">
            <h2>Copyright &#169; {year} All rights reserved </h2>
        </div>
    )
}

export default Footer
