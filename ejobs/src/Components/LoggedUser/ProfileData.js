import React, { Component } from 'react';
import "../../Css/Project.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from '../../validation/isEmpty.js';
import {  FaFacebookF, FaInstagram , FaDribbble } from "react-icons/fa";
import { AiOutlineLinkedin  } from "react-icons/ai";
import {  RiGithubFill,} from "react-icons/ri";
import Experience from './Experience';
import Education from './Education';


 class ProfileData extends Component {
 
  
     
   render() {
       const { profile  } = this.props;


        let  userExperience;
        let userEducation;
    
        if (profile.workexperience) {
          userExperience = <div>
                                  <Experience workexperience={profile.workexperience} />
                          </div>;
        } 
        else {
               userExperience = <div>No work experience added. </div>;
        }

    if(profile.education){
            userEducation = <div>
                                  <Education education={profile.education} />
                           </div>;
             
        } 
        else {
          userEducation = <div>No work education detail added. </div>;
        }
 
     return(
     <div classname="project" >
           <div className="upperProfile">
                    <div className="PersonalInfo">
                       <div className="upper">
                           
                             <img src={isEmpty(profile.userPhoto) ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" : (`http://localhost:5000/images/${profile.userPhoto}`)} alt="user"  ></img>
                              
                       
                           <div className="userName">
                               <h2>{isEmpty(profile.username) ? "XXXXXXXX" : (profile.username)}</h2>
                               <h4>{isEmpty(profile.profession) ? "XXXXXXXX" : (profile.profession)}</h4>
                           </div>
                       </div>
                        <div className="lower">
                            <ul className="socialLinks">
                               <li><FaFacebookF style={{color: 'lightBlue',fontSize:24}}/></li>
                                    <li onClick={() => { window.open('www.facebook.com','_blank')}}><FaInstagram style={{color: 'lightBlue',fontSize:24}}/></li>
                                    <li><RiGithubFill style={{color: 'lightBlue',fontSize:24}}/></li>
                                    <li><AiOutlineLinkedin style={{color: 'lightBlue',fontSize:24}}/></li>
                                    <li><FaDribbble style={{color: 'lightBlue',fontSize:24}}/></li>
                           </ul>
                             <button className="portfolioSite"> PortFolio Site </button>
                        </div>
                    </div>
                    
                     <div className="aboutUser">
                        <h2>About</h2>
                        <p>
                            {isEmpty(profile.description) ? "XXXXXXXX" : (profile.description)}
                        </p>
                    </div>
                </div>
                <div className="lowerProfile">
                     <div className="otherInfo">
                       
                         <ul>          
                                <li>Experience: <span>{isEmpty(profile.experience) ? "XXXXX" : (profile.experience)}</span></li>
                                <li>Hourly Charge: <span>{isEmpty(profile.hourlyRate) ? "XXXXX" : (profile.hourlyRate)}</span></li>
                                <li>Availibilty: <span>{isEmpty(profile.availibilty) ? "XXXXX" : (profile.availibilty)}h/w</span></li>
                                <li>Address: <span>{isEmpty(profile.address) ? "XXXXX" : (profile.address)}</span></li>
                                <li>Phone: <span>{isEmpty(profile.phone) ? "XXXXX" : (profile.phone)}</span></li>
                                <li>Age: <span>{isEmpty(profile.age) ? "XXXXX" : (profile.age)}</span></li>
                        </ul>
                    </div>
                    <div className="skillsAndLanguage">
                        <div className="skills">
                             <h4>Skills</h4>
                                    <ul>
                                        {isEmpty(profile.skills) ? null : (profile.skills.map(skills => (
                     <li>{skills}</li> 
                 )))}
                                    </ul>
                        </div>
                        <hr/>
                        <div className="skills">
                             <h4>Langauges</h4>
                                    <ul>
                                        {isEmpty(profile.languages) ? null : (profile.languages.map(languages => (
                     <li>{languages}</li> 
                 )))}
                                    </ul>
                                    
                        </div>
                        
                    </div>
                    
                </div>
                 <div className="profileCredentials">
                     <div className="education">
                        {userEducation}
                    </div>
                    <div className="experience">   
                        {userExperience}
                    </div>
                    
                </div>  
     
     </div>
  )
   }
}

ProfileData.propTypes = {
  deleteProject: PropTypes.func.isRequired,
  applyProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {  })(ProfileData);
