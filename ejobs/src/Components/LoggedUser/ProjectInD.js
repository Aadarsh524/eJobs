import React, { Component } from 'react';
import "../../Css/Project.css";
import {showAllProject, deleteProject, applyProject } from '../../actions/projectAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

 class ProjectInD extends Component {
 
      onDeleteClick(id) {
    this.props.deleteProject(id);
  }
     onApplyClick(id) {
        const { user } = this.props.auth;
         const newApplicant = {
            email: user.user.email,
          };
      this.props.applyProject(id,newApplicant,this.props.history);
   
      
  }
 onAppliedClick() {
      alert("You've already applied to this project")
   
      
  }

     
   render() {
       const {project, user} = this.props;
     return(
     <div classname="project" >
  
     {project.map((projectData, i) =>
             <div className="projectBody" key={i}> 
                  <h3 className="projectTitle">{projectData.projectTitle}</h3>
                  <h4 className="projectDescription">{projectData.projectDescription}</h4>
                  <ul className="projectSkills">{projectData.projectSkills.map(skills => (
                     <li>{skills}</li> 
                 ))}
                 </ul>
                  <h4 className="projectBudget">{projectData.projectBudget}</h4>  
                 <div className="buttons">
                          {user.user.id !== projectData.user ? 
                          (
                           projectData.applicants.length === 0 ? ( <button  type="button" onClick={this.onApplyClick.bind(this, projectData._id)} className="apply" >Apply</button>
                           ): ( projectData.applicants.map(applicant =>
                            user.user.id  === applicant.user  ? (<button type="button" onClick={this.onAppliedClick.bind(this)} className="apply" >Applied</button>):( <button  type="button" onClick={this.onApplyClick.bind(this, projectData._id)} className="apply" >Apply</button>)
                           ) )

                             
                        ): ( null )}     
                  </div>
            </div>
         )}
  </div>
  )
   }
}

ProjectInD.propTypes = {
  deleteProject: PropTypes.func.isRequired,
  applyProject: PropTypes.func.isRequired,
  showAllProject:PropTypes.func.isRequired,

 
};

const mapStateToProps = (state) => ({
  auth:state.auth
});

export default connect(mapStateToProps, {showAllProject,applyProject,deleteProject })(withRouter(ProjectInD));
