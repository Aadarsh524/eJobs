import React, { Component } from 'react';
import "../../Css/Applicant.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIndividualProfile } from '../../actions/profileAction'
import {  makeChat  } from '../../actions/messageAction'
import {  Link, withRouter } from "react-router-dom";



 class Applicant extends Component {

 
         onProfileClick(id) {
                 this.props.getIndividualProfile(id);
             }

          onSendMessageClick(id) {  
                 this.props.makeChat(id, this.props.history);
             }

    
     
   render() {
    
       const {project, ProjectID} = this.props;
     return(
     <div classname="applicant" >

  
               {project.map((projectData, i) =>
                        <div className="applicantList" key={i}> 

                          { projectData.applicants.length !== 0 ? (

                             projectData.applicants.map(applicant => 
                            ProjectID === applicant.projectId ? (
                               <div className="applicantID">
                                       <h4>{applicant.email}</h4> 
                                          <div>
                                             <Link  to="/allprojects/applicantProfile"  style={{textDecoration:0}}>
                                                   <button type="button" onClick={this.onProfileClick.bind(this, applicant.user)} className="visitProfile" >Visit Profile</button>
                                          </Link>
{/*                                           
                                          <Link to="/allprojects/message"  style={{textDecoration:0}}>       */}
                                                  <button type="button" onClick={this.onSendMessageClick.bind(this, applicant.user)} className="MessageUser" >Message User</button>
                                          {/* </Link> */}
                                       </div>
                               </div> 
                            ): (null)) 
                          ):(<h3>No Applicants Yet.</h3>)}
                              
                              </div> 
                     )}
  </div>
  )
   }
}

Applicant.propTypes = {
  getIndividualProfile: PropTypes.func.isRequired,
  makeChat: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,


 
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {  getIndividualProfile, makeChat  })(withRouter(Applicant));
