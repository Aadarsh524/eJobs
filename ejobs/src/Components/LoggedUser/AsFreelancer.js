import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProjectInF from './ProjectInF';
import "../../Css/AsClient.css"
import Spinner from '../../Spinner.js'
import { getAppliedProject } from '../../actions/projectAction.js'
import PropTypes from 'prop-types';

class AsFreelancer extends Component {

     componentWillReceiveProps(nextProps){
            if(nextProps.project){
                this.setState({
                    project: nextProps.project,
                    auth: nextProps.auth

                });
            }
     }
       componentDidMount(){
        this.props.getAppliedProject();
    }
    
    render() {
        const { appliedProject,loading } = this.props.project;
         
    let Allprojects;

    if (appliedProject ===  loading) {
      Allprojects = <Spinner />;
    }
    else if (appliedProject.length ===  0 ) {
      Allprojects = <h3>No Project Applied yet.</h3>;
    } else {
      Allprojects = <ProjectInF project={appliedProject} />;
    }
        return (
            <div>
                {Allprojects}
            </div>
        )
    }
}


AsFreelancer.propTypes = {
  getAppliedProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project
});
export default connect(mapStateToProps, {  getAppliedProject})(AsFreelancer);
