import React from 'react'
import "../../Css/Hiw.css"
import { SiFreelancer,SiGooglemessages} from "react-icons/si";
import { AiOutlineProject } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";


function Hiw() {
    return (
        <div className="hiw">
            <h4>How it works?</h4>
            <div className="hiwDiv">
                 <ul>
                     <li><AiOutlineProject style={{color: 'black',fontSize:30}}/> <span>Post Project</span>
                     </li>
                     <li><SiFreelancer style={{color: 'black',fontSize:30}}/> <span>Choose Freelancer</span></li>
                     <li><SiGooglemessages style={{color: 'black',fontSize:30}}/> <span>Message Freelancer</span></li>
                     <li><MdDoneAll style={{color: 'black',fontSize:30}}/><span>Get Work Done</span></li>      
                 </ul>
            </div>
        </div>
    )
}

export default Hiw
