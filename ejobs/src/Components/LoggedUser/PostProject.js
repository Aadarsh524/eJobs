import React, { Component } from 'react'
import "../../Css/PostProject.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postProject } from '../../actions/projectAction.js';
import { withRouter } from "react-router-dom";
import NavName from './NavName'


 class PostProject extends Component {
  constructor(){
         super();
             this.state = {
                 projectTitle: '',
                 projectDescription: '',
                 projectSkills: '',
                 projectBudget: '',
              
             };
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

     }
    onChange(e){
         this.setState({[e.target.name]: e.target.value});
     }
      onSubmit(e){
         e.preventDefault();

         const newProject = {
           projectTitle: this.state.projectTitle,
           projectDescription: this.state.projectDescription,
           projectSkills: this.state.projectSkills,
           projectBudget: this.state.projectBudget,
         };
         this.props.postProject(newProject, this.props.history);
     }
    render() {
        return (
             <div className="postProject">
                 <NavName pageName="Post Project" pageDescription="Post a project with all require information."  />
                <div className="postProject_body">
                    <form  autocomplete="off" onSubmit={this.onSubmit}>
                            <h5>Project Title</h5>
                            <input type='text'  
                            name= 'projectTitle'
                            value={this.state.name} 
                            onChange={this.onChange} 
                            />

                            <h5>Project Description</h5>
                            <textarea type='text'
                            name= 'projectDescription'
                            value={this.state.name}
                            onChange={this.onChange}  
                                    />
                                    <h5>Required Skills</h5>
                            <input type='text'
                            name= 'projectSkills'
                            value={this.state.name}
                            onChange={this.onChange}  
                                    />
                                    <h5>Project Budget</h5>
                            <input type='text'
                            name= 'projectBudget'
                            value={this.state.name}
                            onChange={this.onChange}  
                                    />
             <button type='submit' className='postProjectBtn'>Submit</button>
                      </form>
                </div>
            </div>
        )
    }
}

PostProject.propTypes = {
  postProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, {  postProject })(withRouter(PostProject));
