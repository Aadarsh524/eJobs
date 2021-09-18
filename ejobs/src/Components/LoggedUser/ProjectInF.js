import React, { Component } from 'react';
import "../../Css/Project.css";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



 class ProjectInF extends Component {

     
   render() {
       const {project} = this.props;
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
                       
            </div>
         )}
  </div>
  )
   }
}


const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {   })(withRouter(ProjectInF));
