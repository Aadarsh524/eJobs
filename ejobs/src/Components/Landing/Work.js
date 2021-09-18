import React from 'react'
import "../../Css/Work.css"
import { DiPhotoshop } from "react-icons/di";
import {  FaApple, FaVideo, FaFileSignature,FaNodeJs, FaFileExcel, FaShareAlt} from "react-icons/fa";
import { SiFlutter,SiMicrosoftexcel,SiCodersrank, SiMaterialdesignicons, SiGoogletranslate , SiAdobeindesign} from "react-icons/si";
import { AiFillAndroid, AiOutlineBlock, AiOutlineAntDesign } from "react-icons/ai";
import { CgWebsite  } from "react-icons/cg";
import {  GiGamepad } from "react-icons/gi";
import {  ImNewspaper } from "react-icons/im";
import { MdContentPaste } from "react-icons/md";







function Work() {
    return (
        <div className="work">
            <h4>Skills In Demand</h4>
            <div className="workDiv">
                 <ul>
                     <li><CgWebsite style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Website Design</span></li>
                     <li><SiMicrosoftexcel style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Excel</span></li>
                     <li><AiFillAndroid style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Android App</span></li>
                     <li><FaApple style={{color: 'black',fontSize:20, marginRight:10}}/> <span>IOS App</span></li>
                     <li><SiCodersrank style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Coding</span></li>
                     <li><SiMaterialdesignicons style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Graphics Design</span></li>
                     <li><DiPhotoshop style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Photoshop</span></li>
                     <li><FaVideo style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Video Editing</span></li>
                     <li><GiGamepad style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Game Development</span></li>
                     <li><FaFileSignature style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Data Entry</span></li>
                     <li><SiAdobeindesign style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Logo Design</span></li>
                     <li><SiGoogletranslate style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Translation </span></li>
                     <li><AiOutlineBlock style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Blockchain Developer</span></li>
                     <li><ImNewspaper style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Resume Writing</span></li>
                     <li><FaShareAlt style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Digital Marketing</span></li>
                     <li><MdContentPaste style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Content Writer</span></li>
                     <li><FaFileExcel style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Data Analyst</span></li>
                     <li><FaNodeJs style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Node.js Developer</span></li>
                      <li><SiFlutter style={{color: 'black',fontSize:20, marginRight:10}}/> <span>Flutter Developer</span></li>
                       <li><AiOutlineAntDesign style={{color: 'black',fontSize:20, marginRight:10}}/> <span>UI Designer</span></li>
                 </ul>
            </div>
            
        </div>
    )
}

export default Work
