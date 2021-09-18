import React, { Component } from 'react';
import "../../Css/Project.css";
import { deleteProject, applyProject, applicantList } from '../../actions/projectAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {   Link } from "react-router-dom";

 class Project extends Component {
 
      onDeleteClick(id) {
    this.props.deleteProject(id);
  }
     onApplyClick(id) {
      this.props.applyProject(id);
  }
  onSeeApplicantsClick(id) {
          this.props.applicantList(id);
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
                          {user.user.id === projectData.user ? (
                              <button type="button" onClick={this.onDeleteClick.bind(this, projectData._id)} className="delete" >Delete</button>
                        ): (
                              <button  type="button" onClick={this.onApplyClick.bind(this, projectData._id)} className="apply" >Apply</button>
                        )}     
                        <Link to="/allProjects/applicants"
                         style={{textDecoration:0}}>
                            <button onClick={this.onSeeApplicantsClick.bind(this, projectData._id)}    type="button" className="applicants" >See Applicants</button>
                        </Link>
                  </div>
            </div>
         )}
  </div>
  )
   }
}

Project.propTypes = {
  deleteProject: PropTypes.func.isRequired,
  applyProject: PropTypes.func.isRequired,

 
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {applyProject,deleteProject,applicantList })(withRouter(Project));
